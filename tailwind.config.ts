import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#131313',
        charcoal: '#383938',
        paper: '#F6EDE3',
        'warm-paper': '#EFE1D0',
        'riso-red': '#E94F4F',
        'riso-gold': '#F7B74D',
        'water-teal': '#4CABA2',
        'violet-ink': '#5E4B88',
        newsprint: '#B8A891',
        'soft-black': '#1B1A18',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '10px',
        xl: '16px',
        '2xl': '24px',
        full: '9999px',
      },
      boxShadow: {
        paper1: '1px 2px 4px rgba(19,19,19,.08)',
        paper2: '2px 4px 10px rgba(19,19,19,.10)',
        paper3: '4px 8px 20px rgba(19,19,19,.12)',
        paper4: '6px 14px 32px rgba(19,19,19,.14)',
        lift: '0 18px 40px rgba(19,19,19,.16)',
      },
      backgroundImage: {
        'grain-light':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
