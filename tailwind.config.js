/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f2748',
          blue: '#173f73',
          gold: '#d7a928',
          sand: '#f7f2e4',
          slate: '#e2e8f0',
          ink: '#08111f',
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
