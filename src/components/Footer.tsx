import { Link } from 'react-router-dom'
import { useLocale } from '../i18n/useLocale'
import { LanguageSwitch } from './LanguageSwitch'

export const Footer = () => {
  const { t, to } = useLocale()
  return (
    <footer className="border-t-3 border-ink bg-ink text-white">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-2xl font-black">{t.appName}</p>
          <p className="text-white/80">{t.footer.madeWith}</p>
        </div>
        <nav aria-label={t.a11y.mainNav}>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-extrabold">
            <li>
              <Link className="underline-offset-4 hover:underline" to={to('support')}>{t.footer.support}</Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" to={to('privacy')}>{t.footer.privacy}</Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" to={to('imprint')}>{t.footer.imprint}</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <span className="text-sm text-white/80">{t.footer.language}</span>
          <LanguageSwitch />
        </div>
      </div>
      <p className="mx-auto max-w-content px-4 pb-8 text-sm text-white/70 sm:px-6">
        © {new Date().getFullYear()} Robert James Herold
      </p>
    </footer>
  )
}
