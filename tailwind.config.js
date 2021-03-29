const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
        blue: colors.blue,
        teal: colors.teal,
        purple: colors.purple,
      },
    },
    fontFamily: {
      sans: ['Cano', ...defaultTheme.fontFamily.sans],
      mono: ['UniviaPro', ...defaultTheme.fontFamily.mono],
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
