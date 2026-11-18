import type { CSSProperties } from 'react'

/**
 * Comic-Impact hinter einer Figurengruppe: weißer Leuchtblitz, der im harten Comic-Takt pulsiert,
 * dazu Schockwellen-Ringe mit Tintenkontur, die nach außen laufen. Rein dekorativ.
 * Das Elternelement braucht position: relative und overflow-hidden; Mittelpunkt über --burst-x/--burst-y.
 */
export const ImpactBurst = () => (
  <div aria-hidden="true" className="impact-burst">
    {[0, 1, 2].map((i) => (
      <span key={i} className="impact-ring" style={{ animationDelay: `${i * 1.5}s` } as CSSProperties} />
    ))}
    <span className="impact-glow" />
  </div>
)
