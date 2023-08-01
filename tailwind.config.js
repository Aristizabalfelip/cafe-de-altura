/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: '#2B2A2B',
        colorHero : 'rgba(227, 222, 215, 0.30)',
        greenNoHover : '#2A5B45'
      },
      backgroundImage: {
        'custom-image': "url('./assets/Cristal.png')",
      },
    },
  },
  plugins: [],
}

