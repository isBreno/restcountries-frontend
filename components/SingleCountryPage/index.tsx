import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { singleCountryResponseType } from "../../types/countriesType";
import { api } from "../../utils/axios";
import { numberWithCommas } from "../../utils/numbersWithCommas";
import { objectToStringCommas } from "../../utils/objectToStringCommas";
import { CountryBorders } from "../CountryBorders";
import Spinner from "../Spinner";
import * as S from "./styles";

const SingleCountryPage = () => {
  const { name } = useRouter().query;
  const {
    data: country,
    error,
    isFetching,
  } = useQuery<singleCountryResponseType[]>(
    "singleCountry",
    async () => {
      const response = await api.get(`/name/${name}`);

      return response.data;
    },
    {
      retry: false,
      refetchOnReconnect: true,
      staleTime: 0,
    }
  );

  if (error) {
    return <div>Something went wrong. Return to home page!</div>;
  }

  if (isFetching) return <Spinner />;
  if (!country) return <Spinner />;
  const foundCountry = country[0];

  // FIXME: Fix DevTools SVG error
  // FIXME: Stop rendering 192313 times
  // TODO: Complete the page

  return (
    <>
      <Head>
        <title>Rest Countries: {foundCountry.name}</title>
      </Head>
      <S.Container>
        <picture>
          <S.CountryFlag src={foundCountry?.flags.svg} alt="" />
        </picture>
        <S.CountryInfos>
          <S.CountryName>{foundCountry?.name}</S.CountryName>
          <S.CountrySubInfos>
            <>
              <article>
                <S.TextDetails>
                  <span>Native Name:</span> {foundCountry?.nativeName}
                </S.TextDetails>
                <S.TextDetails>
                  <span>Population: </span>
                  {numberWithCommas(foundCountry?.population)}
                </S.TextDetails>
                <S.TextDetails>
                  <span>Region:</span> {foundCountry?.region}
                </S.TextDetails>
                <S.TextDetails>
                  <span>Sub Region:</span> {foundCountry?.subregion}
                </S.TextDetails>
                <S.TextDetails>
                  <span>Capital:</span> {foundCountry?.capital}
                </S.TextDetails>
              </article>
              <article>
                <S.TextDetails>
                  <span>Top Level Domain:</span> {foundCountry?.topLevelDomain}
                </S.TextDetails>
                <S.TextDetails>
                  <span>Currencies:</span>{" "}
                  {objectToStringCommas(foundCountry?.currencies)}
                </S.TextDetails>
                <S.TextDetails>
                  <span>Languages:</span>{" "}
                  {foundCountry?.languages
                    ? objectToStringCommas(foundCountry?.languages)
                    : " -"}
                </S.TextDetails>
              </article>
            </>
          </S.CountrySubInfos>
          <S.Borders>
            <S.TextDetails>
              <span>Border Countries:</span>
              {foundCountry?.borders &&
                foundCountry?.borders.map((border) => (
                  <>
                    <CountryBorders border={border} />
                  </>
                ))}
            </S.TextDetails>
          </S.Borders>
        </S.CountryInfos>
      </S.Container>
    </>
  );
};

export default SingleCountryPage;
