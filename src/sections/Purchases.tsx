import { Panel } from '../components/Panel'
import { Picture } from '../components/Picture'
import { SectionHeading } from '../components/SectionHeading'
import { useLocale } from '../i18n/useLocale'
import type { PurchaseKey } from '../i18n/types'
import { purchaseImage } from '../lib/images'

const order: PurchaseKey[] = ['periods', 'bike', 'unlockAll', 'costumes']

export const Purchases = () => {
  const { locale, t } = useLocale()
  return (
    <section id="extras" aria-labelledby="purchases-title" className="bg-dots border-t-3 border-ink py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading id="purchases-title" tag={t.purchases.tag} tone="flights" title={t.purchases.heading} lead={t.purchases.lead} />
        <p className="mx-auto -mt-4 mb-12 w-fit rotate-[-2deg] rounded-full border-3 border-ink bg-sun px-5 py-2 text-center text-lg font-black uppercase tracking-wider text-ink shadow-comic">
          {t.purchases.noSubscription}
        </p>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {order.map((key) => {
            const item = t.purchases.items[key]
            return (
              <Panel as="li" key={key} tilt className="reveal flex flex-col overflow-hidden">
                <Picture
                  pic={purchaseImage(locale, key)}
                  alt={item.alt}
                  sizes="(min-width: 1024px) 250px, (min-width: 640px) 45vw, 90vw"
                  imgClassName="block aspect-square h-auto w-full border-b-3 border-ink object-cover"
                />
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="text-xl text-fg">{item.title}</h3>
                  <p className="text-muted">{item.body}</p>
                </div>
              </Panel>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
