import React from "react";
import { Link } from "react-router-dom";

import {
  MdLibraryMusic,
  MdOutlineSportsBasketball,
  MdMovieFilter,
  MdOutlineLiveTv,
} from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { ImNewspaper } from "react-icons/im";
import * as Styled from "./styles/SideBarFeaturesList.styled";

interface SideBarChannelsType {}

const SideBarChannels: React.FC<SideBarChannelsType> = () => {
  return (
    <Styled.SideBarFeaturesList>
      <li>
        <Link to="" className="list-item">
          <span className="icon-box">
            <MdLibraryMusic />
          </span>
          <span>music</span>
        </Link>
      </li>
      <li>
        <Link to="" className="list-item">
          <span className="icon-box">
            <MdOutlineSportsBasketball />
          </span>
          <span>sports</span>
        </Link>
      </li>
      <li>
        <Link to="" className="list-item">
          <span className="icon-box">
            <IoLogoGameControllerB />
          </span>
          <span>gaming</span>
        </Link>
      </li>
      <li>
        <Link to="" className="list-item">
          <span className="icon-box">
            <MdMovieFilter />
          </span>
          <span>movies</span>
        </Link>
      </li>
      <li>
        <Link to="" className="list-item">
          <span className="icon-box">
            <ImNewspaper />
          </span>
          <span>news</span>
        </Link>
      </li>
      <li>
        <Link to="" className="list-item">
          <span className="icon-box">
            <MdOutlineLiveTv />
          </span>
          <span>live</span>
        </Link>
      </li>
    </Styled.SideBarFeaturesList>
  );
};

export default SideBarChannels;
