import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cadetGray: 'var(--cadet-gray)',
        richBlack: 'var(--rich-black)',
        hunyadi: 'var(--hunyadi-yellow)',
        lightYellow: 'var(--light-yellow)',
        mfWhite: 'var(--white)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}

export default config
