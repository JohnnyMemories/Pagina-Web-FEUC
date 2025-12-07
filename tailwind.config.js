/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#67C3B6',
        secondary: '#0B3B79',
        accent: '#F6D572',
        ink: '#0F172A',
      },
      boxShadow: {
        card: '0 18px 45px -22px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [],
}

