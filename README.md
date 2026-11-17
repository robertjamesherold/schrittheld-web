# Schrittheld / Step Hero – Website

Landingpage, Support, Datenschutz und Impressum für die iOS- und watchOS-App.
React 18 + TypeScript + Vite + Tailwind CSS 3, beim Build vorgerendert (jede Seite ist echtes HTML).

## Lokal starten

```bash
npm install
npm run dev        # Entwicklung: http://localhost:5173/
npm run build      # statische, vorgerenderte Seiten in dist/
npm run preview    # dist/ wie auf GitHub Pages ansehen (inkl. 404 und Weiterleitungen)
```

Node 20.19+ oder 22.12+.

## App-Store-ID eintragen

In `src/config.ts` die numerische ID aus App Store Connect bei `APP_STORE_ID` eintragen.
Dann verlinken alle Buttons auf `https://apps.apple.com/app/id…` und der Smart-App-Banner
(`<meta name="apple-itunes-app">`) wird in jede Seite geschrieben. Solange sie leer ist,
führen die Buttons zur App-Store-Suche.

## App-Store-Badge

Die offiziellen Badges von <https://developer.apple.com/app-store/marketing/guidelines/>
unverändert ablegen als `src/assets/badges/app-store-de.svg` und `app-store-en.svg`.
Fehlen sie, zeigt die Seite einen Comic-Button mit Text.

## Bilder austauschen

Alle Bilder kommen aus `reference/` (siehe `reference/LIESMICH.txt`). Datei mit **gleichem Namen**
ersetzen und neu bauen; Vite verkleinert sie, wandelt sie in AVIF/WebP um und hängt einen Hash an.

- App-Store-Poster: es wird automatisch nur der Handy-Teil (unten) gezeigt. Neue Poster brauchen
  dasselbe Layout (1320 × 2868), sonst in `src/lib/images.ts` den `aspect`-Zuschnitt anpassen.
- Welche Poster zu welcher Funktion gehören, steht in `featureImage()` in `src/lib/images.ts`.
- Favicon, Touch-Icon, PWA-Icons und Open-Graph-Bilder werden unverändert nach `dist/icons/` und
  `dist/og/` kopiert (`vite.config.ts`).

## Texte ändern

Alle Texte stehen in `src/i18n/de.ts` und `src/i18n/en.ts`. Beide haben den Typ `Dict` aus
`src/i18n/types.ts`: fehlt ein Text in einer Sprache, meldet TypeScript einen Fehler.
In längeren Texten gehen `**fett**`, `_kursiv_` und `[Link](https://…)`; in Rechtstexten wird
ein Absatz aus Zeilen mit `- ` zur Liste.

Seitentitel und Beschreibungen für Suchmaschinen stehen jeweils unter `meta`.

## Seiten und Adressen

| Seite | Deutsch | Englisch |
| --- | --- | --- |
| Start | `/` | `/en/` |
| Support | `/support/` | `/en/support/` |
| Datenschutz | `/datenschutz/` | `/en/privacy/` |
| Impressum | `/impressum/` | `/en/imprint/` |

Die alten Adressen `/datenschutz.html` und `/support.html` (App Store Connect, App) werden als
echte HTML-Seiten mitgebaut und verweisen per Canonical auf die neuen. Unbekannte Adressen zeigen
`404.html` in der passenden Sprache. Wer `/` von außen mit einem nicht deutschen Browser öffnet,
landet auf `/en/` (nicht für Suchmaschinen und nicht nach Klick auf den Sprachumschalter).

Beim Build entstehen außerdem `sitemap.xml`, `robots.txt` und `site.webmanifest`.

## Veröffentlichen (GitHub Pages, Domain schrittheld.app)

`.github/workflows/deploy.yml` baut bei jedem Push auf `main` und veröffentlicht `dist/` unter
<https://schrittheld.app>. Der Build legt dafür eine `CNAME`-Datei an.

Einmalig einrichten:

1. Im Repo unter *Settings → Pages*: Source „GitHub Actions“, Custom domain `schrittheld.app`,
   danach „Enforce HTTPS“ (bei `.app` Pflicht, die Domain funktioniert nur per HTTPS).
2. DNS beim Domain-Anbieter:
   - `A` für `schrittheld.app`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` für `schrittheld.app`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` für `www`: `robertjamesherold.github.io`
3. Optional, gegen Domain-Übernahme: die Domain unter *GitHub → Settings → Pages* im Konto verifizieren.

Die alten Adressen `https://robertjamesherold.github.io/schrittheld-web/…` leitet GitHub danach
automatisch auf `https://schrittheld.app/…` weiter. Trotzdem in App Store Connect und in der App
auf `https://schrittheld.app/datenschutz/` und `https://schrittheld.app/support/` umstellen.

Ohne eigene Domain (Unterpfad): `BASE_PATH: /schrittheld-web/` und passende `SITE_URL` im Workflow setzen.

## Aufbau

```text
src/
  components/  Panel, ComicButton, ComicTag, Sunburst, SectionHeading, PhoneShot, Picture,
               LanguageSwitch, Header, Footer, PageHeader, LegalDocument, RichText, Icon
  sections/    Hero, Features, HowItWorks, AvatarGallery, Purchases, PrivacyPromise, CallToAction
  pages/       Home, Support, Privacy, Imprint, NotFound
  i18n/        de.ts, en.ts, types.ts, useLocale.ts
  lib/         images.ts, pages.ts (Pfade), head.ts (SEO-Tags), useReveal.ts
  styles/      index.css (Tailwind-Layer, Strahlenkranz, Rasterpunkte, Comic-Komponenten)
scripts/       prerender.mjs (Vorrendern, Sitemap), preview.mjs (lokale Vorschau)
reference/     Bilder (Originale, werden nicht verändert)
```

Keine Cookies, keine Tracker, keine Drittserver: die Schrift (Nunito) wird über `@fontsource`
selbst ausgeliefert.
