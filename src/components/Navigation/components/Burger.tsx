import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import * as Styled from "./styles/Burger.styled";

interface BurgerType {}

const Burger: React.FC<BurgerType> = () => {
  return (
    <>
      <Styled.BurgerLabel htmlFor="burger" className="burger-btn">
        <GiHamburgerMenu />
      </Styled.BurgerLabel>
      <Styled.Burger
        type="checkbox"
        name="burger"
        id="burger"
        data-burger
        hidden
      />
    </>
  );
};

export default Burger;
