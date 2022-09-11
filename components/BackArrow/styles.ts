import styled from "styled-components";

export const BackButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8em 2.4em;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.elements};
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px 1px;
  margin-top: 80px;

  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;
