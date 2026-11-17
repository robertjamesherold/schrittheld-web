import { LegalDocument } from '../components/LegalDocument'
import { PageHeader } from '../components/PageHeader'
import { useLocale } from '../i18n/useLocale'

export const Imprint = () => {
  const { t } = useLocale()
  return (
    <>
      <PageHeader tag={t.imprint.tag} title={t.imprint.heading} />
      <LegalDocument sections={t.imprint.sections} />
    </>
  )
}
