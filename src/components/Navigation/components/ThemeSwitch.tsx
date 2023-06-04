import React, { useContext } from "react";
import { ThemeContext } from "../../../Theme";

import { BiSun, BiMoon } from "react-icons/bi";
import * as Styled from "./styles/ThemeSwitch.styled";

const ThemeSwitch: React.FC = () => {
  const { changeTheme, mode } = useContext(ThemeContext);

  return (
    <Styled.ThemeSwitch onClick={changeTheme}>
      <span>{mode === "dark" ? <BiMoon /> : <BiSun />}</span>
      <span>change to {mode === "dark" ? "day" : "night"} mode</span>
    </Styled.ThemeSwitch>
  );
};

export default ThemeSwitch;
