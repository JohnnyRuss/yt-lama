import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav.styles";

import { ThemeContext } from "../../Theme";

import { AiFillHome } from "react-icons/ai";
import {
  MdExplore,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdLibraryMusic,
  MdOutlineSportsBasketball,
  MdMovieFilter,
  MdOutlineLiveTv,
} from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { ImNewspaper } from "react-icons/im";
import { FaRegUserCircle } from "react-icons/fa";

const Navigation: React.FC = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <Nav>
      <ul className="features-list">
        <li>
          <Link to="" className="list-item">
            <span className="icon-box">
              <AiFillHome />
            </span>
            <span>home</span>
          </Link>
        </li>
        <li>
          <Link to="" className="list-item">
            <span className="icon-box">
              <MdExplore />
            </span>
            <span>explore</span>
          </Link>
        </li>
        <li>
          <Link to="" className="list-item">
            <span className="icon-box">
              <MdSubscriptions />
            </span>
            <span>subscribtions</span>
          </Link>
        </li>
      </ul>
      <ul className="features-list">
        <li>
          <Link to="" className="list-item">
            <span className="icon-box">
              <MdVideoLibrary />
            </span>
            <span>library</span>
          </Link>
        </li>
        <li>
          <Link to="" className="list-item">
            <span className="icon-box">
              <MdHistory />
            </span>
            <span>history</span>
          </Link>
        </li>
      </ul>
      <div className="auth-box">
        <p>Sign in to like videos, comment, and subscribe.</p>
        <Link to="/auth/login" className="sign-btn">
          <span className="sign-icon--box">
            <FaRegUserCircle />
          </span>
          <span>sign in</span>
        </Link>
      </div>
      <ul className="features-list">
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
      </ul>
      <button onClick={changeTheme}>change theme</button>
    </Nav>
  );
};

export default Navigation;
