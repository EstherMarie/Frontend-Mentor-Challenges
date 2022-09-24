export interface ProjectTheme {
  colors: {
    primary: {
      [index: string]: string;
    };
    neutral: {
      [index: string]: string;
    };
  };
  typography: {
    fontSize?: string;
    fontFamily: string | { [index: string]: string };
    fontWeight: number | { [index: string]: number };
  };
}
