import { createGlobalStyle } from "styled-components";

export const CommonStyles = createGlobalStyle`
    html {
        font-size: ${(props) => props.theme.sizes.html.font};
    }
    body {
        overflow: hidden;
        overflow-y: auto;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-variant-east-asian: normal;
        font-weight: 600;
        height: 100vh;
        font-stretch: normal;
        font-size: ${(props) => props.theme.sizes.common.fontSizePrimary};
        color: ${(props) => props.theme.colors.common.intense};
    }
    * {
        margin: 0;
        padding: 0;
        outline: none;
        color: inherit;
        background: initial;
        box-sizing: border-box;
        border: initial;
        font-family: inherit;
        font-weight: inherit;
        cursor: inherit;
        text-align: inherit;
        font-size: inherit;
        text-decoration: initial;
        word-wrap: break-word;
        text-transform: inherit;
    }
    #app {
        height: 100%;
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }
    input,
    textarea,
    select {
        border: initial;
        padding: initial;
        background: initial;
    }
    button {
        cursor: pointer;
    }
    svg {
        width: 100%;
        height: 100%;
        fill: inherit;
        stroke: inherit;
        stroke-width: inherit;
    }
    svg g,
    svg path {
        stroke: inherit;
        fill: inherit;
        stroke-width: inherit;
    }
    a {
        cursor: pointer;
    }
    .noselect {
        user-select: none;
    }
`;
