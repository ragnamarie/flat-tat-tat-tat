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
    font-family: Proxima Nova, sans-serif;
    font-weight: 700;
    margin: 0;
    height: 100vh;
    width: 100vw;
    color: white;
    background-color: #2422D5;
  }

  main {
    min-height: 75%;
  }

  footer {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 54px;
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

  select {
    appearance: none;
    background-color: #2422D5; 
    color: #ff7373; 
    border: none; 
    font-size: 16px;
  }

  option {
    text-decoration: none;
  }
`;
