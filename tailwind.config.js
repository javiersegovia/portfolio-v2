const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '10xl': ['9rem', '10rem'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        indigo: colors.indigo,
        red: colors.red,
        yellow: colors.amber,
        orange: colors.orange,
        green: colors.emerald,
        gray: colors.blueGray,
        dimGray: colors.gray,
        blue: colors.blue,
        teal: colors.teal,
        purple: colors.purple,
        primary: {
          ...colors.amber,
          400: '#ECBE1D',
        },
        darkSecondary: '#060913',
      },
    },
    fontFamily: {
      sans: ['CabinetGrotesk', ...defaultTheme.fontFamily.sans],
      mono: ['Kanit', ...defaultTheme.fontFamily.mono],
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
