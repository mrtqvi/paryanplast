/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily : {
        'vazir' :  ["vazirmatn"],
      }
    },
  },
  plugins: [],
}

