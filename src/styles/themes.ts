import { ProjectTheme } from '../types/Theme';

interface Themes {
  [index: string]: ProjectTheme;
}

export const Themes: Themes = {
  home: {
    colors: {
      primary: {
        babyPink: '#F9C7C5',
        middleBlue: '#69BED0',
      },
      neutral: {
        white: '#FAFAFA',
        earieBlack: '#1c2022',
      },
    },
    typography: {
      fontFamily: '"Barlow", sans-serif',
      fontWeight: 400,
    },
  },
  adviceGeneratorApp: {
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
  easybankLandingPage: {
    colors: {
      primary: {
        darkBlue: 'hsl(233, 26%, 24%)',
        limeGreen: 'hsl(136, 65%, 51%)',
        brightCyan: 'hsl(192, 70%, 51%)',
      },
      neutral: {
        grayishBlue: 'hsl(233, 7%, 48%)',
        lightGrayishBlue: 'hsl(220, 16%, 96%)',
        veryLightGray: 'hsl(0, 0%, 99%)',
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
  sunnysideLandingPage: {
    colors: {
      primary: {
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        darkDesaturatedCyan: 'hsl(167, 40%, 24%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        darkModerateCyan: 'hsl(168, 34%, 41%)',
      },
      neutral: {
        veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
        veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
    typography: {
      fontFamily: {
        fraunces: '"Fraunces", serif',
        barlow: '"Barlow", sans-serif',
      },
      fontWeight: {
        barlow600: 600,
        fraunces700: 700,
        fraunces900: 900,
      },
      fontSize: '18px',
    },
  },
};
