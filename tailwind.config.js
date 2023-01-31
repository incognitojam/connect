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
    borderRadius: {
      none: '0',
      xs: '0.25em',
      sm: '0.5em',
      md: '0.75em',
      lg: '1em',
      xl: '1.75em',
      full: '9999px',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
    },
    extend: {
      contrast: {
        115: '1.15',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      animation: {
        ripple: 'ripple 600ms linear',
      },
      keyframes: {
        ripple: {
          '100%': {
            transform: 'scale(4)',
            opacity: 0,
          },
        },
      },
      transitionProperty: {
        surface: 'background-color, border-color, color, box-shadow',
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
