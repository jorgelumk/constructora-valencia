import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          accent: '#ea580c', /* Orange */
          dark: '#0e1f33',   /* Deep Navy */
          light: '#f5f7fa',  /* Premium Off-white */
        },
      },
      boxShadow: {
        'premium': '0 20px 40px -10px rgba(14, 31, 51, 0.15)',
      }
    },
  },
  plugins: [typography],
}

export default config
