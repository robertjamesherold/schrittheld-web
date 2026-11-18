import type { CSSProperties } from 'react'

/**
 * Sterne im Stil der Funkelsterne aus dem Hero-Bild (weiß und gelb, mit Tintenrand):
 * 1. Sternschnuppen, die am Bildrand auftauchen und mit Lichtschweif entlang der Speed-Lines nach außen beschleunigen.
 * 2. Feste Funkelsterne um Titel und Bild, die versetzt aufblitzen.
 * Rein dekorativ; alle Werte sind fest (kein Math.random), damit Server- und Client-HTML gleich sind.
 * Das Elternelement (.hero-burst.burst-spin) liefert --burst-x/--burst-y, --img-hw/--img-hh und overflow-hidden.
 */

const SPARKLE = 'M12 1.5c.9 5.6 2.9 7.6 8.5 8.5-5.6.9-7.6 2.9-8.5 8.5-.9-5.6-2.9-7.6-8.5-8.5 5.6-.9 7.6-2.9 8.5-8.5Z'

const Sparkle = ({ color }: { color: string }) => (
  <svg viewBox="0 0 24 24" width="100%" height="100%">
    <path d={SPARKLE} transform="translate(0 2)" fill={color} stroke="#1F1C2E" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
)

const WHITE = '#ffffff'
const SUN = '#ffd338'

/** Abstand von der Mitte bis zum Bildrand in Richtung des Winkels (Bild = Rechteck mit --img-hw × --img-hh). */
const edge = (angle: number) => {
  const rad = (angle * Math.PI) / 180
  const kx = Math.min(1 / Math.abs(Math.cos(rad)), 1000).toFixed(4)
  const ky = Math.min(1 / Math.abs(Math.sin(rad)), 1000).toFixed(4)
  return `min(calc(var(--img-hw, 0px) * ${kx}), calc(var(--img-hh, 0px) * ${ky}))`
}

/* Sternschnuppen: Richtungen über den goldenen Winkel, Tempo, Größe und Start gestaffelt. */
const SHOOTERS = 22
const shooters = Array.from({ length: SHOOTERS }, (_, i) => {
  const angle = (i * 137.508 + 11) % 360
  return {
    angle,
    start: edge(angle),
    duration: 1.8 + ((i * 7) % 5) * 0.28, // 1,8–2,9 s
    delay: -((i * 0.83) % 4.6),
    size: 28 + ((i * 11) % 5) * 8, // 28–60 px
    color: i % 4 === 1 ? SUN : WHITE,
  }
})

/* Feste Funkelsterne (Position in % des Hero), passend zu den Sternen im Bild. */
const twinkles = [
  { x: 9, y: 14, size: 34, color: SUN, delay: 0 },
  { x: 88, y: 10, size: 28, color: WHITE, delay: 0.9 },
  { x: 16, y: 36, size: 22, color: WHITE, delay: 1.7 },
  { x: 84, y: 33, size: 38, color: SUN, delay: 2.4 },
  { x: 4, y: 52, size: 26, color: WHITE, delay: 3.1 },
  { x: 95, y: 56, size: 24, color: WHITE, delay: 0.5 },
]

export const BurstStars = () => (
  <div aria-hidden="true" className="burst-stars">
    {shooters.map((s, i) => (
      <span
        key={`s${i}`}
        className="shooter"
        style={
          {
            '--star-angle': `${s.angle}deg`,
            '--star-start': s.start,
            '--star-size': `${s.size}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          } as CSSProperties
        }
      >
        <i className="tail" />
        <i className="star">
          <Sparkle color={s.color} />
        </i>
      </span>
    ))}
    {twinkles.map((t, i) => (
      <span
        key={`t${i}`}
        className="twinkle"
        style={
          {
            left: `${t.x}%`,
            top: `${t.y}%`,
            '--star-size': `${t.size}px`,
            animationDelay: `${t.delay}s`,
          } as CSSProperties
        }
      >
        <Sparkle color={t.color} />
      </span>
    ))}
  </div>
)
