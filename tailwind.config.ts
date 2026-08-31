import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        ink: '#131313',
        charcoal: '#383938',
        paper: '#F6EDE3',
        warmPaper: '#EFE1D0',
        risoRed: '#E94F4F',
        risoGold: '#F7B74D',
        waterTeal: '#4CABA2',
        violetInk: '#5E4B88',
        newsprint: '#B8A891',
        softBlack: '#1B1A18',
      },
      boxShadow: {
        'paper-lift': '0 18px 40px rgba(19,19,19,0.16)',
        cardstock1: '0 2px 4px rgba(19,19,19,0.08)',
        cardstock2: '0 4px 8px rgba(19,19,19,0.10)',
        cardstock3: '0 8px 16px rgba(19,19,19,0.12)',
        cardstock4: '0 12px 24px rgba(19,19,19,0.14)',
      },
    },
  },
  plugins: [],
};

export default config;
