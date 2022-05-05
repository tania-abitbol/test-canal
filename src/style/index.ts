import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: Hind,San Francisco,Roboto,Arial,sans-serif;
    text-decoration: none;
    box-sizing:border-box;
  }
  a {
    color: initial;
  }
  ul {
    list-style: none;
  }
  p {
    margin-bottom: 0;
  }
`;
