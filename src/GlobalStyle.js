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

  .navbar {
    background-color: transparent;
  }

  .navbar.colorChange {
     background-color: #231955;
  }

  .start {
    animation: slide-in-tr 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      @keyframes slide-in-tr {
        0% {
          transform: translateY(-500px) translateX(500px);
          opacity: 0;
        }
        100% {
          transform: translateY(0) translateX(0);
          opacity: 1;
        }
      }
  }
`;

export default GlobalStyle;

