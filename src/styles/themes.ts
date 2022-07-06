import { ProjectTheme } from '../types/Theme';

interface Themes {
  [index: string]: ProjectTheme;
}

// TODO: create style guide for Homepage
export const Themes: Themes = {
  HomeTheme: {
    colors: {
      primary: {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',
      },
      neutral: {
        grayishBlue: 'hsl(217, 19%, 38%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)',
      },
    },
    typography: {
      fontSize: '2.8rem',
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 800,
    },
  },
  AdviceGeneratorAppTheme: {
    colors: {
      primary: {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',
      },
      neutral: {
        grayishBlue: 'hsl(217, 19%, 38%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)',
      },
    },
    typography: {
      fontSize: '2.8rem',
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 800,
    },
  },
  EasybankLandingPageTheme: {
    colors: {
      primary: {
        darkBlue: 'hsl(233, 26%, 24%)',
        limeGreen: 'hsl(136, 65%, 51%)',
        brightCyan: 'hsl(192, 70%, 51%)',
      },
      neutral: {
        grayishBlue: 'hsl(233, 8%, 62%)',
        lightGrayishBlue: 'hsl(220, 16%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
    typography: {
      fontSize: '1.8rem',
      fontFamily: 'Public Sans',
      fontWeight: {
        light: 300,
        regular: 400,
        bold: 700,
      },
    },
  },
};
