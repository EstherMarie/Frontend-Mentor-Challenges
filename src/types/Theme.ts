export interface ProjectTheme {
  theme: {
    colors: {
      primary: {
        [index: string]: string;
      };
      neutral: {
        [index: string]: string;
      };
    };
    typography: {
      fontSize: string;
      fontFamily: string;
      fontWeight: number | { [index: string]: number };
    };
  };
}
