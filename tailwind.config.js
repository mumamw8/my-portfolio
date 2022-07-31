/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'karla': ["'Karla'", 'sans-serif']
      }
    },
  },
  plugins: [],
}