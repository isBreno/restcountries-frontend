import styled from "styled-components";

export const BorderItemSpan = styled.a`
  display: inline-block;
  margin: 0.3rem 0;
  margin-right: 0.4rem;
  padding: 0.1em 0.8em;
  border: 1px solid blue;
  border: 5px;
  font-weight: 600;
  font-size: 0.9em;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.elements};
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px 1px;
  transition: background 0.2s ease-in-out;
  &:nth-child(2) {
    margin-left: 0.8rem;
  }
  text-decoration: none;
`;

export const EmptyBorder = styled.span`
  color: var(--textValue);
`;
