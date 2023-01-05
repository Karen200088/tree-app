import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  .app {
    display: flex;
    justify-content: center;
  }
`;
export default GlobalStyles;