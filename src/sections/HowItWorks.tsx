import { Panel } from '../components/Panel'
import { SectionHeading } from '../components/SectionHeading'
import { Sunburst } from '../components/Sunburst'
import { toneBg, type Tone } from '../components/tones'
import { useLocale } from '../i18n/useLocale'

const stepTones: Tone[] = ['steps', 'flights', 'cycling']

export const HowItWorks = () => {
  const { t } = useLocale()
  return (
    <Sunburst as="section" tone="steps" id="so-gehts" aria-labelledby="how-title" className="border-y-3 border-ink py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading id="how-title" tag={t.how.tag} tone="white" title={t.how.heading} variant="ink" />
        <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
          {t.how.steps.map((step, i) => (
            <Panel as="li" key={step.title} tilt className="reveal relative flex flex-col gap-3 p-6 pt-10">
              <span
                aria-hidden="true"
                className={`absolute -top-6 left-6 grid h-14 w-14 place-items-center rounded-full border-3 border-ink text-2xl font-black shadow-comic-sm ${toneBg[stepTones[i] ?? 'sun']}`}
              >
                {i + 1}
              </span>
              <h3 className="text-2xl text-fg">
                <span className="sr-only">{i + 1}. </span>
                {step.title}
              </h3>
              <p className="text-muted">{step.body}</p>
            </Panel>
          ))}
        </ol>
      </div>
    </Sunburst>
  )
}
