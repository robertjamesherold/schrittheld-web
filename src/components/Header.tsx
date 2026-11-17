import { Link } from 'react-router-dom'
import { useLocale } from '../i18n/useLocale'
import { appIcon } from '../lib/images'
import { LanguageSwitch } from './LanguageSwitch'
import { Picture } from './Picture'

export const Header = () => {
  const { t, to } = useLocale()
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to={to('home')} aria-label={t.a11y.homeLink} className="flex items-center gap-3 rounded-2xl">
          <Picture pic={appIcon} alt="" sizes="44px" priority imgClassName="h-11 w-11 rounded-[12px] border-3 border-ink shadow-comic-sm" />
          <span className="hidden text-xl font-black text-white [text-shadow:2px_2px_0_#1F1C2E] sm:inline">{t.appName}</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to={to('support')}
            className="hidden rounded-full px-3 py-1 font-extrabold text-white [text-shadow:2px_2px_0_#1F1C2E] hover:underline sm:inline"
          >
            {t.nav.support}
          </Link>
          <LanguageSwitch />
        </div>
      </div>
    </header>
  )
}
