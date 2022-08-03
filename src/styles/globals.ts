import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  .sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  @media (prefers-reduced-motion: reduce) {  
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  li {
    list-style: none;
  }

  .attribution {
    font-size: 11px;
    text-align: center;
    position: absolute;
    bottom: 5px;
    color: white;

    a {
      text-decoration: none;
    }
  }
`;
