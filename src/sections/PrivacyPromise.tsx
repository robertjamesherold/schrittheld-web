import { ComicButton } from '../components/ComicButton'
import { Icon, type IconName } from '../components/Icon'
import { Panel } from '../components/Panel'
import { SectionHeading } from '../components/SectionHeading'
import { Sunburst } from '../components/Sunburst'
import { toneBg, type Tone } from '../components/tones'
import { useLocale } from '../i18n/useLocale'

const icons: { icon: IconName; tone: Tone }[] = [
  { icon: 'user', tone: 'steps' },
  { icon: 'megaphone', tone: 'flights' },
  { icon: 'eye', tone: 'cycling' },
]

export const PrivacyPromise = () => {
  const { t, to } = useLocale()
  return (
    <Sunburst as="section" tone="skyDeep" aria-labelledby="privacy-title" className="border-y-3 border-ink py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading id="privacy-title" tag={t.privacyPromise.tag} tone="sun" title={t.privacyPromise.heading} variant="pop" />
        <ul className="grid gap-6 md:grid-cols-3">
          {t.privacyPromise.points.map((point, i) => {
            const { icon, tone } = icons[i] ?? { icon: 'shield', tone: 'sun' }
            return (
              <Panel as="li" key={point.title} tilt className="reveal flex flex-col items-start gap-3 p-6">
                <span className={`grid h-14 w-14 place-items-center rounded-full border-3 border-ink shadow-comic-sm ${toneBg[tone]}`}>
                  <Icon name={icon} className="h-8 w-8" />
                </span>
                <h3 className="text-2xl text-fg">{point.title}</h3>
                <p className="text-muted">{point.body}</p>
              </Panel>
            )
          })}
        </ul>
        <div className="mt-12 flex justify-center">
          <ComicButton to={to('privacy')} tone="white">
            {t.privacyPromise.more}
            <Icon name="arrow" className="h-5 w-5" />
          </ComicButton>
        </div>
      </div>
    </Sunburst>
  )
}
