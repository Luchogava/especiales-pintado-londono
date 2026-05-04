/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#06224B',
          blue: '#10305F',
          green: '#74C043',
          red: '#E33239',
          silver: '#D9DDE4',
          graphite: '#44505E',
          white: '#FFFFFF',
          ink: '#040B16',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 80px rgba(15, 39, 72, 0.35)',
        card: '0 18px 50px rgba(8, 17, 31, 0.14)',
        premium: '0 24px 70px rgba(4, 11, 22, 0.18)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
