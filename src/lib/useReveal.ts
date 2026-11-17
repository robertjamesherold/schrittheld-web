import { useEffect } from 'react'

/**
 * Lässt Elemente mit der Klasse .reveal beim Scrollen hereinschweben.
 * Ein einziger IntersectionObserver, kein Animationspaket. Bei prefers-reduced-motion
 * greift das CSS ohnehin nicht; die Klasse wird trotzdem gesetzt.
 */
export function useReveal(dep: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}
