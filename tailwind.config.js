const defaultTheme = require('tailwindcss/defaultTheme')

const { createThemes } = require('tw-colors')
const kebabcase = require('lodash.kebabcase')

const theme = require('./src/theme/theme.json')

const getSchemeColours = (scheme) =>
  Object.fromEntries(
    Object.entries(theme.schemes[scheme]).map(([key, value]) => [
      kebabcase(key),
      value,
    ]),
  )

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-jetbrains-mono)', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // ...theme.palettes,
      },
      keyframes: {
        ripple: {
          '100%': {
            transform: 'scale(4)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [
    createThemes(
      Object.fromEntries(
        ['light', 'dark'].map((scheme) => [scheme, getSchemeColours(scheme)]),
      ),
    ),
  ],
}