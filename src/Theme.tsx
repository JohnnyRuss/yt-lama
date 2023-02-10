import { createContext, useState } from "react";
import { ThemeProvider, DefaultTheme, Mode } from "styled-components";
import { BaseTheme, LightTheme, DarkTheme } from "./styles/Theme.styles";
import { AppStyles } from "./styles/App.styles";

interface ProviderT {
  children: React.ReactNode;
}
interface ContextT {
  changeTheme: () => void;
}

export const ThemeContext = createContext<ContextT>({
  changeTheme: () => {},
});

const Theme: React.FC<ProviderT> = ({ children }) => {
  const [theme, setTheme] = useState<{ theme: DefaultTheme; mode: Mode }>({
    theme: BaseTheme,
    mode: "light",
  });

  function changeTheme() {
    theme.mode === "light"
      ? setTheme({
          theme: DarkTheme,
          mode: "dark",
        })
      : theme.mode === "dark"
      ? setTheme({
          theme: LightTheme,
          mode: "light",
        })
      : setTheme({
          theme: BaseTheme,
          mode: "light",
        });
  }

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      <ThemeProvider theme={theme.theme}>
        <AppStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
