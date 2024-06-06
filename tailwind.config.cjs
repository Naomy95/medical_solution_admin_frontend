/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    fontFamily: {
      sans:["Open Sans"],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#000000',
        background: '#F4F7FD',
        blue: '#4F7AB9',
        skyblue: '#F8F8FF',
        pink: 'rgba(203, 0, 183, 0.07)',
        border: '#F8F8FF',
        accordion: '#EDF0F8',
        green: '#2A9D8F',
        text:'#8266BB',
        hoverBackground:"#CDF9F6",
        headerText:"#04DAC9",
        headerGreen:"#CDF9F6",
        navbarcolor:"#01DACA",
        buttoncolor:"#01DAC8",
        showWax: 'rgba(43, 43, 43, 0.9)',
        showWaxLight: 'rgba(43, 43, 43, 0.6)',
        violet: '#707BFF',
        commentcolor:"rgb(187, 181, 181)",
        boxcolor:'rgb(247, 248, 248)'
      },
    },
  },
  plugins: [],
}

