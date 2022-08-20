import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
    scroll-behavior: smooth;

    /* @media (max-width: 1080px) {
      font-size: 93.75%; // 1rem = 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 1rem = 14px
    } */
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
    ::before, 
    ::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
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
