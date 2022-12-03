/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body:['Manrope']
      },
      gridTemplateColumns: {
        'custom': 'repeat(4, minmax(0, 176px))',
        'custom-2cols': 'repeat(2, minmax(0, 316px))',

      },
    },
  },
  plugins: [],
}
