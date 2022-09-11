import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.elements};
  width: 100%;
  height: 350px;
  border-radius: 5px;
  margin-top: 60px;
  transform: translateY(-5px);

  box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px 1px;

  @media screen and (max-width: 600px) {
    width: 70%;
    place-self: center;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
`;
export const CountryImage = styled.div`
  img {
    object-fit: cover;
    width: 100%;
    margin: 0 auto;
    cursor: pointer;

    border-radius: 5px 5px 0 0;
    height: 167px;
  }
`;
export const CountryDescription = styled.div`
  padding: 20px;
`;
export const CountryTitle = styled.div`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.font.text_title};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const CountrySubInfos = styled.div`
  span {
    font-size: 0.9rem;
    font-weight: ${({ theme }) => theme.font.text_medium};
  }

  margin-top: 10px;
`;
