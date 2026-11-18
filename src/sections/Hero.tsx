import { AppStoreBadge } from '../components/AppStoreBadge'
import { BurstStars } from '../components/BurstStars'
import { Icon } from '../components/Icon'
import { Picture } from '../components/Picture'
import { RichInline } from '../components/RichText'
import { Sunburst } from '../components/Sunburst'
import { useLocale } from '../i18n/useLocale'
import { appIcon } from '../lib/images'
import { HeroCarousel } from './HeroCarousel'

/**
 * Aufmacher: Text oben, darunter das Karussell mit den Highlight-Screens (HeroCarousel).
 * Der Strahlenkranz startet im Blau des Bildhintergrunds und wandert dann durch die ganze Palette (.hero-burst).
 */
export const Hero = () => {
  const { t } = useLocale()
  return (
    <Sunburst
      as="section"
      tone="skyDeep"
      // Mittelpunkt genau hinter dem mittleren iPhone: von unten Innenabstand + Steuerleiste + halbe Bühnenhöhe (Maße in .hero-burst)
      center={{ x: '50%', y: 'calc(100% - var(--hero-pb) - var(--ctrl-h) - var(--img-hh))' }}
      aria-labelledby="hero-title"
      className="hero-burst burst-spin overflow-hidden border-b-3 border-ink pb-16 pt-24 sm:pt-28 md:pb-24"
    >
      <div aria-hidden="true" className="manga-lines" />
      <BurstStars />
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-4 text-center sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <Picture
            pic={appIcon}
            alt={t.hero.iconAlt}
            sizes="96px"
            priority
            className="shrink-0"
            imgClassName="block h-20 w-20 -rotate-6 rounded-[20px] border-3 border-ink shadow-comic-sm sm:h-24 sm:w-24 sm:rounded-[24px] sm:shadow-comic"
          />
          <h1 id="hero-title" className="title-pop text-[clamp(2.5rem,14vw,3.5rem)] leading-[0.95] sm:text-7xl lg:text-8xl">
            {t.appName}
          </h1>
        </div>
        <p className="-rotate-1 rounded-full border-3 border-ink bg-sun px-4 py-1 text-lg font-black text-ink shadow-comic-sm sm:text-xl">
          {t.hero.subtitle}
        </p>
        <p className="max-w-2xl text-lg text-white [text-shadow:2px_2px_0_#1F1C2E] sm:text-xl">
          <RichInline text={t.hero.pitch} />
        </p>
        <AppStoreBadge />
        <ul className="flex flex-wrap justify-center gap-2">
          {t.hero.facts.map((fact) => (
            <li key={fact} className="flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-3 py-1 text-sm font-extrabold text-ink">
              <Icon name="check" className="h-4 w-4 text-steps [stroke-width:3.5]" />
              {fact}
            </li>
          ))}
        </ul>
      </div>

      <HeroCarousel />
    </Sunburst>
  )
}
