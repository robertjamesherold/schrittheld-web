import type { Locale } from '../i18n/types'

export type PageKey = 'home' | 'support' | 'privacy' | 'imprint'

/** Pfade relativ zur Basis (ohne BASE_URL), immer mit abschließendem Schrägstrich. */
export const pagePaths: Record<PageKey, Record<Locale, string>> = {
  home: { de: '/', en: '/en/' },
  support: { de: '/support/', en: '/en/support/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
  imprint: { de: '/impressum/', en: '/en/imprint/' },
}

/** Alte Adressen aus App Store Connect und der App. Sie werden als echte HTML-Seiten erzeugt. */
export const legacyPaths: Record<string, PageKey> = {
  '/datenschutz.html': 'privacy',
  '/support.html': 'support',
}

export function localeFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'de'
}

export function pageKeyFromPath(pathname: string): PageKey | null {
  const normalized = pathname.endsWith('/') || pathname.endsWith('.html') ? pathname : `${pathname}/`
  if (legacyPaths[pathname]) return legacyPaths[pathname]
  for (const [key, paths] of Object.entries(pagePaths) as [PageKey, Record<Locale, string>][]) {
    if (paths.de === normalized || paths.en === normalized) return key
  }
  return null
}

/** Basis-Pfad ohne abschließenden Schrägstrich, z. B. "" (Root) oder "/schrittheld-web". */
export const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
