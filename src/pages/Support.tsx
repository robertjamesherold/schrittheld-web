import { ComicButton } from '../components/ComicButton'
import { Icon } from '../components/Icon'
import { PageHeader } from '../components/PageHeader'
import { Panel } from '../components/Panel'
import { RichInline } from '../components/RichText'
import { CONTACT } from '../config'
import { useLocale } from '../i18n/useLocale'
import { Link } from 'react-router-dom'

export const Support = () => {
  const { t, to } = useLocale()
  const s = t.support
  return (
    <>
      <PageHeader tag={s.tag} title={s.heading} lead={s.lead} />
      <div className="bg-dots">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_320px] md:items-start">
          <section aria-labelledby="faq-title">
            <h2 id="faq-title" className="mb-6 text-3xl text-fg">
              {s.faqTitle}
            </h2>
            <div className="flex flex-col gap-4">
              {s.faq.map((item) => (
                <details key={item.q} className="panel group overflow-hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[18px] px-5 py-4 text-lg font-black text-fg [&::-webkit-details-marker]:hidden">
                    <h3 className="text-lg leading-snug">{item.q}</h3>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-ink bg-sun text-ink transition-transform group-open:rotate-45">
                      <Icon name="plus" className="h-4 w-4 [stroke-width:3.5]" />
                    </span>
                  </summary>
                  <div className="border-t-3 border-dashed border-ink/30 px-5 py-4 text-muted dark:border-white/20">
                    <p>
                      <RichInline text={item.a} />
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <aside className="flex flex-col gap-6 md:sticky md:top-6">
            <Panel className="flex flex-col items-start gap-4 p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border-3 border-ink bg-steps text-ink shadow-comic-sm">
                <Icon name="mail" className="h-7 w-7" />
              </span>
              <h2 className="text-2xl text-fg">{s.contactTitle}</h2>
              <p className="text-muted">
                <RichInline text={s.contactBody} />
              </p>
              <ComicButton href={`mailto:${CONTACT.email}`} tone="sun" className="max-w-full break-all px-4 text-sm">
                {CONTACT.email}
              </ComicButton>
            </Panel>
            <Panel className="flex flex-col gap-3 p-6">
              <h2 className="text-xl text-fg">{s.legalTitle}</h2>
              <ul className="flex flex-col gap-2 font-extrabold">
                <li>
                  <Link to={to('privacy')} className="underline decoration-sun decoration-[3px] underline-offset-2">
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link to={to('imprint')} className="underline decoration-sun decoration-[3px] underline-offset-2">
                    {t.footer.imprint}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                    rel="noopener"
                    className="underline decoration-sun decoration-[3px] underline-offset-2"
                  >
                    {s.eula}
                  </a>
                </li>
              </ul>
            </Panel>
          </aside>
        </div>
      </div>
    </>
  )
}
