/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        crimson:        '#800020',
        'crimson-dark': '#5a0015',
        mustard:        '#FFC30B',
        navy:           '#002060',
        gold:           '#D4AF37',
        'gold-light':   '#F0D060',
      },
      fontFamily: {
        serif: ['"Cinzel"', 'Georgia', 'serif'],
        body:  ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};