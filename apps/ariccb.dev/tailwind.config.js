const svgToDataUri = require('mini-svg-data-uri');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans, "")', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono, "")', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        divider: {
          light: colors.slate[200],
          dark: colors.slate[800],
        },
        secondary: {
          50: 'rgb(var(--tw-secondary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-secondary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-secondary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-secondary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-secondary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-secondary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-secondary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-secondary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-secondary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-secondary-900) / <alpha-value>)',
        },
      },
      animation: {
        'bounce-x': 'bounce-x 1s infinite',
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': {
            transform: 'translateX(25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(34,211,238)',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('fm', '.fm &');
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}" stroke-dasharray="5 3" transform="scale(1, -1)"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
    require('@headlessui/tailwindcss'),
    require('tailwindcss-accent')({
      colors: ['amber', 'violet', 'red', 'orange', 'green', 'pink'],
      root: 'amber',
    }),
  ],
};
