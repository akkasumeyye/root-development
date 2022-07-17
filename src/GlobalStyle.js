import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
   * {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

:root {
  --clr-main: #E9D5DA;
  --clr-text: #fff;
  --clr-body : #827397;
}

body {
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden;
  background-color: #231955;
}
a {
    text-decoration: none;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;

