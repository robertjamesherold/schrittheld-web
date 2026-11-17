import type { CSSProperties, ElementType, ReactNode } from 'react'
import { toneBurst, type Tone } from './tones'

interface SunburstProps {
  tone: Exclude<Tone, 'white'>
  as?: ElementType
  className?: string
  /** Rasterpunkte darüberlegen */
  dots?: boolean
  /** Mittelpunkt der Strahlen, z. B. { x: '70%', y: '40%' } */
  center?: { x: string; y: string }
  children?: ReactNode
  id?: string
  'aria-labelledby'?: string
}

/** Strahlenkranz in der Bereichsfarbe, rein per CSS (repeating-conic-gradient), optional mit Rasterpunkten. */
export const Sunburst = ({ tone, as: Tag = 'div', className = '', dots = true, center, children, ...rest }: SunburstProps) => {
  const style = center ? ({ '--burst-x': center.x, '--burst-y': center.y } as CSSProperties) : undefined
  return (
    <Tag className={`bg-sunburst ${toneBurst[tone]} ${dots ? 'halftone' : ''} ${className}`} style={style} {...rest}>
      {children}
    </Tag>
  )
}
