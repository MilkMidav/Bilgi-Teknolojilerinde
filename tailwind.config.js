/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        body:['Manrope']
      },

      gridTemplateColumns: {
        'custom': 'repeat(4, minmax(0, 176px))',
        'custom-2cols': 'repeat(2, minmax(0, 316px))',
        'custom-3cols': 'repeat(3, minmax(0, 316px))',
      },

      fontSize: {
        40: ['40px'],
        58: ['58px'],
        64: ['64px'],
      },

      spacing: {
        '3.5': '18px',
        '2.8': '14px',
        '70': '70px',
      },

      maxWidth: {
        '424': '424px',
        '504': '504px',
        '550': '550px',
        '650': '650px',
        '665': '665px',
        '876': '876px',
        '1050': '1050px',
        '1200': '1200px',
      },

      colors: {
        'primary': '#F84646',
        'secondary': '#808080',
        'pink': '#FF5391',
        'violet': '#7553FF',
        'lite-blue': '#53ACFF',
        'warm-orange': '#FFBA53',
        'aquamarine': '#53C1FF',
      },
    },
  },
  plugins: [],
}
