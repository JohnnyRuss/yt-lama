import { DefaultTheme } from "styled-components";

export const BaseTheme: DefaultTheme = {
  mode: "light",
  colors: {
    bg: "#fff",
    txt: "#181818",
    black: "#181818",
    blackSecondary: "#202020",
    white: "#fff",
    darkGray: "#373737",
    gray: "#979797",
    softGray: "#f5f5f5",
    blue: "#3ea6ff",
  },
  size: {
    xxsm: "1rem",
    xsm: "1.2rem",
    sm: "1.4rem",
    base: "1.6rem",
    bg: "1.8rem",
  },
  font: {
    thin: 300,
    regullar: 400,
    medium: 500,
    bold: 700,
  },
};

export const LightTheme: DefaultTheme = {
  ...BaseTheme,
  mode: "light",
  colors: {
    ...BaseTheme.colors,
    bg: "#fff",
    txt: "#181818",
  },
};

export const DarkTheme: DefaultTheme = {
  ...BaseTheme,
  mode: "dark",
  colors: {
    ...BaseTheme.colors,
    bg: "#181818",
    txt: "#fff",
  },
};
