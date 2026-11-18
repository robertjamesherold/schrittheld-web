import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import { Icon } from '../components/Icon'
import { Picture } from '../components/Picture'
import type { HeroSlideKey } from '../i18n/types'
import { useLocale } from '../i18n/useLocale'
import { phoneImage } from '../lib/images'

/* Reihenfolge der Highlight-Screens; der Schlüssel ist zugleich der Dateiname in reference/phones/<locale>/ */
const SLIDES: HeroSlideKey[] = ['foot', 'board', 'stairs', 'climb', 'bike', 'friends', 'world', 'badges', 'avatar', 'journey']
const INTERVAL = 2500
/* Wie viele Nachbarn links und rechts sichtbar bleiben */
const VISIBLE = 2
/* Abstand zweier Phones in Phone-Breiten, muss zu translateX in .hero-slide passen */
const STEP = 0.8
/* Ab so vielen Pixeln wird eine Geste als Wischen erkannt (vorher bleibt sie Klick oder Scrollen) */
const DRAG_START = 8
/* Kurzes, schnelles Wischen reicht für einen Schritt */
const FLICK_PX = 30
const FLICK_SPEED = 0.35 // px pro ms

/** Kürzester Abstand im Kreis, damit das Karussell endlos in beide Richtungen läuft. */
const offsetOf = (i: number, active: number, n: number) => {
  let o = (i - active) % n
  if (o > n / 2) o -= n
  if (o < -n / 2) o += n
  return o
}

type Drag = { id: number; x: number; y: number; t: number; dx: number; on: boolean }

/**
 * Coverflow mit den freigestellten iPhones: der aktive Screen groß in der Mitte, Nachbarn kleiner und gekippt.
 * Läuft automatisch weiter, hält bei Hover, Fokus, Wischen, verstecktem Tab und prefers-reduced-motion an.
 * Wischen (Phones folgen dem Finger und rasten beim Loslassen ein), Pfeiltasten, Punkte und Pause-Knopf steuern es von Hand.
 */
