import { createCss } from '@stitches/react'

/**
 * Arquivo que contém tema base para extensão em outras aplicações
 * A estrutura do arquivo segue padrões definidos pela comunidade, conforme a documentação abaixo:
 * https://system-ui.com/theme
 *
 * Esse arquivo será consumido em cada aplicação via stitches.
 * https://stitches.dev/docs/installation
 */
export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {
    colors: {
      neutralDarkest: 'hsla(192, 5%, 11%, 1)',
      neutralDark: 'hsla(192, 3%, 41%, 1)',
      neutralMedium: 'hsla(191, 2%, 61%, 1)',
      neutralLight: 'hsla(192, 5%, 91%, 1)',
      neutralLightest: 'hsla(0, 0%, 100%, 1)',

      // https://cssgradient.io/
      loadingGradient: '180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%',
      loadedGradient: '180deg, rgba(2,0,36,1) 0%, rgba(177,158,54,1) 100%',
      bg_default: '$white',
    },
    space: {
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
      quarck: '$2',
      nano: '$4',
      xxxs: '$8',
      xxs: '$10',
      xs: '$11',
      sm: '$12',
      md: '$13',
      lg: '$14',
      xl: '$15',
      xxl: '$17',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '40px',
      8: '48px',
      nano: '10px',
      xxxs: '$1',
      xxs: '$2',
      xs: '$3',
      sm: '$4',
      md: '$5',
      lg: '$6',
      xl: '$7',
      xxl: '$8',
    },
    fonts: {
      regular: 'UOLTextRegular, Arial, Helvetica, sans-serif',
      bold: 'UOLTextBold, Arial, Helvetica, sans-serif',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {
      1: '0.25px',
      2: '0.5px',
      3: '1px',
      4: '2px',
    },
    sizes: {
      1: '2px',
      2: '4px',
      4: '8px',
      5: '10px',
      6: '12px',
      7: '14px',
      8: '16px',
      9: '20px',
      10: '24px',
      12: '32px',
      13: '40px',
      14: '48px',
      15: '56px',
      16: '64px',
      17: '72px',
      18: '80px',
      icon_sm: '$8',
      icon_md: '$9',
      icon_lg: '$10',
      icon_xl: '$13',
      icon_xxl: '$16',
      full: '100%',
      fullVh: '100vh',
      logo: '112px',
    },
    borderWidths: {
      1: '1px',
      2: '2px',
      3: '4px',
      4: '8px',
      hairline: '$1',
      thin: '$2',
      thick: '#3',
      heavy: '$4',
    },
    borderStyles: {},
    radii: {
      2: '4px',
      4: '8px',
      8: '16px',
      9: '24px',
      sm: '$2',
      md: '$4',
      lg: '$8',
      pill: '500px',
      circular: '50%',
    },
    shadows: {
      8: '0 8px 10px 1px rgba(0, 0, 0, 0.07),0 3px 14px 2px rgba(0, 0, 0, 0.06), 0 5px 5px -3px rgba(0, 0, 0, 0.1)',
      12: '0 12px 17px 2px rgba(0, 0, 0, 0.14),0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.1)',
    },
    zIndices: {},
    transitions: {},
  },
  utils: {
    // A property to apply linear gradient
    linearGradient: (config) => (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    childrenAtCenter:
      (config) =>
      (value = 'column') => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: value,
      }),
    alignSelfCenter: (config) => (value) => ({
      display: 'flex',
      alignSelf: 'center',
    }),
    mW: (config) => (value) => ({
      maxWidth: value,
    }),
  },
})
