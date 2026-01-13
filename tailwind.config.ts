import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fdf2f6',
          100: '#fce7ef',
          200: '#fbd0e1',
          300: '#f9a8c7',
          400: '#f472a3',
          500: '#D85D8C',
          600: '#c44a7a',
          700: '#a53962',
          800: '#893352',
          900: '#732e47',
        },
        mint: {
          50: '#f0fdf9',
          100: '#ccfbeb',
          200: '#9af5d8',
          300: '#5fe9c2',
          400: '#3D9A82',
          500: '#1f7a66',
          600: '#166354',
          700: '#155045',
          800: '#164039',
          900: '#153530',
        },
        cream: {
          50: '#FFFDFB',
          100: '#FDF8F3',
          200: '#FAF0E6',
          300: '#F5E6D8',
          400: '#E8D4C4',
        },
        ink: {
          DEFAULT: '#1A1615',
          light: '#2D2826',
          muted: '#5C5452',
          faint: '#8A8483',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
