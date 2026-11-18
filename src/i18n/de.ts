import type { Dict } from './types'

export const de: Dict = {
  appName: 'Schrittheld',
  languageName: 'Deutsch',

  meta: {
    home: {
      title: 'Schrittheld – Schrittzähler mit Abenteuer für iPhone & Apple Watch',
      description:
        'Schrittheld macht aus deinen Schritten eine Reise: Dein Comic-Held läuft von Dorf zu Dorf, klettert mit deinen Stockwerken auf den Mount Everest und fährt mit dir Rad. Ohne Konto, ohne Werbung, ohne Tracking.',
    },
    support: {
      title: 'Support & häufige Fragen – Schrittheld',
      description:
        'Hilfe zu Schrittheld: Apple Health, Reise und Heimatort, Rad-Kilometer, Freunde, Käufe wiederherstellen und Apple Watch. Kontakt per E-Mail.',
    },
    privacy: {
      title: 'Datenschutzerklärung – Schrittheld',
      description:
        'Wie Schrittheld mit deinen Daten umgeht: Health-Daten bleiben auf deinem Gerät, die Freunde-Funktion ist freiwillig und teilt nur Summen. Keine Konten, keine Werbung, kein Tracking.',
    },
    imprint: {
      title: 'Impressum – Schrittheld',
      description: 'Impressum der Website und App Schrittheld nach § 5 DDG.',
    },
    notFound: {
      title: 'Seite nicht gefunden – Schrittheld',
      description: 'Diese Seite gibt es leider nicht.',
    },
  },

  a11y: {
    skipToContent: 'Zum Inhalt springen',
    languageSwitch: 'Sprache wählen',
    homeLink: 'Schrittheld – zur Startseite',
    mainNav: 'Hauptnavigation',
    toc: 'Inhaltsverzeichnis',
    opensMail: 'öffnet dein E-Mail-Programm',
  },

  nav: {
    features: 'Funktionen',
    howItWorks: 'So geht’s',
    support: 'Support',
  },

  appStore: {
    badgeAlt: 'Laden im App Store',
    fallbackLabel: 'Im App Store laden',
  },

  hero: {
    subtitle: 'Schrittzähler mit Abenteuer',
    pitch:
      'Leg deinen Heimatort fest, und jedes Dorf und jede Stadt rundherum wird zum Etappenziel für deinen **selbst gestalteten Comic-Helden**. Für iPhone und Apple Watch.',
    facts: ['Kein Konto', 'Keine Werbung', 'Kein Tracking'],
    screenshotAlt:
      'Drei iPhones mit Schrittheld: die Route als 3D-Spielbrett, das nächste Etappenziel mit Foto und die Treppen-Challenge mit berühmten Bauwerken, davor einige der Comic-Helden',
    iconAlt: 'App-Icon von Schrittheld',
  },

  features: {
    heading: 'Jeder Schritt zählt. Wirklich.',
    lead: '8.437 Schritte bedeuten dir nichts. „Noch 600 Meter bis zum Nachbardorf“ schon. Schrittheld gibt dir einen Grund für die nächsten 2.000 Schritte.',
    items: {
      walk: {
        tag: 'Zu Fuß',
        title: 'Von Dorf zu Dorf, von Stadt zu Stadt',
        body: 'Deine Tagesschritte bringen deinen Helden von Etappe zu Etappe. Jedes Ziel ist ein echter Ort mit Foto, und wenn du ankommst, gibt’s eine Mitteilung.',
        points: ['Tag, Woche, Monat oder die große Jahresreise', 'Echte Orte auf einer echten Route', 'Ein Tipp, und du schlägst eine andere Richtung ein'],
        alt: 'Etappenziel mit Foto des nächsten Ortes und Fortschrittsanzeige',
      },
      stairs: {
        tag: 'Treppen',
        title: 'Treppen werden zur Gipfeljagd',
        body: 'Deine gestiegenen Stockwerke summieren sich zu Höhenmetern. Erklimm berühmte Bauwerke und Berge, vom Brandenburger Tor bis zum Mount Everest.',
        points: ['Kölner Dom, Eiffelturm, Zugspitze …', 'Als Stufenlandschaft im 3D-Spielbrett'],
        alt: 'Treppen-Challenge mit Bauwerken und Bergen als Stufenlandschaft',
      },
      bike: {
        tag: 'Rad',
        title: 'Radfahren zählt auch',
        body: 'Aufgezeichnete Touren von Apple Watch, Strava oder Komoot zählen mit ihrer Strecke. Automatisch erkannte Fahrten und Indoor-Trainings schätzt die App über die Dauer.',
        points: ['Aufgezeichnet, automatisch erkannt oder indoor', 'Eigene Rad-Challenge mit Etappenzielen'],
        alt: 'Rad-Challenge: der Held auf dem Fahrrad unterwegs zum nächsten Ziel',
      },
      board: {
        tag: '3D-Spielbrett',
        title: 'Deine Route als Spielbrett',
        body: 'Deine Reise liegt als Spielbrett auf der echten Karte: Felder, Ortsschilder und dein Held mittendrin. Die Treppen-Challenge wird zur Stufenlandschaft.',
        points: ['Auf der echten Karte', 'Zwischen 2D und 3D umschalten'],
        alt: 'Die Route als 3D-Spielbrett auf der Karte mit nummerierten Etappen',
      },
      world: {
        tag: 'Weltreise',
        title: 'Einmal um die Welt',
        body: 'Alle Schritte seit Beginn deiner Aufzeichnung ergeben eine Reise rund um den Globus. Auf dem Erdball siehst du, wie weit du schon gekommen bist, und welche Metropole als Nächstes wartet.',
        points: ['Alle Schritte seit Beginn, in Kilometern', 'Rom, Tokio, New York, Rio …'],
        alt: 'Weltreise: Gesamtschritte und Kilometer, darunter der Erdball mit der bisherigen Route',
      },
      friends: {
        tag: 'Freunde',
        title: 'Lauf mit Freunden um die Wette',
        body: 'Lade Freunde per Link oder Code ein und sieh in der Rangliste, wer vorn liegt und wie viel dir zum Überholen fehlt. Wirst du überholt, erfährst du es sofort.',
        points: ['Ranglisten für Schritte, Stockwerke und Rad', 'Heute, Woche, Monat und Jahr', 'Freiwillig und nur mit Summen'],
        alt: 'Rangliste mit Freunden und ihren Schritten der Woche',
      },
      streaks: {
        tag: 'Serien & Abzeichen',
        title: 'Dranbleiben lohnt sich',
        body: 'Sammle Tage in Folge mit erreichtem Schrittziel, werde Wochensieger und hol dir Abzeichen für lange Strecken. Abzeichen schalten besondere Gegenstände für deinen Helden frei.',
        points: ['Serien, Wochensieger, Strecken-Abzeichen', 'Freischaltbare Avatar-Gegenstände'],
        alt: 'Sammlung von Abzeichen für Serien und lange Strecken',
      },
    },
    extras: {
      hero: {
        tag: 'Dein Held',
        title: 'Bau dir deinen Helden',
        body: '14 Tiere, dazu Farben, Hüte, Brillen und Outfits. Dein Held läuft auf der Karte genau so weit, wie du gekommen bist.',
      },
      watch: {
        tag: 'Apple Watch',
        title: 'Am Handgelenk zu Hause',
        body: 'Eigene Watch-App mit Indoor-Radfahrt, Komplikationen fürs Ziffernblatt und Widgets für Sperr- und Homebildschirm.',
      },
      privacy: {
        tag: 'Datenschutz',
        title: 'Privat ab Werk',
        body: 'Deine Health-Daten bleiben auf dem Gerät. Die Freunde-Funktion ist freiwillig und teilt nur Summen.',
      },
    },
  },

  how: {
    tag: 'So geht’s',
    heading: 'In drei Schritten zum Helden',
    steps: [
      { title: 'Heimatort festlegen', body: 'Wähl deinen Ort und eine Himmelsrichtung. Die App legt eine Route von Ort zu Ort.' },
      { title: 'Gehen, steigen, radeln', body: 'Schritte, Stockwerke und Rad-Kilometer kommen automatisch aus Apple Health.' },
      { title: 'Ziele erreichen', body: 'Hak Etappe um Etappe ab, sammle Abzeichen und überhol deine Freunde.' },
    ],
    illustrationAlt:
      'Comic-Landschaft: Der Fuchs-Held läuft mit Freunden auf einem Weg von Wächtersbach über Gelnhausen nach Frankfurt',
  },

  avatars: {
    tag: 'Dein Held',
    heading: 'Wer läuft für dich?',
    lead: '14 Tiere zum Start, dazu Farben, Hüte, Brillen und Outfits. Abzeichen schalten besondere Gegenstände frei.',
    editorAlt: 'Profil mit Serien und Abzeichen und der Avatar-Editor mit Tieren, Farben und Mustern zur Auswahl',
    names: {
      'fuchs-held': 'Fuchs als Held',
      'katze-astronaut': 'Katze als Astronautin',
      'hund-cowboy': 'Hund als Cowboy',
      'baer-koenig': 'Bär als König',
      'einhorn-neon': 'Neon-Einhorn',
      'dino-galaxie': 'Galaxie-Dino',
      'pinguin-radler': 'Pinguin auf dem Rad',
      'hase-kappe': 'Hase mit Kappe',
      'eule-zauberer': 'Eule als Zauberer',
      'frosch-sonnenbrille': 'Frosch mit Sonnenbrille',
      'panda-kopfhoerer': 'Panda mit Kopfhörern',
      'schwein-pirat': 'Schwein als Pirat',
      'maus-blume': 'Maus mit Blume',
      'eichhoernchen-gipfel': 'Eichhörnchen auf dem Gipfel',
    },
  },

  purchases: {
    tag: 'Extras',
    heading: 'Gratis loslaufen. Mehr, wenn du magst.',
    lead: 'Schrittheld ist kostenlos. Längere Reisen und Extras gibt es als optionale Einmalkäufe.',
    noSubscription: 'Einmal kaufen, kein Abo',
    items: {
      periods: {
        title: 'Woche · Monat · Jahr',
        body: 'Längere Reisen mit weiter entfernten Zielen und die große Jahresreise.',
        alt: 'Woche, Monat, Jahr: längere Reisen für deinen Helden',
      },
      bike: {
        title: 'Rad-Challenge',
        body: 'Eigene Route für deine Rad-Kilometer, mit Etappen wie zu Fuß.',
        alt: 'Rad-Challenge mit dem Helden auf dem Fahrrad',
      },
      worldTour: {
        title: 'Weltreise',
        body: 'Einmal um die ganze Welt, mit allen Schritten seit Beginn.',
        alt: 'Weltreise: der Held vor dem Erdball mit Rom, Tokio, Rio und New York',
      },
      unlockAll: {
        title: 'Alles freischalten',
        body: 'Alle Challenges in einem Paket, günstiger als einzeln.',
        alt: 'Paket „Alles freischalten“',
      },
      costumes: {
        title: 'Kostüm-Paket',
        body: 'Extra Hüte, Brillen und Outfits für deinen Helden.',
        alt: 'Kostüm-Paket mit Hüten, Brillen und Outfits',
      },
    },
  },

  privacyPromise: {
    tag: 'Versprochen',
    heading: 'Deine Schritte gehören dir',
    points: [
      { title: 'Kein Konto', body: 'Installieren, Heimatort wählen, loslaufen. Keine Anmeldung, keine E-Mail-Adresse.' },
      { title: 'Keine Werbung', body: 'Keine Banner, keine Videos, keine Pop-ups. Nur du und dein Held.' },
      { title: 'Kein Tracking', body: 'Keine Analyse-Dienste, kein eigener Server. Health-Daten bleiben auf deinem Gerät.' },
    ],
    more: 'Zur Datenschutzerklärung',
  },

  cta: {
    heading: 'Bereit für die erste Etappe?',
    body: 'Lade Schrittheld kostenlos auf dein iPhone und deine Apple Watch.',
  },

  footer: {
    support: 'Support',
    privacy: 'Datenschutz',
    imprint: 'Impressum',
    madeWith: 'Mit vielen Schritten gemacht.',
    language: 'Sprache',
  },

  support: {
    tag: 'Support',
    heading: 'Wie können wir helfen?',
    lead: 'Hilfe zur App „Schrittheld“ für iPhone und Apple Watch.',
    contactTitle: 'Schreib uns',
    contactBody: 'Bei Fragen, Fehlern oder Wünschen schreib einfach eine E-Mail. Ich antworte so schnell ich kann.',
    faqTitle: 'Häufige Fragen',
    faq: [
      {
        q: 'Die App zeigt keine Schritte an.',
        a: 'Schrittheld liest die Werte aus Apple Health. Prüfe in der Health-App unter _Teilen → Apps → Schrittheld_, ob der Zugriff auf Schritte, Strecke, Stockwerke und Radstrecke erlaubt ist.',
      },
      {
        q: 'Wie funktioniert die Reise?',
        a: 'Lege in den Einstellungen deinen Heimatort fest. Von dort führt eine Route in die gewählte Himmelsrichtung von Ort zu Ort. Deine Schritte (bzw. Rad-Kilometer) im gewählten Zeitraum bringen dich von Etappe zu Etappe.',
      },
      {
        q: 'Meine Rad-Kilometer fehlen.',
        a: 'Es zählen aufgezeichnete Radtouren (z. B. Apple Watch, Strava, Komoot), automatisch erkannte Fahrten und Indoor-Trainings. Erkannte Fahrten und Indoor-Trainings werden über ihre Dauer geschätzt; das Tempo dafür stellst du in den Einstellungen ein. Auf dem Heimtrainer am besten ein Training auf der Apple Watch starten.',
      },
      {
        q: 'Wie füge ich Freunde hinzu?',
        a: 'Tippe oben auf das Freunde-Symbol, schalte die Funktion ein und teile deinen Einladungslink oder Freundescode. Dafür ist ein iCloud-Konto nötig. Schaltest du die Funktion aus, wird dein Profil aus iCloud gelöscht.',
      },
      {
        q: 'Ich habe die Freischaltung gekauft, sie fehlt aber.',
        a: 'Öffne _Einstellungen → Freischaltungen_ und tippe auf „Käufe wiederherstellen“. Achte darauf, mit derselben Apple-ID angemeldet zu sein, mit der du gekauft hast. Rückerstattungen laufen über Apple: [reportaproblem.apple.com](https://reportaproblem.apple.com).',
      },
      {
        q: 'Die Apple Watch zeigt nichts an.',
        a: 'Öffne einmal die App auf dem iPhone, damit Heimatort, Route und Freischaltungen an die Uhr übertragen werden.',
      },
    ],
    legalTitle: 'Rechtliches',
    eula: 'Nutzungsbedingungen (Apple-Standard-EULA)',
  },

  privacy: {
    tag: 'Datenschutz',
    heading: 'Datenschutzerklärung',
    updated: 'App „Schrittheld“ für iPhone und Apple Watch und diese Website · Stand: 17. November 2026',
    summaryLabel: 'Kurz gesagt',
    summary:
      'Schrittheld liest deine Schritte, Gehstrecke und Stockwerke aus Apple Health und zeigt sie dir an. Diese Daten verlassen dein Gerät nicht – außer du schaltest die freiwillige Freunde-Funktion ein: Dann werden nur deine Summen (z. B. „Schritte heute“) über Apples iCloud mit deinen Freunden geteilt. Es gibt keine Konten, keine eigenen Server, keine Werbung und kein Tracking.',
    sections: [
      {
        id: 'verantwortlicher',
        title: 'Verantwortlicher',
        body: [
          'Robert James Herold\nIm Kammerfest 23\n63628 Bad Soden-Salmünster, Deutschland\nE-Mail: [robertjamesherold@icloud.com](mailto:robertjamesherold@icloud.com)',
        ],
      },
      {
        id: 'daten',
        title: 'Welche Daten die App verwendet',
        body: [
          'Mit deiner ausdrücklichen Erlaubnis liest die App folgende Daten aus Apple Health (HealthKit):',
          '- Schrittzahl\n- Geh- und Laufstrecke\n- Gestiegene Stockwerke\n- Radstrecke und Radtrainings (aus aufgezeichneten Radtouren)',
          '**Bewegung & Fitness:** Mit deiner Erlaubnis nutzt die App die Aktivitätserkennung von iPhone und Apple Watch, um Radfahrten automatisch zu erkennen. Ausgewertet werden nur die Zeiträume, in denen „Radfahren“ erkannt wurde; daraus schätzt die App die gefahrenen Kilometer. Die Auswertung erfolgt ausschließlich auf deinen Geräten, gespeichert wird nur die geschätzte Kilometerzahl je Tag. Du kannst die Erkennung in der App abschalten und die Erlaubnis in den iOS-Einstellungen unter _Datenschutz & Sicherheit → Bewegung & Fitness_ widerrufen.',
          'Die App liest diese Daten; schreiben tut sie nur, wenn du auf der Apple Watch eine Indoor-Radfahrt startest: Diese wird als Training („Radfahren drinnen“, mit Dauer und aktiven Kalorien) in Apple Health gespeichert. Du kannst den Zugriff jederzeit in der Health-App unter _Teilen → Apps → Schrittheld_ oder in den iOS-Einstellungen ändern oder widerrufen.',
          'Zusätzlich speichert die App deine selbst gesetzten Tagesziele und die zuletzt angezeigten Werte lokal auf deinem Gerät. So können Widgets und Ziffernblatt-Komplikationen sie schnell anzeigen.',
          '**Heimatort:** Für die Funktion „Reise“ wählst du einen Heimatort aus einer in der App enthaltenen Ortsliste. Optional kannst du dafür einmalig deinen aktuellen Standort verwenden. Dann ermittelt die App auf deinem Gerät den nächstgelegenen Ort und speichert nur diesen Ortsnamen, nicht deine genaue Position. Der Standort wird nicht fortlaufend abgefragt. Genauso funktioniert der Startpunkt „Standort“: Nur wenn du ihn auswählst, fragt die App einmalig deine Position ab und speichert den nächstgelegenen Ortsnamen als Startpunkt. Heimatort und Startpunkt werden nur zwischen deinem iPhone und deiner Apple Watch übertragen und verlassen deine Geräte sonst nicht.',
          '**Freunde (freiwillig):** Nur wenn du die Freunde-Funktion einschaltest, legt die App in der öffentlichen CloudKit-Datenbank von Apple (iCloud) ein Profil unter einem zufälligen Freundescode an. Es enthält: den Namen und das Aussehen deiner Spielfigur, deine Schritte des laufenden Tages, der Woche und des Monats, deine Rad-Kilometer derselben Zeiträume, deine Geh-Kilometer im laufenden Jahr und den Namen des zuletzt erreichten Orts deiner Reise. Es werden keine einzelnen Health-Einträge, keine Uhrzeiten, kein Standort und weder deine Apple-ID noch deine E-Mail-Adresse geteilt. Lesen kann das Profil nur, wer deinen Freundescode kennt; ändern kannst nur du es. Fügst du jemanden hinzu, wird zusätzlich gespeichert, dass dein Code mit seinem verknüpft ist, damit er dich ebenfalls sieht. Für die Funktion ist ein iCloud-Konto nötig. Schaltest du sie aus, werden dein Profil und deine Verknüpfungen aus iCloud gelöscht.',
          '**Fotos der Etappenziele:** Die App zeigt zu jedem Etappenziel ein Foto aus Wikipedia bzw. Wikimedia Commons. Dafür fragt sie bei der Wikimedia Foundation (wikipedia.org, wikidata.org, wikimedia.org) den _Namen des Ziels_ an. Dabei wird technisch bedingt deine IP-Adresse an die Wikimedia Foundation übermittelt. Es werden keine Gesundheitsdaten, keine Schrittzahlen und nicht dein Heimatort übertragen. Die Fotos werden auf deinem Gerät zwischengespeichert. Es gilt die Datenschutzrichtlinie der Wikimedia Foundation ([foundation.wikimedia.org](https://foundation.wikimedia.org/wiki/Policy:Privacy_policy)).',
          '**In-App-Käufe:** Freischaltungen kaufst du über Apples App Store. Bezahlung und Abrechnung wickelt ausschließlich Apple ab; der Entwickler erhält dabei keine Zahlungs- oder Kontodaten. Die App erfährt von Apple nur, welche Freischaltungen zu deiner Apple-ID gehören, und merkt sich das lokal auf deinen Geräten.',
        ],
      },
      {
        id: 'weitergabe',
        title: 'Keine Weitergabe',
        body: [
          'Alle Daten werden lokal auf deinem iPhone und deiner Apple Watch verarbeitet. Ausnahmen sind nur der Abruf der Fotos und – wenn du sie einschaltest – die Freunde-Funktion (siehe oben). Die App sendet keine Daten an den Entwickler und verkauft oder überträgt keine Daten an Dritte. Sie enthält keine Analyse-, Werbe- oder Tracking-Dienste. Gesundheitsdaten landen nur dann in iCloud, wenn du die Freunde-Funktion nutzt, und dann nur als die oben genannten Summen. Gesundheitsdaten werden nie für Werbung, Marketing oder zu einem anderen Zweck verwendet als dem, sie dir und – wenn du es willst – deinen Freunden anzuzeigen.',
        ],
      },
      {
        id: 'rechtsgrundlage',
        title: 'Rechtsgrundlage',
        body: [
          'Die Verarbeitung von Gesundheitsdaten erfolgt auf Grundlage deiner ausdrücklichen Einwilligung (Art. 9 Abs. 2 lit. a in Verbindung mit Art. 6 Abs. 1 lit. a DSGVO), die du über den HealthKit-Dialog von Apple erteilst und jederzeit widerrufen kannst. Für das Teilen mit Freunden erteilst du eine eigene Einwilligung, indem du die Freunde-Funktion einschaltest; du widerrufst sie, indem du sie wieder ausschaltest.',
        ],
      },
      {
        id: 'speicherdauer',
        title: 'Speicherdauer und Löschung',
        body: [
          'Die lokal gespeicherten Einstellungen und Werte bleiben erhalten, bis du die App löschst. Beim Löschen der App werden sie vollständig entfernt. Deine Daten in Apple Health bleiben davon unberührt. Dein Freunde-Profil in iCloud bleibt gespeichert, bis du die Freunde-Funktion in der App ausschaltest – schalte sie deshalb aus, bevor du die App löschst. Du kannst die Löschung auch beim Entwickler anfordern.',
        ],
      },
      {
        id: 'apple',
        title: 'Apple',
        body: [
          'Der Download über den App Store, Apple Health und iCloud unterliegen den Datenschutzbestimmungen von Apple ([apple.com/de/legal/privacy](https://www.apple.com/de/legal/privacy/)). Darauf hat der Entwickler keinen Einfluss.',
        ],
      },
      {
        id: 'website',
        title: 'Diese Website',
        body: [
          'Diese Website erhebt selbst keine personenbezogenen Daten. Sie setzt keine Cookies, verwendet keine Analyse- oder Tracking-Dienste und lädt keine Inhalte von fremden Servern; auch die Schriften werden von dieser Website selbst ausgeliefert.',
          'Die Website wird bei GitHub Pages gehostet (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Beim Aufruf verarbeitet GitHub technisch notwendige Daten in Server-Logs, insbesondere deine IP-Adresse, Datum und Uhrzeit, die aufgerufene Seite und Angaben zu deinem Browser. Das dient der sicheren und zuverlässigen Auslieferung der Website (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO). Dabei können Daten in die USA übermittelt werden; GitHub ist nach dem EU-US Data Privacy Framework zertifiziert. Einzelheiten stehen in der Datenschutzerklärung von GitHub ([docs.github.com](https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement)).',
          'Schreibst du eine E-Mail an die angegebene Adresse, werden deine Angaben nur zur Beantwortung deiner Anfrage verwendet und anschließend gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.',
        ],
      },
      {
        id: 'rechte',
        title: 'Deine Rechte',
        body: [
          'Du hast nach der DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerruf deiner Einwilligung sowie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde. Der Entwickler erhält keine Daten von dir. Dein Freunde-Profil kannst du jederzeit selbst löschen, indem du die Freunde-Funktion ausschaltest.',
        ],
      },
      {
        id: 'kinder',
        title: 'Kinder',
        body: ['Die App erhebt wissentlich keine Daten von Kindern. Die Freunde-Funktion ist standardmäßig aus.'],
      },
      {
        id: 'aenderungen',
        title: 'Änderungen',
        body: [
          'Wenn sich die Funktionen der App ändern, wird diese Datenschutzerklärung entsprechend angepasst. Es gilt die jeweils auf dieser Seite veröffentlichte Fassung.',
        ],
      },
    ],
  },

  imprint: {
    tag: 'Impressum',
    heading: 'Impressum',
    sections: [
      {
        id: 'anbieter',
        title: 'Angaben gemäß § 5 DDG',
        body: ['Robert James Herold\nIm Kammerfest 23\n63628 Bad Soden-Salmünster\nDeutschland'],
      },
      {
        id: 'kontakt',
        title: 'Kontakt',
        body: ['E-Mail: [robertjamesherold@icloud.com](mailto:robertjamesherold@icloud.com)'],
      },
      {
        id: 'verantwortlich',
        title: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
        body: ['Robert James Herold, Anschrift wie oben'],
      },
      {
        id: 'streitbeilegung',
        title: 'Verbraucherstreitbeilegung',
        body: [
          'Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        ],
      },
      {
        id: 'haftung',
        title: 'Haftung für Links',
        body: [
          'Diese Website enthält Links zu externen Websites, auf deren Inhalte ich keinen Einfluss habe. Für diese Inhalte ist der jeweilige Anbieter verantwortlich. Werden mir Rechtsverletzungen bekannt, entferne ich die betreffenden Links umgehend.',
        ],
      },
      {
        id: 'marken',
        title: 'Marken',
        body: [
          'Apple, das Apple-Logo, iPhone, Apple Watch und Apple Health sind Marken der Apple Inc., die in den USA und weiteren Ländern eingetragen sind. App Store ist eine Dienstleistungsmarke der Apple Inc.',
        ],
      },
    ],
  },

  notFound: {
    heading: 'Hier geht’s nicht weiter',
    body: 'Diese Seite gibt es nicht – vielleicht hat dein Held eine falsche Abzweigung genommen.',
    back: 'Zurück zur Startseite',
  },
}
