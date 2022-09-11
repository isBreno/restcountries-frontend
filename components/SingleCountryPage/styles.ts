import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 60px;
  align-items: center;
  grid-gap: 2rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    grid-template-columns: none;
  }
`;

export const CountryInfos = styled.div``;
export const CountryFlag = styled.img`
  width: 90%;
  max-width: 625px;
  height: 450px;
  min-width: 400px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px 1px;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 300px;
  }
`;
export const CountryName = styled.h1`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.title};
`;
export const CountrySubInfos = styled.div`
  margin: 1.6rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  gap: 1rem;
`;
export const TextDetails = styled.div`
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.text};
  }
  margin-top: 0.6rem;
`;

export const Borders = styled.div`
  margin-top: 60px;
`;
