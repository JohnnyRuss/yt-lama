/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import { ThemeProvider, DefaultTheme, Mode } from "styled-components";
import { BaseTheme, LightTheme, DarkTheme } from "./styles/Theme.styles";
import { AppStyles } from "./styles/App.styles";

interface ProviderT {
  children: React.ReactNode;
}

interface ContextT {
  changeTheme: () => void;
}

interface AppThemeT {
  theme: DefaultTheme;
  mode: Mode;
}

export const ThemeContext = createContext<ContextT>({
  changeTheme: () => {},
});

const Theme: React.FC<ProviderT> = ({ children }) => {
  const [theme, setTheme] = useState<AppThemeT>({
    theme: BaseTheme,
    mode: "light",
  });

  function changeTheme() {
    let mode: AppThemeT = {
      theme: BaseTheme,
      mode: "light",
    };

    mode =
      theme.mode === "light"
        ? {
            theme: DarkTheme,
            mode: "dark",
          }
        : theme.mode === "dark"
        ? {
            theme: LightTheme,
            mode: "light",
          }
        : {
            theme: BaseTheme,
            mode: "light",
          };

    setTheme(mode);
    localStorage.setItem("yt_lama_theme", mode.mode);
  }

  useEffect(() => {
    const mode: Mode | string =
      localStorage.getItem("yt_lama_theme") || theme.mode;

    mode &&
      setTheme(
        mode === "light"
          ? {
              theme: LightTheme,
              mode: "light",
            }
          : {
              theme: DarkTheme,
              mode: "dark",
            }
      );
  }, []);

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