export const HeroCarousel = () => {
  const { locale, t } = useLocale()
  const c = t.hero.carousel
  const n = SLIDES.length
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false) // vom Pause-Knopf
  const [hold, setHold] = useState(false) // Hover/Fokus
  const [reduced, setReduced] = useState(false)
  const [dragDx, setDragDx] = useState<number | null>(null) // Fingerweg in px, solange gewischt wird
  const drag = useRef<Drag | null>(null)
  const suppressClick = useRef(false)
  const stage = useRef<HTMLDivElement>(null)

  const go = (i: number) => setActive(((i % n) + n) % n)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const running = !paused && !hold && !reduced && dragDx === null
  useEffect(() => {
    if (!running) return
    const id = window.setInterval(() => {
      if (!document.hidden) setActive((a) => (a + 1) % n)
    }, INTERVAL)
    return () => window.clearInterval(id)
  }, [running, n, active])

  /** Pixel pro Schritt: Breite des Phones (92 % der Bühnenhöhe, Seitenverhältnis 738:1400) mal STEP */
  const stepPx = () => {
    const h = stage.current?.clientHeight ?? 400
    return h * 0.92 * (738 / 1400) * STEP
  }

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    drag.current = { id: e.pointerId, x: e.clientX, y: e.clientY, t: e.timeStamp, dx: 0, on: false }
  }

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current
    if (!d || d.id !== e.pointerId) return
    const dx = e.clientX - d.x
    const dy = e.clientY - d.y
    if (!d.on) {
      if (Math.abs(dx) < DRAG_START) return
      // eher senkrecht: der Browser scrollt die Seite, kein Wischen
      if (Math.abs(dy) > Math.abs(dx)) {
        drag.current = null
        return
      }
      d.on = true
      e.currentTarget.setPointerCapture(e.pointerId)
    }
    d.dx = dx
    setDragDx(dx)
  }

  const endDrag = (e: PointerEvent<HTMLDivElement>, cancelled: boolean) => {
    const d = drag.current
    drag.current = null
    if (!d || d.id !== e.pointerId || !d.on) return
    setDragDx(null)
    // Der Klick nach dem Loslassen kommt direkt nach pointerup; danach die Sperre wieder lösen
    suppressClick.current = true
    window.setTimeout(() => (suppressClick.current = false), 0)
    if (cancelled) return
    const speed = Math.abs(d.dx) / Math.max(1, e.timeStamp - d.t)
    let steps = Math.round(-d.dx / stepPx())
    if (steps === 0 && (Math.abs(d.dx) > stepPx() * 0.25 || (Math.abs(d.dx) > FLICK_PX && speed > FLICK_SPEED))) {
      steps = d.dx < 0 ? 1 : -1
    }
    if (steps !== 0) go(active + steps)
  }

  const shift = dragDx === null ? 0 : dragDx / stepPx()

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={c.label}
      className="hero-stage-wrap mx-auto mt-10 max-w-[1200px] px-3 sm:px-6 md:mt-14"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHold(false)
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(active + 1)
        if (e.key === 'ArrowLeft') go(active - 1)
      }}
    >
      <div
        ref={stage}
        className={`hero-stage relative touch-pan-y select-none ${dragDx !== null ? 'is-dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(e) => endDrag(e, false)}
        onPointerCancel={(e) => endDrag(e, true)}
        onDragStart={(e) => e.preventDefault()}
        onClickCapture={(e) => {
          // Nach dem Wischen keinen Klick auf ein Phone auslösen
          if (suppressClick.current) {
            suppressClick.current = false
            e.stopPropagation()
            e.preventDefault()
          }
        }}
      >
        {SLIDES.map((key, i) => {
          const base = offsetOf(i, active, n)
          const o = base + shift
          const abs = Math.abs(o)
          const opacity = Math.min(1, Math.max(0, VISIBLE + 1 - abs))
          const style = {
            '--o': o,
            '--s': 1 - Math.min(abs, VISIBLE + 1) * 0.17,
            '--r': `${o * 5}deg`,
            zIndex: 10 - Math.round(abs),
            opacity: dragDx === null ? (abs <= VISIBLE ? 1 : 0) : opacity,
          } as CSSProperties
          return (
            <button
              key={key}
              type="button"
              tabIndex={-1}
              aria-hidden={base !== 0}
              onClick={() => go(i)}
              className={`hero-slide ${base === 0 ? 'is-active' : ''} ${opacity > 0 ? '' : 'pointer-events-none'}`}
              style={style}
            >
              <Picture
                pic={phoneImage(locale, key)}
                alt={base === 0 ? c.slides[key].alt : ''}
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 30vw, 46vw"
                priority={Math.abs(base) <= 1}
                imgClassName="block h-full w-full object-contain"
                className="block h-full w-full"
              />
            </button>
          )
        })}
      </div>

      <div className="relative z-20 mt-6 flex flex-col items-center gap-3">
        <p
          aria-live={running ? 'off' : 'polite'}
          className="rotate-[-2deg] rounded-full border-3 border-ink bg-sun px-4 py-1 text-lg font-black text-ink shadow-comic-sm"
        >
          {c.slides[SLIDES[active] ?? SLIDES[0]!].label}
        </p>
        <div className="flex items-center gap-3">
          <ol className="flex flex-wrap justify-center gap-1.5">
            {SLIDES.map((key, i) => (
              <li key={key}>
                <button
                  type="button"
                  aria-label={c.slides[key].label}
                  aria-current={i === active ? 'true' : undefined}
                  onClick={() => go(i)}
                  className={`block h-3 rounded-full border-2 border-ink transition-all duration-300 ${
                    i === active ? 'w-8 bg-sun' : 'w-3 bg-white hover:bg-sky'
                  }`}
                />
              </li>
            ))}
          </ol>
          {!reduced && (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? c.play : c.pause}
              className="grid h-8 w-8 place-items-center rounded-full border-2 border-ink bg-white text-ink shadow-comic-sm"
            >
              <Icon name={paused ? 'play' : 'pause'} className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
