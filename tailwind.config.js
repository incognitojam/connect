/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
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
  plugins: [],
};
