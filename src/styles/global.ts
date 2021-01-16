import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary-dark: #fff;
    --color-primary: #fff;
    --color-primary-light: #fff;
    --color-secondary-dark: #fff;
    --color-secondary: #fff;
    --color-secondary-light: #fff;
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

  body, input, button {
    font-family: 'Open Sans', sans-serif;
  }

  ::selection {
    background: var(--color-selection);
  }

  /*Phone*/
  @media (min-width: 320px)
    and (max-width: 480px) {
    :root {
      font-size: 43.75%;
    }
  }

  /*Tablet*/
  @media (min-width: 481px)
    and (max-width: 1100px) {
    :root {
      font-size: 50%;
    }
  }

  /*Desktop*/
  @media (min-width: 1101px)
    and (max-width: 1600px) {
    :root {
      font-size: 62.5%;
    }
  }

  /*Ultra*/
  @media (min-width: 1101px)
    and (max-width: 1600px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
