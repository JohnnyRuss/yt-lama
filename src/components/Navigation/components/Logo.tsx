import React from "react";
import { Link } from "react-router-dom";

import * as Styled from "./styles/Logo.styled";

const Logo: React.FC = () => {
  return (
    <Styled.Logo>
      <Link to="/home" className="logo-box">
        <figure className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
            alt=""
          />
        </figure>
        <h1 className="logo-text">Tuber</h1>
      </Link>
    </Styled.Logo>
  );
};

export default Logo;
