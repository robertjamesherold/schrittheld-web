import { ComicButton } from '../components/ComicButton'
import { Picture } from '../components/Picture'
import { Sunburst } from '../components/Sunburst'
import { useLocale } from '../i18n/useLocale'
import { avatarImage } from '../lib/images'

export const NotFound = () => {
  const { t, to } = useLocale()
  return (
    <Sunburst tone="skyDeep" className="flex min-h-[80vh] items-center pb-20 pt-28">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-4 text-center">
        <div className="w-40 motion-safe:animate-hop">
          <Picture pic={avatarImage('eule-zauberer')} alt="" sizes="160px" priority imgClassName="h-auto w-full drop-shadow-comic" />
        </div>
        <p className="title-pop text-7xl sm:text-8xl" aria-hidden="true">
          404
        </p>
        <h1 className="title-pop text-4xl sm:text-5xl">{t.notFound.heading}</h1>
        <p className="max-w-md text-lg text-white">{t.notFound.body}</p>
        <ComicButton to={to('home')} tone="sun">
          {t.notFound.back}
        </ComicButton>
      </div>
    </Sunburst>
  )
}
