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
        cream: {
          DEFAULT: '#F9F6F0',   // soft warm cream background
          dark: '#EBE5D9',
        },
        white: '#FFFFFF',
        emerald: {
          DEFAULT: '#059669',   // rich Saudi emerald accent
          light: '#34D399',
          dark: '#047857',
        },
        gold: {
          DEFAULT: '#C8A45D',   // luxury secondary accent
          light: '#E6C27A',
          dark: '#A88848',
        },
        gray: {
          100: '#F5F5F5',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Jost', 'sans-serif'],
        arabic: ['Noto Naskh Arabic', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
export default config