import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    &::-webkit-scrollbar{
        opacity: 0;
        background: transparent;
        border: transparent;
    }
    html{
        body{
        font-family: "Lato", sans-serif;
    }

    }

`;

export default GlobalStyles;
