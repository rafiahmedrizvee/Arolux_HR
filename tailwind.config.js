/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] },
      colors: {
        ink: '#080d1c',
        navy: { 900: '#0b1230', 800: '#111a40', 700: '#1a2656' },
        gold: { 300: '#f1d58a', 400: '#e5bd5c', 500: '#d4a53a' },
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: { marquee: 'marquee 30s linear infinite' },
    },
  },
  plugins: [],
}
