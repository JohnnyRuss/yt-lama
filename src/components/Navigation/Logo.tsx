import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/home" className="logo-box">
      <figure className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
          alt=""
        />
      </figure>
      <h1 className="logo-text">Tuber</h1>
    </Link>
  );
};

export default Logo;
