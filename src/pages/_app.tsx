import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globals";
import { Themes } from "../styles/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Themes}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
