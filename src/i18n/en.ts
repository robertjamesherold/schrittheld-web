import type { Dict } from './types'

export const en: Dict = {
  appName: 'Step Hero',
  languageName: 'English',

  meta: {
    home: {
      title: 'Step Hero – Step counter & comic journey for iPhone & Apple Watch',
      description:
        'Step Hero turns your steps into a journey: your comic hero walks from village to village, climbs Mount Everest with your flights of stairs and rides along on your bike. No account, no ads, no tracking.',
    },
    support: {
      title: 'Support & FAQ – Step Hero',
      description:
        'Help with Step Hero: Apple Health, your journey and home town, cycling distance, friends, restoring purchases and Apple Watch. Contact by email.',
    },
    privacy: {
      title: 'Privacy Policy – Step Hero',
      description:
        'How Step Hero handles your data: health data stays on your device, the friends feature is optional and only shares totals. No accounts, no ads, no tracking.',
    },
    imprint: {
      title: 'Imprint – Step Hero',
      description: 'Legal notice (Impressum) for the Step Hero website and app under § 5 DDG.',
    },
    notFound: {
      title: 'Page not found – Step Hero',
      description: 'Sorry, this page does not exist.',
    },
  },

  a11y: {
    skipToContent: 'Skip to content',
    languageSwitch: 'Choose language',
    homeLink: 'Step Hero – home',
    mainNav: 'Main navigation',
    toc: 'Table of contents',
    opensMail: 'opens your email app',
  },

  nav: {
    features: 'Features',
    howItWorks: 'How it works',
    support: 'Support',
  },

  appStore: {
    badgeAlt: 'Download on the App Store',
    fallbackLabel: 'Download on the App Store',
  },

  hero: {
    subtitle: 'Step counter & comic journey',
    pitch:
      'Pick your home town, and every village and city around it becomes a stage for **your very own comic hero**. For iPhone and Apple Watch.',
    facts: ['No account', 'No ads', 'No tracking'],
    screenshotAlt:
      'Step Hero on iPhone: the route as a 3D game board with stages and the hero on the way to the next town',
    iconAlt: 'Step Hero app icon',
    mascotAlt: '',
  },

  features: {
    heading: 'Every step counts. For real.',
    lead: '8,437 steps mean nothing to you. “600 metres to the next village” does. Step Hero gives you a reason for the next 2,000 steps.',
    items: {
      walk: {
        tag: 'On Foot',
        title: 'From village to village, town to town',
        body: 'Your daily steps move your hero from stage to stage. Every destination is a real place with a photo, and you get a notification when you arrive.',
        points: ['Day, week, month or the big year journey', 'Real places on a real route', 'One tap to head in a new direction'],
        alt: 'A stage destination with a photo of the next town and a progress bar',
      },
      stairs: {
        tag: 'Stairs',
        title: 'Stairs become a summit hunt',
        body: 'Your flights climbed add up to altitude. Conquer famous landmarks and mountains, from the Brandenburg Gate all the way up Mount Everest.',
        points: ['Cologne Cathedral, Eiffel Tower, Zugspitze …', 'Shown as a stepped landscape on the 3D board'],
        alt: 'Stairs challenge with landmarks and mountains as a stepped landscape',
      },
      bike: {
        tag: 'Bike',
        title: 'Cycling counts too',
        body: 'Recorded rides from Apple Watch, Strava or Komoot count with their distance. Automatically detected rides and indoor workouts are estimated from their duration.',
        points: ['Recorded, auto-detected or indoor', 'A bike challenge with its own stages'],
        alt: 'Bike challenge: the hero riding a bike towards the next destination',
      },
      board: {
        tag: '3D Game Board',
        title: 'Your route as a game board',
        body: 'Your journey sits on the real map as a game board: spaces, town signs and your hero right in the middle. The stairs challenge becomes a stepped landscape.',
        points: ['On the real map', 'Switch between 2D and 3D'],
        alt: 'The route as a 3D game board on the map with numbered stages',
      },
      friends: {
        tag: 'Friends',
        title: 'Race your friends',
        body: 'Invite friends with a link or code and see on the leaderboard who’s ahead and how far you are from overtaking. Get passed, and you’ll know right away.',
        points: ['Leaderboards for steps, flights and bike', 'Today, week, month and year', 'Optional, and only totals are shared'],
        alt: 'Leaderboard with friends and their steps this week',
      },
      streaks: {
        tag: 'Streaks & Badges',
        title: 'Keep going, it pays off',
        body: 'Build streaks of days hitting your step goal, become weekly champion and earn badges for long distances. Badges unlock special items for your hero.',
        points: ['Streaks, weekly champions, distance badges', 'Unlockable avatar items'],
        alt: 'A collection of badges for streaks and long distances',
      },
    },
    extras: {
      hero: {
        tag: 'Your Hero',
        title: 'Build your hero',
        body: '14 animals plus colours, hats, glasses and outfits. Your hero walks exactly as far on the map as you have come.',
      },
      watch: {
        tag: 'Apple Watch',
        title: 'Right on your wrist',
        body: 'A dedicated Watch app with indoor rides, complications for your watch face and widgets for the Lock Screen and Home Screen.',
      },
      privacy: {
        tag: 'Privacy',
        title: 'Private by design',
        body: 'Your health data stays on your device. The friends feature is optional and only shares totals.',
      },
    },
  },

  how: {
    tag: 'How it works',
    heading: 'Three steps to hero',
    steps: [
      { title: 'Pick your home town', body: 'Choose your town and a direction. The app plots a route from place to place.' },
      { title: 'Walk, climb, ride', body: 'Steps, flights and cycling distance come in automatically from Apple Health.' },
      { title: 'Reach your goals', body: 'Tick off stage after stage, collect badges and overtake your friends.' },
    ],
  },

  avatars: {
    tag: 'Your Hero',
    heading: 'Who walks for you?',
    lead: '14 animals to start with, plus colours, hats, glasses and outfits. Badges unlock special items.',
    names: {
      'fuchs-held': 'Fox hero',
      'katze-astronaut': 'Astronaut cat',
      'hund-cowboy': 'Cowboy dog',
      'baer-koenig': 'King bear',
      'einhorn-neon': 'Neon unicorn',
      'dino-galaxie': 'Galaxy dino',
      'pinguin-radler': 'Cycling penguin',
      'hase-kappe': 'Bunny in a cap',
      'eule-zauberer': 'Wizard owl',
      'frosch-sonnenbrille': 'Frog in sunglasses',
      'panda-kopfhoerer': 'Panda with headphones',
      'schwein-pirat': 'Pirate pig',
      'maus-blume': 'Mouse with a flower',
      'eichhoernchen-gipfel': 'Summit squirrel',
    },
  },

  purchases: {
    tag: 'Extras',
    heading: 'Start for free. More if you like.',
    lead: 'Step Hero is free. Longer journeys and extras are optional one-time purchases.',
    noSubscription: 'Buy once, no subscription',
    items: {
      periods: {
        title: 'Week · Month · Year',
        body: 'Longer journeys with destinations further away, plus the big year journey.',
        alt: 'Week, month, year: longer journeys for your hero',
      },
      bike: {
        title: 'Bike Challenge',
        body: 'A route of its own for your cycling distance, with stages just like on foot.',
        alt: 'Bike challenge with the hero on a bicycle',
      },
      unlockAll: {
        title: 'Unlock Everything',
        body: 'Every challenge in one bundle, cheaper than buying them separately.',
        alt: 'The Unlock Everything bundle',
      },
      costumes: {
        title: 'Costume Pack',
        body: 'Extra hats, glasses and outfits for your hero.',
        alt: 'Costume pack with hats, glasses and outfits',
      },
    },
  },

  privacyPromise: {
    tag: 'Promise',
    heading: 'Your steps belong to you',
    points: [
      { title: 'No account', body: 'Install, pick your home town, start walking. No sign-up, no email address.' },
      { title: 'No ads', body: 'No banners, no videos, no pop-ups. Just you and your hero.' },
      { title: 'No tracking', body: 'No analytics, no server of our own. Your health data stays on your device.' },
    ],
    more: 'Read the privacy policy',
  },

  cta: {
    heading: 'Ready for your first stage?',
    body: 'Get Step Hero for free on your iPhone and Apple Watch.',
  },

  footer: {
    support: 'Support',
    privacy: 'Privacy',
    imprint: 'Imprint',
    madeWith: 'Made with lots of steps.',
    language: 'Language',
  },

  support: {
    tag: 'Support',
    heading: 'How can we help?',
    lead: 'Help with the Step Hero app for iPhone and Apple Watch.',
    contactTitle: 'Get in touch',
    contactBody: 'Questions, bugs or wishes? Just send an email. I’ll get back to you as soon as I can.',
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'The app doesn’t show any steps.',
        a: 'Step Hero reads its values from Apple Health. In the Health app, go to _Sharing → Apps → Step Hero_ and check that access to steps, distance, flights climbed and cycling distance is allowed.',
      },
      {
        q: 'How does the journey work?',
        a: 'Set your home town in the settings. From there, a route leads from place to place in the direction you chose. Your steps (or cycling distance) in the selected period move you from stage to stage.',
      },
      {
        q: 'My cycling distance is missing.',
        a: 'Recorded rides (e.g. Apple Watch, Strava, Komoot), automatically detected rides and indoor workouts all count. Detected rides and indoor workouts are estimated from their duration; you can set the pace for this in the settings. On a home trainer, it’s best to start a workout on your Apple Watch.',
      },
      {
        q: 'How do I add friends?',
        a: 'Tap the friends icon at the top, turn the feature on and share your invite link or friend code. An iCloud account is required. If you turn the feature off, your profile is deleted from iCloud.',
      },
      {
        q: 'I bought an unlock, but it’s missing.',
        a: 'Open _Settings → Unlocks_ and tap “Restore Purchases”. Make sure you’re signed in with the same Apple ID you used to buy it. Refunds are handled by Apple: [reportaproblem.apple.com](https://reportaproblem.apple.com).',
      },
      {
        q: 'My Apple Watch doesn’t show anything.',
        a: 'Open the app on your iPhone once so that your home town, route and unlocks are transferred to the watch.',
      },
    ],
    legalTitle: 'Legal',
    eula: 'Terms of use (Apple Standard EULA)',
  },

  privacy: {
    tag: 'Privacy',
    heading: 'Privacy Policy',
    updated: 'Step Hero app for iPhone and Apple Watch and this website · Last updated: 17 November 2026',
    summaryLabel: 'In short',
    summary:
      'Step Hero reads your steps, walking distance and flights climbed from Apple Health and shows them to you. This data never leaves your device – unless you turn on the optional friends feature: then only your totals (e.g. “steps today”) are shared with your friends via Apple’s iCloud. There are no accounts, no servers of our own, no ads and no tracking.',
    sections: [
      {
        id: 'controller',
        title: 'Controller',
        body: [
          'Robert James Herold\nIm Kammerfest 23\n63628 Bad Soden-Salmünster, Germany\nEmail: [robertjamesherold@icloud.com](mailto:robertjamesherold@icloud.com)',
        ],
      },
      {
        id: 'data',
        title: 'What data the app uses',
        body: [
          'With your explicit permission, the app reads the following data from Apple Health (HealthKit):',
          '- Step count\n- Walking and running distance\n- Flights climbed\n- Cycling distance and cycling workouts (from recorded rides)',
          '**Motion & Fitness:** With your permission, the app uses the activity detection of iPhone and Apple Watch to detect bike rides automatically. Only the periods in which “cycling” was detected are evaluated; from these, the app estimates the distance ridden. This happens entirely on your devices, and only the estimated distance per day is stored. You can turn detection off in the app and revoke the permission in iOS Settings under _Privacy & Security → Motion & Fitness_.',
          'The app reads this data; it only writes data when you start an indoor ride on Apple Watch: this is saved to Apple Health as a workout (“Indoor Cycle”, with duration and active calories). You can change or revoke access at any time in the Health app under _Sharing → Apps → Step Hero_ or in iOS Settings.',
          'In addition, the app stores the daily goals you set and the most recently displayed values locally on your device, so that widgets and watch-face complications can show them quickly.',
          '**Home town:** For the “Journey” feature, you choose a home town from a list of places included in the app. Optionally, you can use your current location once for this. The app then determines the nearest place on your device and stores only that place name, not your exact position. Your location is not requested continuously. The “Location” starting point works the same way: only when you select it does the app request your position once and store the nearest place name as the starting point. Home town and starting point are only transferred between your iPhone and your Apple Watch and do not otherwise leave your devices.',
          '**Friends (optional):** Only if you turn on the friends feature does the app create a profile under a random friend code in Apple’s public CloudKit database (iCloud). It contains: the name and appearance of your character, your steps for the current day, week and month, your cycling distance for the same periods, your walking distance in the current year and the name of the most recently reached place on your journey. No individual health records, no times of day, no location and neither your Apple ID nor your email address are shared. Only people who know your friend code can read the profile; only you can change it. When you add someone, the app also stores that your code is linked to theirs so that they can see you too. An iCloud account is required for this feature. If you turn it off, your profile and links are deleted from iCloud.',
          '**Photos of destinations:** The app shows a photo from Wikipedia or Wikimedia Commons for each destination. To do so, it sends the _name of the destination_ to the Wikimedia Foundation (wikipedia.org, wikidata.org, wikimedia.org). For technical reasons, your IP address is transmitted to the Wikimedia Foundation in the process. No health data, no step counts and not your home town are transmitted. The photos are cached on your device. The Wikimedia Foundation’s privacy policy applies ([foundation.wikimedia.org](https://foundation.wikimedia.org/wiki/Policy:Privacy_policy)).',
          '**In-app purchases:** You buy unlocks through Apple’s App Store. Payment and billing are handled exclusively by Apple; the developer receives no payment or account data. The app only learns from Apple which unlocks belong to your Apple ID and remembers this locally on your devices.',
        ],
      },
      {
        id: 'sharing',
        title: 'No sharing with others',
        body: [
          'All data is processed locally on your iPhone and Apple Watch. The only exceptions are fetching the photos and – if you turn it on – the friends feature (see above). The app sends no data to the developer and does not sell or transfer any data to third parties. It contains no analytics, advertising or tracking services. Health data only ends up in iCloud if you use the friends feature, and then only as the totals listed above. Health data is never used for advertising, marketing or any purpose other than showing it to you and – if you want – to your friends.',
        ],
      },
      {
        id: 'legal-basis',
        title: 'Legal basis',
        body: [
          'Health data is processed on the basis of your explicit consent (Art. 9(2)(a) in conjunction with Art. 6(1)(a) GDPR), which you give via Apple’s HealthKit dialog and can withdraw at any time. You give separate consent to sharing with friends by turning on the friends feature; you withdraw it by turning the feature off again.',
        ],
      },
      {
        id: 'retention',
        title: 'Storage period and deletion',
        body: [
          'Locally stored settings and values are kept until you delete the app. Deleting the app removes them completely. Your data in Apple Health is not affected. Your friends profile in iCloud remains stored until you turn off the friends feature in the app – so turn it off before deleting the app. You can also ask the developer to delete it.',
        ],
      },
      {
        id: 'apple',
        title: 'Apple',
        body: [
          'Downloading via the App Store, Apple Health and iCloud are subject to Apple’s privacy policy ([apple.com/legal/privacy](https://www.apple.com/legal/privacy/)). The developer has no influence on this.',
        ],
      },
      {
        id: 'website',
        title: 'This website',
        body: [
          'This website does not collect any personal data itself. It sets no cookies, uses no analytics or tracking services and loads no content from third-party servers; even the fonts are served by this website itself.',
          'The website is hosted on GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). When you visit it, GitHub processes technically necessary data in server logs, in particular your IP address, date and time, the page requested and information about your browser. This serves the secure and reliable delivery of the website (legitimate interest, Art. 6(1)(f) GDPR). Data may be transferred to the USA in the process; GitHub is certified under the EU-US Data Privacy Framework. Details can be found in GitHub’s privacy statement ([docs.github.com](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)).',
          'If you send an email to the address given, your details are only used to answer your enquiry and are then deleted, unless statutory retention obligations apply.',
        ],
      },
      {
        id: 'rights',
        title: 'Your rights',
        body: [
          'Under the GDPR, you have the right of access, rectification, erasure, restriction of processing, data portability and withdrawal of your consent, as well as the right to lodge a complaint with a data protection supervisory authority. The developer receives no data from you. You can delete your friends profile yourself at any time by turning off the friends feature.',
        ],
      },
      {
        id: 'children',
        title: 'Children',
        body: ['The app does not knowingly collect data from children. The friends feature is off by default.'],
      },
      {
        id: 'changes',
        title: 'Changes',
        body: [
          'If the app’s features change, this privacy policy will be updated accordingly. The version published on this page applies. In case of doubt, the German version is authoritative.',
        ],
      },
    ],
  },

  imprint: {
    tag: 'Imprint',
    heading: 'Imprint',
    sections: [
      {
        id: 'provider',
        title: 'Information pursuant to § 5 DDG (German Digital Services Act)',
        body: ['Robert James Herold\nIm Kammerfest 23\n63628 Bad Soden-Salmünster\nGermany'],
      },
      {
        id: 'contact',
        title: 'Contact',
        body: ['Email: [robertjamesherold@icloud.com](mailto:robertjamesherold@icloud.com)'],
      },
      {
        id: 'responsible',
        title: 'Responsible for content under § 18(2) MStV',
        body: ['Robert James Herold, address as above'],
      },
      {
        id: 'dispute',
        title: 'Consumer dispute resolution',
        body: [
          'I am neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.',
        ],
      },
      {
        id: 'links',
        title: 'Liability for links',
        body: [
          'This website contains links to external websites whose content I have no influence over. The respective provider is responsible for that content. If I become aware of any legal violations, I will remove the links concerned immediately.',
        ],
      },
      {
        id: 'trademarks',
        title: 'Trademarks',
        body: [
          'Apple, the Apple logo, iPhone, Apple Watch and Apple Health are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.',
        ],
      },
    ],
  },

  notFound: {
    heading: 'Dead end',
    body: 'This page doesn’t exist – maybe your hero took a wrong turn.',
    back: 'Back to the home page',
  },
}
