import { AppStoreBadge } from '../components/AppStoreBadge'
import { Icon } from '../components/Icon'
import { PhoneShot } from '../components/PhoneShot'
import { Picture } from '../components/Picture'
import { RichInline } from '../components/RichText'
import { Sunburst } from '../components/Sunburst'
import { useLocale } from '../i18n/useLocale'
import { appIcon, avatarImage, poster } from '../lib/images'

export const Hero = () => {
  const { locale, t } = useLocale()
  return (
    <Sunburst
      as="section"
      tone="skyDeep"
      center={{ x: '72%', y: '55%' }}
      aria-labelledby="hero-title"
      className="overflow-hidden border-b-3 border-ink pb-16 pt-24 sm:pt-28 md:pb-24"
    >
      <div className="mx-auto grid max-w-content items-center gap-14 px-4 sm:px-6 md:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col items-start gap-6">
          <Picture
            pic={appIcon}
            alt={t.hero.iconAlt}
            sizes="96px"
            priority
            imgClassName="h-24 w-24 -rotate-6 rounded-[24px] border-3 border-ink shadow-comic"
          />
          <div>
            <h1 id="hero-title" className="title-pop text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
              {t.appName}
            </h1>
            <p className="mt-4 inline-block -rotate-1 rounded-full border-3 border-ink bg-sun px-4 py-1 text-lg font-black text-ink shadow-comic-sm sm:text-xl">
              {t.hero.subtitle}
            </p>
          </div>
          <p className="max-w-xl text-lg text-white sm:text-xl">
            <RichInline text={t.hero.pitch} />
          </p>
          <AppStoreBadge />
          <ul className="flex flex-wrap gap-2">
            {t.hero.facts.map((fact) => (
              <li key={fact} className="flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-3 py-1 text-sm font-extrabold text-ink">
                <Icon name="check" className="h-4 w-4 text-steps [stroke-width:3.5]" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <PhoneShot pic={poster(locale, '01')} alt={t.hero.screenshotAlt} rotate={4} priority />
          <div className="pointer-events-none absolute -bottom-6 -left-2 w-28 motion-safe:animate-hop sm:w-36 md:-left-10">
            <Picture pic={avatarImage('fuchs-held')} alt={t.hero.mascotAlt} sizes="144px" imgClassName="h-auto w-full drop-shadow-comic" />
          </div>
        </div>
      </div>
    </Sunburst>
  )
}
