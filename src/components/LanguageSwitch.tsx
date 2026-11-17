import { Link, useLocation } from 'react-router-dom'
import { useLocale } from '../i18n/useLocale'
import { locales } from '../i18n/types'
import { pageKeyFromPath, pagePaths } from '../lib/pages'

/** DE | EN als Pillen-Umschalter. Führt zur selben Seite in der anderen Sprache. */
export const LanguageSwitch = ({ className = '' }: { className?: string }) => {
  const { locale, t } = useLocale()
  const { pathname } = useLocation()
  const page = pageKeyFromPath(pathname) ?? 'home'

  return (
    <nav aria-label={t.a11y.languageSwitch} className={className}>
      <ul className="flex rounded-full border-3 border-ink bg-white p-0.5 shadow-comic-sm">
        {locales.map((l) => {
          const active = l === locale
          return (
            <li key={l}>
              <Link
                to={pagePaths[page][l]}
                hrefLang={l}
                lang={l}
                aria-current={active ? 'true' : undefined}
                aria-label={l === 'de' ? 'Deutsch' : 'English'}
                className={`block rounded-full px-3 py-1 text-sm font-black uppercase tracking-wider ${
                  active ? 'bg-ink text-white' : 'text-ink hover:bg-sun'
                }`}
              >
                {l}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
