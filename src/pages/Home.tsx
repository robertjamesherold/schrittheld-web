import { AvatarGallery } from '../sections/AvatarGallery'
import { CallToAction } from '../sections/CallToAction'
import { Features } from '../sections/Features'
import { Hero } from '../sections/Hero'
import { HowItWorks } from '../sections/HowItWorks'
import { PrivacyPromise } from '../sections/PrivacyPromise'
import { Purchases } from '../sections/Purchases'

export const Home = () => (
  <>
    <Hero />
    <Features />
    <HowItWorks />
    <AvatarGallery />
    <Purchases />
    <PrivacyPromise />
    <CallToAction />
  </>
)
