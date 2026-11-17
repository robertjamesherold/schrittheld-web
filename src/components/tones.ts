/** Bereichs- und Akzentfarben. Klassen stehen ausgeschrieben, damit Tailwind sie findet. */
export type Tone = 'steps' | 'flights' | 'cycling' | 'sky' | 'skyDeep' | 'sun' | 'white'

export const toneBg: Record<Tone, string> = {
  steps: 'bg-steps text-ink',
  flights: 'bg-flights text-ink',
  cycling: 'bg-cycling text-ink',
  sky: 'bg-sky text-ink',
  // Weiß auf skyDeep erfüllt WCAG AA, Tinte nicht.
  skyDeep: 'bg-skyDeep text-white',
  sun: 'bg-sun text-ink',
  white: 'bg-white text-ink',
}

export const toneBurst: Record<Exclude<Tone, 'white'>, string> = {
  steps: 'burst-steps',
  flights: 'burst-flights',
  cycling: 'burst-cycling',
  sky: 'burst-sky',
  skyDeep: 'burst-skyDeep',
  sun: 'burst-sun',
}
