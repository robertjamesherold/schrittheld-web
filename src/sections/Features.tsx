import { ComicTag } from '../components/ComicTag'
import { Icon, type IconName } from '../components/Icon'
import { Panel } from '../components/Panel'
import { Picture } from '../components/Picture'
import { RichInline } from '../components/RichText'
import { SectionHeading } from '../components/SectionHeading'
import { Sunburst } from '../components/Sunburst'
import { toneBg, type Tone } from '../components/tones'
import { useLocale } from '../i18n/useLocale'
import type { ExtraKey, FeatureKey } from '../i18n/types'
import { phoneImage, sectionImage, type SectionKey } from '../lib/images'
import { Link } from 'react-router-dom'

const order: FeatureKey[] = ['walk', 'board', 'stairs', 'bike', 'world', 'friends', 'streaks']

const tones: Record<FeatureKey, Exclude<Tone, 'white'>> = {
  walk: 'steps',
  board: 'sky',
  stairs: 'flights',
  bike: 'cycling',
  world: 'skyDeep',
  friends: 'berry',
  streaks: 'sun',
}

/** Fertiges Abschnittsbild je Funktion. Für Serien & Abzeichen gibt es keins, dort steht das einzelne iPhone. */
const sectionFor: Partial<Record<FeatureKey, SectionKey>> = {
  walk: 'on-foot',
  board: 'board',
  stairs: 'stairs',
  bike: 'bike',
  world: 'world',
  friends: 'friends',
}

const extras: { key: ExtraKey; icon: IconName; tone: Tone }[] = [
  { key: 'hero', icon: 'star', tone: 'sun' },
  { key: 'watch', icon: 'watch', tone: 'sky' },
  { key: 'privacy', icon: 'shield', tone: 'steps' },
]

export const Features = () => {
  const { locale, t, to } = useLocale()
  return (
    <section id="funktionen" aria-labelledby="features-title" className="bg-dots py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading id="features-title" title={t.features.heading} lead={t.features.lead} />

        <div className="flex flex-col gap-20 md:gap-28">
          {order.map((key, i) => {
            const item = t.features.items[key]
            const tone = tones[key]
            const section = sectionFor[key]
            const flip = i % 2 === 1
            return (
              <article key={key} aria-labelledby={`feature-${key}`} className={`grid items-center gap-10 md:gap-14 ${flip ? 'md:grid-cols-[0.85fr_1.15fr]' : 'md:grid-cols-[1.15fr_0.85fr]'}`}>
                <div
                  className={`reveal ${flip ? 'md:order-last' : ''}`}
                  style={{ ['--reveal-rotate' as string]: `${flip ? 3 : -3}deg` }}
                >
                  {section ? (
                    <Picture
                      pic={sectionImage(locale, section)}
                      alt={item.alt}
                      sizes="(min-width: 1100px) 560px, (min-width: 768px) 52vw, 92vw"
                      imgClassName={`block h-auto w-full rounded-comic border-3 border-ink shadow-comic-lg ${flip ? 'rotate-1' : '-rotate-1'}`}
                    />
                  ) : (
                    <Sunburst tone={tone} center={{ x: '50%', y: '45%' }} className={`aspect-[4/3] overflow-hidden rounded-comic border-3 border-ink px-6 pt-8 shadow-comic-lg ${flip ? 'rotate-1' : '-rotate-1'}`}>
                      <Picture
                        pic={phoneImage(locale, 'badges')}
                        alt={item.alt}
                        sizes="(min-width: 768px) 260px, 60vw"
                        imgClassName="mx-auto block h-auto w-1/2 max-w-[260px] drop-shadow-comic"
                      />
                    </Sunburst>
                  )}
                </div>

                <div className="flex flex-col items-start gap-4">
                  <ComicTag tone={tone}>{item.tag}</ComicTag>
                  <h3 id={`feature-${key}`} className="text-3xl text-fg sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="text-lg text-muted">
                    <RichInline text={item.body} />
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 font-bold">
                        <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-ink ${toneBg[tone]}`}>
                          <Icon name="check" className="h-3.5 w-3.5 [stroke-width:4]" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>

        <ul className="mt-24 grid gap-6 md:grid-cols-3">
          {extras.map(({ key, icon, tone }) => {
            const extra = t.features.extras[key]
            const href = key === 'hero' ? '#avatare' : key === 'privacy' ? to('privacy') : null
            return (
              <Panel as="li" key={key} tilt className="flex flex-col gap-3 p-6">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl border-3 border-ink shadow-comic-sm ${toneBg[tone]}`}>
                  <Icon name={icon} className="h-7 w-7" />
                </span>
                <ComicTag tone={tone} className="self-start">{extra.tag}</ComicTag>
                <h3 className="text-2xl text-fg">
                  {href?.startsWith('#') ? (
                    <a href={href} className="hover:underline">{extra.title}</a>
                  ) : href ? (
                    <Link to={href} className="hover:underline">{extra.title}</Link>
                  ) : (
                    extra.title
                  )}
                </h3>
                <p className="text-muted">
                  <RichInline text={extra.body} />
                </p>
              </Panel>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
