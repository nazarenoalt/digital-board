import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;

    --grayish-white: #dbdbdb;
    --white: white;
    --dark-blue: #0d1317;
    --orange: #e4860c;
    --black: #080808;
  }

  body {
    background-color: var(--grayish-white);
    color: var(--black);
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyle