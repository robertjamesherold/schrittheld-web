import { LegalDocument } from '../components/LegalDocument'
import { PageHeader } from '../components/PageHeader'
import { RichInline } from '../components/RichText'
import { useLocale } from '../i18n/useLocale'

export const Privacy = () => {
  const { t } = useLocale()
  const p = t.privacy
  return (
    <>
      <PageHeader tag={p.tag} title={p.heading} lead={p.updated} />
      <LegalDocument
        toc
        sections={p.sections}
        intro={
          <p className="mb-10 rounded-2xl border-3 border-ink bg-steps/20 p-5 text-[1.05rem] leading-relaxed text-fg">
            <strong className="font-black">{p.summaryLabel}: </strong>
            <RichInline text={p.summary} />
          </p>
        }
      />
    </>
  )
}
