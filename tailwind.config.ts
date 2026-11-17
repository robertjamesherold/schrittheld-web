import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    screens: {
      sm: '640px', // großes Handy / kleines Tablet
      md: '768px', // Tablet
      lg: '1024px', // Desktop
    },
    extend: {
      colors: {
        ink: '#1F1C2E',
        // Flächen wechseln im Dark Mode über CSS-Variablen (siehe styles/index.css)
        paper: 'rgb(var(--c-paper) / <alpha-value>)',
        panel: 'rgb(var(--c-panel) / <alpha-value>)',
        fg: 'rgb(var(--c-fg) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        steps: '#21D18F',
        flights: '#FF9E21',
        cycling: '#B866FF',
        sky: '#4FB3FF',
        skyDeep: '#2A66EB',
        sun: '#FFD338',
      },
      fontFamily: {
        sans: ['"Nunito Variable"', 'ui-rounded', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1100px',
      },
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        comic: '22px',
      },
      boxShadow: {
        comic: '6px 6px 0 #1F1C2E',
        'comic-sm': '4px 4px 0 #1F1C2E',
        'comic-lg': '10px 10px 0 #1F1C2E',
        none: 'none',
      },
      dropShadow: {
        comic: '6px 6px 0 #1F1C2E',
      },
      keyframes: {
        hop: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '45%': { transform: 'translateY(-14px) rotate(2deg)' },
          '60%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
      },
      animation: {
        hop: 'hop 1.6s cubic-bezier(.3,.7,.4,1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
