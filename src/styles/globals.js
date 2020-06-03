import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
      box-sizing: border-box;
    }
    html, body, button {
      background: ${({ theme }) => theme && theme.body};
      color: ${({ theme }) => theme && theme.text};
      font-family: Lato,Helvetica-Neue,Helvetica,Arial,sans-serif;
      margin: 0;
      overflow-x: hidden;
      padding: 0;
      width: 100vw;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    a {
      text-decoration: none;
      &:visited {
        color: inherit;
      }
    }
  `;

export default GlobalStyles;
