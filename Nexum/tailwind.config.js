/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'yellowBg':'#F7AD0C',
        'whiteFont':'#EFEFEF'
      },
      fontFamily: {
        Fraunces: ['Fraunces' , 'sans-serif'],
        NunitoSans: ['NunitoSans' , 'sans-serif']
      }
    },
  },
  plugins: [],
}

