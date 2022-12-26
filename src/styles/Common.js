
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: Montserrat, sans-serif;
    font-size: 16px;

    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.backgroundColor};
  }

  button {
    cursor: pointer
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

`;