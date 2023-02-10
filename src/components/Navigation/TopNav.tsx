import React from "react";
import { TopNavContainer } from "./Nav.styles";
import { BsSearch } from "react-icons/bs";

const TopNav: React.FC = () => {
  return (
    <TopNavContainer>
      <div className="logo-box">
        <figure className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
            alt=""
          />
        </figure>
        <h1 className="logo-text">LamaTube</h1>
      </div>
      <form action="" className="search-form">
        <div className="search-wrapper">
          <input type="text" placeholder="search" />
          <button>
            <BsSearch />
          </button>
        </div>
      </form>
    </TopNavContainer>
  );
};

export default TopNav;
