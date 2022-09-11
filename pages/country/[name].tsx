import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BackArrow } from "../../components/BackArrow";
import { Header } from "../../components/Header";
import SingleCountryPage from "../../components/SingleCountryPage";
import { Container, GlobalStyle } from "../../styles/global";
import dark from "../../themes/dark";
import light from "../../themes/light";
import { singleCountryResponseType } from "../../types/countriesType";
import usePersistedTheme from "../../utils/usePersistedTheme";

const Country = () => {
  const [theme, setTheme] = usePersistedTheme("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const CountryInfos = dynamic(
    () => import("../../components/SingleCountryPage"),
    {
      ssr: false,
    }
  );

  return (
    <ThemeProvider theme={theme || light}>
      <Header toggleTheme={toggleTheme} />
      <Container>
        <BackArrow />
        <CountryInfos />
      </Container>

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Country;
