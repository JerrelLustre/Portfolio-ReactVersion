/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'robcon': ['Roboto Condensed', 'sans-serif']
      },
      colors:{
        'black': '#222222',
        'bgBlack' : '#101111',
        'white': '#f2f2f2',
        'highlight' : '#9AE7FF'
      },
      borderRadius:{
        'lg':'2.5rem'
      }
    },
  },
  plugins: [],
};
