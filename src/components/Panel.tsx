import type { ElementType, ReactNode } from 'react'

interface PanelProps {
  as?: ElementType
  className?: string
  /** Kippt beim Hover um 1° */
  tilt?: boolean
  children: ReactNode
  id?: string
}

/** Weiße Comic-Karte: 3 px Tintenrand, harter Schatten unten rechts. */
export const Panel = ({ as: Tag = 'div', className = '', tilt = false, children, id }: PanelProps) => (
  <Tag id={id} className={`panel ${tilt ? 'tilt-hover' : ''} ${className}`}>
    {children}
  </Tag>
)
