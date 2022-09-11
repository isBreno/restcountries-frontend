import type { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { Container, GlobalStyle } from "../styles/global";
import dark from "../themes/dark";
import light from "../themes/light";
import { HomeBoard } from "../components/HomeBoard";
import { useEffect, useState } from "react";
import usePersistedTheme from "../utils/usePersistedTheme";

const Home: NextPage = () => {
    const [theme, setTheme] = usePersistedTheme('theme', light);
    const [render, setRender] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setRender(true)
      }, 500)
    }, [])

    const toggleTheme = () => {
      setTheme(theme.title === "light" ? dark : light);
    };
  return (
    <ThemeProvider theme={theme || light}>
      {render && (
        <>
          <Header toggleTheme={toggleTheme} />
          <Container>
            <HomeBoard />
          </Container>
        </>
      )}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Home;
