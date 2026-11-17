import type { ReactNode } from 'react'
import { toneBg, type Tone } from './tones'

/** Kleines Comic-Etikett: Pille, Großbuchstaben, gesperrt. */
export const ComicTag = ({ tone = 'sun', children, className = '' }: { tone?: Tone; children: ReactNode; className?: string }) => (
  <span className={`tag-comic ${toneBg[tone]} ${className}`}>{children}</span>
)
