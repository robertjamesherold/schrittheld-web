import type { ReactNode } from 'react'
import { ComicTag } from './ComicTag'
import { Sunburst } from './Sunburst'

/** Farbiger Kopf der Unterseiten: Strahlenkranz, Etikett, große Überschrift. */
export const PageHeader = ({ tag, title, lead, children }: { tag: string; title: string; lead?: ReactNode; children?: ReactNode }) => (
  <Sunburst tone="skyDeep" className="border-b-3 border-ink pb-14 pt-28 sm:pt-32">
    <div className="mx-auto flex max-w-content flex-col items-start gap-4 px-4 sm:px-6">
      <ComicTag tone="sun">{tag}</ComicTag>
      <h1 id="seitentitel" className="title-pop hyphens-auto break-words text-[2.6rem] sm:text-6xl">
        {title}
      </h1>
      {lead && <p className="max-w-2xl text-lg text-white">{lead}</p>}
      {children}
    </div>
  </Sunburst>
)
