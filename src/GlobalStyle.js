import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
    color: #9C9FAC;
  }
  body {
    font-size: 16px;
    width: 100%;
    height: 100%;
    background: #333853;
  }
`;
