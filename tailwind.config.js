const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function ({addUtilities}) {
  addUtilities({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    }
  })
})

module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "color-primary": "#01051e",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#A427DF",
        "color-light-bluish": "#CEE6F3",
        "color-bluish": "#1d5d98",
        "color-whitish": "#F5F5F5",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "70px"
      }
    }
  },
  plugins: [rotateY],
}