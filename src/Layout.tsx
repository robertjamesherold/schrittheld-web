import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { dictionaries, LocaleContext } from './i18n/useLocale'
import type { Locale } from './i18n/types'
import { pageKeyFromPath } from './lib/pages'
import { useReveal } from './lib/useReveal'

/** Rahmen jeder Seite: Sprache, Sprunglink, Kopf, Inhalt, Fuß. */
export const Layout = ({ locale }: { locale: Locale }) => {
  const { pathname, hash } = useLocation()
  const t = dictionaries[locale]

  useReveal(pathname)

  // Bei Navigation im Browser: Titel, Beschreibung und Sprache aktualisieren (das HTML vom Build hat sie schon).
  useEffect(() => {
    const key = pageKeyFromPath(pathname) ?? 'notFound'
    document.title = t.meta[key].title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta[key].description)
    document.documentElement.lang = locale
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash, locale, t])

  return (
    <LocaleContext.Provider value={locale}>
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:border-3 focus:border-ink focus:bg-sun focus:px-4 focus:py-2 focus:font-black focus:text-ink"
      >
        {t.a11y.skipToContent}
      </a>
      <div className="absolute inset-x-0 top-0 z-20">
        <Header />
      </div>
      <main id="inhalt" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </LocaleContext.Provider>
  )
}
