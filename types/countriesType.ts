export default interface countriesResponseType {
  name: string;
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital: string;
  cioc: string;
  alpha3Code: string;
}

export interface singleCountryResponseType {
  name: string;
  nativeName: string;
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
  capital: string;
  subregion: string;
  topLevelDomain: string;
  currencies: { name: string }[];
  languages: { name: string }[];
  borders: string[];
}
