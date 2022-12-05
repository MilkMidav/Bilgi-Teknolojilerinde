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
        '4.5xl': ['40px'],
        '5.8xl': ['58px'],
        '6.2xl': ['64px'],
      },

      spacing: {
        '1.2': '5px',
        '3.5': '18px',
        '2.8': '14px',
        '17': '70px',
      },

      maxWidth: {
        '4.5xl': '950px',
        '6.5xl': '1200px',
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

      lineHeight: {
        '12': '60px',
        '14': '76px',
      },
    },
  },
  plugins: [],
}
