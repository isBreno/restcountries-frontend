import { MagnifyingGlass } from "phosphor-react";
import {
  FilterRegion,
  Filters,
  InputCountry as SearchCountry,
  CustomSelect,
  Board,
} from "./styles";
import { CountryCard } from "../CountryCard";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import countriesResponseType from "../../types/countriesType";
import Spinner from "../Spinner";
import { api } from "../../utils/axios";

export const HomeBoard = () => {
  const options = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Oceania", label: "Oceania" },
    { value: "Europe", label: "Europe" },
    { value: "", label: "All" },
  ];

  const [region, setRegion] = useState<string>("");
  const [searchCountry, setSearchCountry] = useState("");
  const { data: countries, isFetching } = useQuery<countriesResponseType[]>(
    "countries",
    async () => {
      const response = await api.get("/all");

      return response.data;
    },
    {
      refetchOnReconnect: true,
      staleTime: 1000 * 60 * 60 * 24,
    }
  );

  return (
    <>
      <Filters>
        <SearchCountry>
          <MagnifyingGlass size={24} />
          <input
            placeholder="Search for a country..."
            type="text"
            onChange={(e) => setSearchCountry(e.currentTarget.value)}
          />
        </SearchCountry>

        <FilterRegion>
          <CustomSelect
            placeholder="Filter by Region"
            onChange={(choice: any) => setRegion(choice?.value)}
            isSearchable={false}
            options={options}
            id="selectbox"
            instanceId="selectbox"
          />
        </FilterRegion>
      </Filters>

      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <Board>
            {countries
              ?.filter((country) =>
                country.name.toUpperCase().includes(searchCountry.toUpperCase())
              )
              .filter((country) => country.region.includes(region))
              .map((country) => (
                <CountryCard country={country} key={country.name} />
              ))}
          </Board>
        </>
      )}
    </>
  );
};
