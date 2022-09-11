import styled from "styled-components";
import ReactSelect from "react-select";
import { darken } from "polished";

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 6rem;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    gap: 3rem;
    padding-top: 4.5rem;
  }
`;

export const InputCountry = styled.div`
  background: ${({ theme }) => theme.elements};
  transition: background 0.2s ease-in-out;
  padding: 1.25rem 1.5rem;
  width: 400px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px 1px;

  @media screen and (max-width: 680px) {
    width: 100%;
  }
  > input {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;

    &::placeholder {
      color: ${({ theme }) => darken(0.1, theme.text)};
    }
  }
`;

export const FilterRegion = styled.div``;

export const CustomSelect = styled(ReactSelect)`
  * {
    background: ${({ theme }) => theme.elements};
    transition: background 0.2s ease-in-out;
    color: ${({ theme }) => theme.text};
    animation: none;
    transition: none;
  }

  &::placeholder {
    color: white;
    padding: 100px;
  }

  .react-select__indicator react-select__dropdown-indicator {
    border-color: transparent transparent red;
  }

  width: 100%;
  width: 225px;

  .css-1s2u09g-control {
    min-height: 64px;
    padding: 0 10px;
    background: ${({ theme }) => theme.elements};
    transition: background 0.2s ease-in-out;
    border: none !important;
    transition: none;
    -webkit-transition: none !important;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px 1px;
  }

  .css-1pahdxg-control {
    padding: 0 10px;
    min-height: 64px;
    background: ${({ theme }) => theme.elements};
    transition: background 0.2s ease-in-out;
    transition: none;
  }
  .css-qc6sy-singleValue {
    color: ${({ theme }) => theme.text} !important;
  }

  .css-1okebmr-indicatorSeparator {
    display: none;
  }

  .css-1n7v3ny-option {
    background: ${({ theme }) => theme.background} !important;
    transition: background 0.2s ease-in-out;
  }
`;

export const Board = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  column-gap: 3rem;
`;
