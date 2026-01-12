import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // From RESEARCH.md line 174: "Primary: Hot Pink (#E056A0 or similar)"
        pink: {
          50: '#fdf2f6',
          100: '#fce7ef',
          200: '#fbcfe0',
          300: '#f9a8c7',
          400: '#f472a3',
          500: '#D85D8C',
          600: '#c4447a',
          700: '#a33562',
          800: '#872e52',
          900: '#712a47',
        },
        // From RESEARCH.md line 175: "Accent: Mint/Teal Green - the door color"
        mint: {
          500: '#3D9A82',
          600: '#2d7a66',
        },
        // From RESEARCH.md line 176: "Secondary: Cream/White"
        cream: {
          50: '#FFFDFB',
          100: '#FDF8F3',
          200: '#FAF0E6',
        },
        // From RESEARCH.md line 177: "Dark: Black"
        ink: {
          DEFAULT: '#1C1917',
          muted: '#57534e',
          light: '#78716c',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
