import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{    
        --green:#33cc95;
        --red: #e52e4d;
        --blue: #5429cc;

        --blue-light: #6933ff;
        --blue-light-border: #7a48ff;


        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;

    }

    *{
        margin: 0;
        padding: 0 ;
        box-sizing: border-box;
    }

    /* font-size: 16px ; Desktop */
    html {
        @media (max-width:1080px) {
            font-size: 93.75%; // 16 * 0,9375 = 15 px
        }

        @media (min-width:720px) {
            font-size: 87.5%; // 16 * 0,8775 = 14 px
        }
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 600;
    }

    body {
        background: var(--background) ;
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity:0.6;
        cursor: not-allowed ;
    }

`;
