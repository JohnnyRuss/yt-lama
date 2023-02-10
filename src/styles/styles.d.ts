import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: Mode;
    colors: ColorsT;
    size: FontSize;
    font: Font;
  }

  type Mode = "dark" | "light";

  interface ColorsT {
    txt: "#181818" | "#fff";
    bg: "#fff" | "#181818";
    black: "#181818";
    blackSecondary: "#202020";
    white: "#fff";
    darkGray: "#373737";
    gray: "#979797";
    softGray: "#f5f5f5";
    blue: "#3ea6ff";
  }

  interface FontSize {
    xxsm: "1rem";
    xsm: "1.2rem";
    sm: "1.4rem";
    base: "1.6rem";
    bg: "1.8rem";
  }

  interface Font {
    thin: 300;
    regullar: 400;
    medium: 500;
    bold: 700;
  }
}
