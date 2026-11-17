import { APP_STORE_ID, SITE_URL } from '../config'
import { dictionaries } from '../i18n/useLocale'
import type { Locale } from '../i18n/types'
import { pagePaths, type PageKey } from './pages'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const base = import.meta.env.BASE_URL // z. B. "/"
const abs = (path: string) => `${SITE_URL}${path}`
const asset = (file: string) => `${base}${file}`

/** <head>-Inhalt einer vorgerenderten Seite: Titel, Beschreibung, Canonical, hreflang, Open Graph, Icons. */
export function renderHead({ page, locale, canonical }: { page: PageKey | 'notFound'; locale: Locale; canonical?: string }): string {
  const t = dictionaries[locale]
  const meta = t.meta[page]
  const og = abs(`/og/og-image-${locale}.png`)
  const tags: string[] = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}">`,
    `<meta name="theme-color" content="#2A66EB">`,
    `<link rel="icon" type="image/png" sizes="32x32" href="${asset('icons/favicon-32.png')}">`,
    `<link rel="apple-touch-icon" href="${asset('icons/apple-touch-icon.png')}">`,
    `<link rel="manifest" href="${asset('site.webmanifest')}">`,
  ]

  if (page === 'notFound') {
    tags.push('<meta name="robots" content="noindex">')
  } else {
    const paths = pagePaths[page]
    tags.push(
      `<link rel="canonical" href="${abs(canonical ?? paths[locale])}">`,
      `<link rel="alternate" hreflang="de" href="${abs(paths.de)}">`,
      `<link rel="alternate" hreflang="en" href="${abs(paths.en)}">`,
      `<link rel="alternate" hreflang="x-default" href="${abs(paths.de)}">`,
      `<meta property="og:url" content="${abs(paths[locale])}">`,
    )
  }

  tags.push(
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${esc(t.appName)}">`,
    `<meta property="og:title" content="${esc(meta.title)}">`,
    `<meta property="og:description" content="${esc(meta.description)}">`,
    `<meta property="og:locale" content="${locale === 'de' ? 'de_DE' : 'en_US'}">`,
    `<meta property="og:locale:alternate" content="${locale === 'de' ? 'en_US' : 'de_DE'}">`,
    `<meta property="og:image" content="${og}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${esc(`${t.appName} – ${t.hero.subtitle}`)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(meta.title)}">`,
    `<meta name="twitter:description" content="${esc(meta.description)}">`,
    `<meta name="twitter:image" content="${og}">`,
  )

  if (APP_STORE_ID) tags.push(`<meta name="apple-itunes-app" content="app-id=${APP_STORE_ID}">`)

  return tags.join('\n    ')
}
