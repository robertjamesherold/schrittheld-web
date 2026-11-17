import type { ReactNode } from 'react'
import type { LegalSection } from '../i18n/types'
import { useLocale } from '../i18n/useLocale'
import { Panel } from './Panel'
import { RichBlocks } from './RichText'

/** Gut lesbarer Rechtstext: schmale Spalte, nummerierte Abschnitte, optional mit Inhaltsverzeichnis. */
export const LegalDocument = ({ sections, toc = false, intro }: { sections: LegalSection[]; toc?: boolean; intro?: ReactNode }) => {
  const { t } = useLocale()
  return (
    <div className="bg-dots">
      <div className={`mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 ${toc ? 'lg:grid-cols-[260px_1fr]' : ''}`}>
        {toc && (
          <nav aria-labelledby="toc-title" className="lg:sticky lg:top-6 lg:self-start">
            <Panel className="p-5">
              <h2 id="toc-title" className="mb-3 text-sm font-black uppercase tracking-[0.12em] text-fg">
                {t.a11y.toc}
              </h2>
              <ol className="flex flex-col gap-1.5 text-[0.95rem] font-bold">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="flex gap-2 rounded-md text-fg hover:underline">
                      <span className="tabular-nums text-muted">{i + 1}.</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </Panel>
          </nav>
        )}
        <Panel as="article" className="min-w-0 p-5 sm:p-10">
          <div className="max-w-[68ch]">
            {intro}
            {sections.map((s, i) => (
              <section key={s.id} aria-labelledby={s.id} className="mt-10 first:mt-0">
                <h2 id={s.id} className="mb-3 scroll-mt-6 hyphens-auto break-words text-2xl text-fg">
                  {toc && <span className="mr-2 text-skyDeep dark:text-sky">{i + 1}.</span>}
                  {s.title}
                </h2>
                <div className="flex flex-col gap-4 break-words text-[1.05rem] leading-relaxed text-fg">
                  <RichBlocks blocks={s.body} />
                </div>
              </section>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  )
}
