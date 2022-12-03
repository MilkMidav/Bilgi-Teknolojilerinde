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

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl-custom': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
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
    },
  },
  plugins: [],
}
