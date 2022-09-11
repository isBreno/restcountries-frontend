// Imports
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import countriesResponseType from "../../types/countriesType";
import { BorderItemSpan, EmptyBorder } from "./styles";

// Imports

export const CountryBorders = ({ border }: { border: string }) => {
  const { data } = useQuery<countriesResponseType[]>(["countries"]);
  const [borders, setBorders] = useState("");

  useEffect(() => {
    if (!data) return;

    const getBorders = data.find(
      (country: countriesResponseType) => country.alpha3Code === border
    );

    if (!getBorders) return setBorders(border);

    setBorders(getBorders.name);
  }, [data, border]);

  return (
    <>
      <Link href={`/country/${borders.toLowerCase()}`}>
        <BorderItemSpan
          href={`/country/${borders.toLowerCase()}`}
          key={borders}
        >
          {borders}
        </BorderItemSpan>
      </Link>
    </>
  );
};
