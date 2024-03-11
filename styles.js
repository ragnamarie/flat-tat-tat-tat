import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #__next {
    margin: 30px;

  }

body {
    font-family: Futura, sans-serif;
    font-weight: 500;
    margin: 0;
    height: 100vh;
    width: 100vw;
    color: white;
    background-color: #2422D5;
  }

  main {
    min-height: 75%;
  }
  
  h2 {
    font-family: Helvetica;
    font-weight: 300;
  }

  h3 {
    font-family: Helvetica;
  }

  li {
    list-style-type: none;
  }

  a {
    color: white;
  }
`;
