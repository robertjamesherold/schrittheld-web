/** Kleine Comic-Symbole mit dicker Kontur. Rein dekorativ (aria-hidden). */
const paths = {
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  watch: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="3.5" />
      <path d="M9 6V2.5h6V6M9 18v3.5h6V18M12 9.5V12l1.8 1.2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8l7.5 3v5.6c0 4.6-3.2 8.3-7.5 9.8-4.3-1.5-7.5-5.2-7.5-9.8V5.8z" />
      <path d="M8.6 12l2.4 2.4 4.4-4.6" />
    </>
  ),
  star: <path d="M12 3.2l2.6 5.5 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L3.4 9.4l6-.7z" />,
  user: (
    <>
      <circle cx="12" cy="8.5" r="4" />
      <path d="M4.5 20.5c1.2-3.8 4-5.6 7.5-5.6s6.3 1.8 7.5 5.6" />
      <path d="M4 4l16 16" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10v4h3l7 4.5V5.5L7 10z" />
      <path d="M17.5 9.5a3.5 3.5 0 010 5M3 3l18 18" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M3.5 3.5l17 17" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="M3.5 7l8.5 6.5L20.5 7" />
    </>
  ),
  arrow: <path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  pause: <path d="M9 6v12M15 6v12" />,
  play: <path d="M8 5.5v13l10-6.5z" />,
} as const

export type IconName = keyof typeof paths

export const Icon = ({ name, className = 'h-6 w-6' }: { name: IconName; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" className={className}>
    {paths[name]}
  </svg>
)
