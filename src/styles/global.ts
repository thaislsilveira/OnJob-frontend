import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #192A56;

    --color-secondary: #4B61C3;
    --color-secondary-light: #798BDE;

    --color-text-darker: #787878;
    --color-text-dark: #B1B1B1;
    --color-text-light: #fff;

    --color-background-informations: #E5E5E5;

    --color-green: #18CA49;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    background: var(--color-selection);
  }
`;
