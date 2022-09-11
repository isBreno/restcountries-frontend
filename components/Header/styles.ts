import styled from "styled-components";

export const StyledHeader = styled.header`
  transition: all 0.2s ease-in-out;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px 1px;
  width: 100%;
  background: ${({ theme }) => theme.elements};
  position: absolute;
  padding: 0 10px;
  left: 0;
  top: 0;
`;

export const StyledHeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 100px;

  a {
    cursor: pointer;
    text-decoration: none;
  }

  h1 {
    font-size: clamp(1.25rem, 0.2021rem + 1.5957vw, 2.5rem);
  }

  > button {
    font-size: 1rem;
    background: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;

    font-weight: 400;
    cursor: pointer;
  }
`;
