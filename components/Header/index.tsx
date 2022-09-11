import Link from "next/link";
import { Moon, Sun } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { StyledHeader, StyledHeaderContainer } from "./styles";

interface HeaderThemeProps {
  toggleTheme(): void;
}

export const Header = ({ toggleTheme }: HeaderThemeProps) => {
  const actualTheme = useContext(ThemeContext);

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Link href={"/"}>
          <a>
            <h1>Where in the world?</h1>
          </a>
        </Link>
        {actualTheme.title === "light" ? (
          <button onClick={() => toggleTheme()}>
            <Moon size={20} weight="regular" />
            Dark Mode
          </button>
        ) : (
          <button onClick={() => toggleTheme()}>
            <Moon weight="fill" size={20} />
            Dark Mode
          </button>
        )}
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
