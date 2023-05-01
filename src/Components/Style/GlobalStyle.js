import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Main = styled.main`
  flex-grow: 1;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: "Roboto";
    font-size: 16px;
    line-height: 1.25;
    display: flex;
    flex-direction: column;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[class] {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
    object-fit: contain;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  button {
    padding: 0;
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: transparent;
  }
`;
