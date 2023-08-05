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
        noHover : 'rgba(42, 91, 69, 0.70)',
        greenNoHover : '#2A5B45',
        colorCounter : 'rgba(42, 91, 69, 0.10)',
        colorTotal : '#F7F5F3',
        coCantCof : 'rgba(247, 245, 243, 0.10);',
        coBuSe : '#515051',
        selBagCo : '#F7F5F3',
        coContact : '#E3DED7',
        coTextCont : '#6B7280'
      },
      backgroundImage: {
        'custom-image': "url('./assets/Cristal.png')",
      },
    },
  },
  plugins: [],
}

