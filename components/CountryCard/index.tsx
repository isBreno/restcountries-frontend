import countriesResponseType from "../../types/countriesType";
import {
  Card,
  CountryDescription,
  CountryImage,
  CountrySubInfos,
  CountryTitle,
} from "./styles";
import Link from "next/link";
import { numberWithCommas } from "../../utils/numbersWithCommas";

export const CountryCard = ({
  country,
}: {
  country: countriesResponseType;
}) => {
  return (
    <Card>
      <CountryImage>
        <Link href={`/country/${country.name.toLowerCase()}`}>
          <picture>
            <img src={country.flags.svg} alt="Flag" />
          </picture>
        </Link>
      </CountryImage>
      <CountryDescription>
        <CountryTitle>
          <Link href={`/country/${country.name.toLowerCase()}`}>
            {country.name}
          </Link>
        </CountryTitle>
        <CountrySubInfos>
          <div>
            <span>Population:</span> {numberWithCommas(country.population)}
          </div>
          <div>
            <span>Region:</span> {country.region}
          </div>
          <div>
            <span>Capital:</span> {country.capital || "-"}
          </div>
        </CountrySubInfos>
      </CountryDescription>
    </Card>
  );
};
