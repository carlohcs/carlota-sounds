const plugin = require('tailwindcss/plugin')


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      1: '2px',
      2: '4px',
      4: '8px',
      5: '10px',
      6: '12px',
      7: '14px',
      8: '16px',
      9: '24px',
      10: '32px',
      11: '40px',
      12: '48px',
      13: '56px',
      14: '64px',
      15: '72px',
      16: '80px',
      // quarck: '4px', // $2
      // nano: '8px', // $4
      // xxxs: '16px', // $8
      // xxs: '32px', // $10
      xs: '8px', // $11
      sm: '16px', // $12
      md: '24px', // $13
      lg: '32px', // $14
      xl: '40px', // $15
      xxl: '48px', // $16
      // xs: '40px', // $11
      // sm: '48px', // $12
      // md: '56px', // $13
      // lg: '64px', // $14
      // xl: '72px', // $15
      // xxl: '80px', // $16
    },
    fontFamily: {
      default: [
        '"Milliard ExtraLight"',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
      ],
      medium: [
        '"Milliard Medium"',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
      ],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'body': { fontFamily: theme('fontFamily.default') },
        'h1': { fontFamily: theme('fontFamily.medium') },
        'h2': { fontFamily: theme('fontFamily.medium') },
        'h3': { fontFamily: theme('fontSize.medium') },
      })
    })
  ]
}
