import type { ReactNode } from 'react'
import { ComicTag } from './ComicTag'
import type { Tone } from './tones'

interface SectionHeadingProps {
  id?: string
  tag?: string
  tone?: Tone
  title: ReactNode
  lead?: ReactNode
  /**
   * paper: Tintenfarbe auf Papier (im Dark Mode hell)
   * pop:   weiß mit hartem Tintenschatten, nur auf dunklen Farbflächen (skyDeep, cycling)
   * ink:   immer Tinte, für helle Farbflächen (steps, flights, sun, sky)
   */
  variant?: 'paper' | 'pop' | 'ink'
  align?: 'center' | 'left'
  level?: 1 | 2
}

const titleClass = { paper: 'text-fg', pop: 'title-pop', ink: 'text-ink' }
const leadClass = { paper: 'text-muted', pop: 'text-white', ink: 'text-ink' }

export const SectionHeading = ({ id, tag, tone = 'sun', title, lead, variant = 'paper', align = 'center', level = 2 }: SectionHeadingProps) => {
  const H = level === 1 ? 'h1' : 'h2'
  return (
    <div className={`mb-10 flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start'}`}>
      {tag && <ComicTag tone={tone}>{tag}</ComicTag>}
      <H id={id} className={`max-w-3xl ${level === 1 ? 'text-5xl sm:text-6xl' : 'text-4xl sm:text-5xl'} ${titleClass[variant]}`}>
        {title}
      </H>
      {lead && <p className={`max-w-2xl text-lg ${leadClass[variant]}`}>{lead}</p>}
    </div>
  )
}
