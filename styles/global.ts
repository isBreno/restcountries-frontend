import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.text};
  }

  #__next {
    height: 100%;
    min-height: 100vh;
  }

  html, #root {
    height: 100%;

    ::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #11171a;
  border-radius: 10px;
}
  }

  body {
    padding: 0 10px;
    background: ${({ theme }) => theme.background};
    font-family: ${({ theme }) => theme.font.font_family};
    transition: background 0.2s ease-in-out;
  }
`;

export const Container = styled.div`
  max-width: 1240px;
  margin: 60px auto;
`;
