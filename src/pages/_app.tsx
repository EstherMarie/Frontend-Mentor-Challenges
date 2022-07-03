import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globals';
import { Themes } from '../styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  let pathname = router.pathname;

  let actualTheme =
    pathname == '/'
      ? 'HomeTheme'
      : pathname
          .replace('/', '')
          .split('-')
          .map((word) => word[0].toUpperCase() + word.substring(1))
          .join('')
          .concat('Theme');

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Themes[actualTheme]}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
