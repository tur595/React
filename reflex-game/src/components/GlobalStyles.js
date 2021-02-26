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
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        display: none;

    }
     &::-webkit-scrollbar-track {
        display: none;
    }
    html{
        body{
        font-family: "Lato", sans-serif;
    }
    background: rgba(48, 144, 255, 0.082);
    }

`;

export default GlobalStyles;
