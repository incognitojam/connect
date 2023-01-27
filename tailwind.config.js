const defaultTheme = require('tailwindcss/defaultTheme')

const { createThemes } = require('tw-colors')
const kebabcase = require('lodash.kebabcase')

const theme = require('./src/theme/theme.json')

const getSchemeColours = (scheme) => ({
  ...Object.fromEntries(
    Object.entries(theme.schemes[scheme]).map(([key, value]) => [
      kebabcase(key),
      value,
    ]),
  ),
  white: '#ffffff',
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      contrast: {
        115: '1.15',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
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
