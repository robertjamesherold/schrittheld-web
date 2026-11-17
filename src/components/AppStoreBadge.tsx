import { appStoreUrl } from '../config'
import { useLocale } from '../i18n/useLocale'

/*
 * Offizielle Badges von https://developer.apple.com/app-store/marketing/guidelines/
 * unverändert in src/assets/badges/ ablegen: app-store-de.svg, app-store-en.svg.
 * Fehlen sie noch, erscheint ein Comic-Button mit Text, damit der Build nicht bricht.
 */
const badges = import.meta.glob<string>('../assets/badges/app-store-*.svg', {
  query: '?url',
  import: 'default',
  eager: true,
})

export const AppStoreBadge = ({ className = '' }: { className?: string }) => {
  const { locale, t } = useLocale()
  const src = Object.entries(badges).find(([path]) => path.endsWith(`app-store-${locale}.svg`))?.[1]

  if (!src) {
    return (
      <a href={appStoreUrl(locale)} className={`btn-comic bg-ink text-white ${className}`}>
        {t.appStore.fallbackLabel}
      </a>
    )
  }

  return (
    <a
      href={appStoreUrl(locale)}
      className={`inline-block rounded-[14px] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0.5 ${className}`}
    >
      {/* Apple verlangt eine Mindesthöhe von 40 pt; hier 56 px. */}
      <img src={src} alt={t.appStore.badgeAlt} height={56} className="h-14 w-auto" />
    </a>
  )
}
