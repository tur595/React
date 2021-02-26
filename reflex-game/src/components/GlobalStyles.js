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
        font-family: "Poppins", sans-serif;
        background: linear-gradient(to right top, #3cc2a9, #6cdbeb);
        height: 1040px;
        color: #505050
    }
    }
`;

export default GlobalStyles;
