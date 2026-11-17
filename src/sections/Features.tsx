import { ComicTag } from '../components/ComicTag'
import { Icon, type IconName } from '../components/Icon'
import { Panel } from '../components/Panel'
import { PhoneShot } from '../components/PhoneShot'
import { Picture } from '../components/Picture'
import { RichInline } from '../components/RichText'
import { SectionHeading } from '../components/SectionHeading'
import { Sunburst } from '../components/Sunburst'
import { toneBg, type Tone } from '../components/tones'
import { useLocale } from '../i18n/useLocale'
import type { ExtraKey, FeatureKey } from '../i18n/types'
import { featureImage } from '../lib/images'
import { Link } from 'react-router-dom'

const order: FeatureKey[] = ['walk', 'stairs', 'bike', 'board', 'friends', 'streaks']

const tones: Record<FeatureKey, Exclude<Tone, 'white'>> = {
  walk: 'steps',
  stairs: 'flights',
  bike: 'cycling',
  board: 'sky',
  friends: 'skyDeep',
  streaks: 'sun',
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
            const { pic, phone } = featureImage(locale, key)
            const flip = i % 2 === 1
            return (
              <article key={key} aria-labelledby={`feature-${key}`} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <Sunburst
                  tone={tone}
                  className={`overflow-hidden rounded-comic border-3 border-ink px-6 py-10 shadow-comic sm:py-12 ${flip ? 'md:order-last' : ''}`}
                >
                  {phone ? (
                    <PhoneShot pic={pic} alt={item.alt} rotate={flip ? 3 : -3} sizes="(min-width: 768px) 300px, 72vw" />
                  ) : (
                    <div className="reveal mx-auto max-w-[360px]">
                      <Picture
                        pic={pic}
                        alt={item.alt}
                        sizes="(min-width: 768px) 360px, 80vw"
                        imgClassName="h-auto w-full rotate-2 rounded-comic border-3 border-ink shadow-comic-lg"
                      />
                    </div>
                  )}
                </Sunburst>

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
