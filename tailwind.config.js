/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#051a34',
          blue: '#123866',
          gold: '#f2b501',
          sand: '#fff8e7',
          slate: '#e2e8f0',
          ink: '#06111f',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 80px rgba(15, 39, 72, 0.35)',
        card: '0 18px 50px rgba(8, 17, 31, 0.14)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
