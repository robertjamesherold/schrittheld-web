import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { toneBg, type Tone } from './tones'

type Props = {
  tone?: Tone
  className?: string
  children: ReactNode
} & ({ to: string; href?: never } | { href: string; to?: never })

/** Pillen-Button mit Tintenrand. Beim Drücken rutscht er um die Schattenbreite nach unten rechts. */
export const ComicButton = ({ tone = 'sun', className = '', children, ...rest }: Props) => {
  const cls = `btn-comic ${toneBg[tone]} ${className}`
  if ('to' in rest && rest.to !== undefined) {
    return (
      <Link to={rest.to} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <a href={rest.href} className={cls}>
      {children}
    </a>
  )
}
