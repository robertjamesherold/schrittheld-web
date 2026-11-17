import { Fragment, type ReactNode } from 'react'
import type { Rich } from '../i18n/types'

/** Inline-Auszeichnung: **fett**, _kursiv_, [Text](url) und Zeilenumbrüche. */
function inline(text: string, keyPrefix = ''): ReactNode[] {
  const out: ReactNode[] = []
  const re = /\*\*(.+?)\*\*|_(.+?)_|\[(.+?)\]\((.+?)\)|\n/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    const key = `${keyPrefix}${i++}`
    if (m[1] !== undefined) out.push(<strong key={key} className="font-extrabold">{m[1]}</strong>)
    else if (m[2] !== undefined) out.push(<em key={key}>{m[2]}</em>)
    else if (m[3] !== undefined && m[4] !== undefined) {
      const external = /^https?:/.test(m[4])
      out.push(
        <a
          key={key}
          href={m[4]}
          className="font-extrabold underline decoration-sun decoration-[3px] underline-offset-2 hover:decoration-ink dark:hover:decoration-white"
          {...(external ? { rel: 'noopener' } : {})}
        >
          {m[3]}
        </a>,
      )
    } else out.push(<br key={key} />)
    last = re.lastIndex
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

export const RichInline = ({ text }: { text: Rich }) => <>{inline(text)}</>

/** Absätze; ein Block aus Zeilen mit "- " wird zur Liste. */
export const RichBlocks = ({ blocks, className = '' }: { blocks: Rich[]; className?: string }) => (
  <>
    {blocks.map((block, i) =>
      block.startsWith('- ') ? (
        <ul key={i} className={`list-none space-y-1.5 ${className}`}>
          {block.split('\n').map((line, j) => (
            <li key={j} className="relative pl-6 before:absolute before:left-0 before:top-[0.55em] before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-ink before:bg-steps">
              {inline(line.replace(/^- /, ''))}
            </li>
          ))}
        </ul>
      ) : (
        <p key={i} className={className}>
          <Fragment>{inline(block)}</Fragment>
        </p>
      ),
    )}
  </>
)
