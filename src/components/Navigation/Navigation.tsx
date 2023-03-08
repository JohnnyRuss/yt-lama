import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useIsAuthorised } from "../../hooks";

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
import { AiFillHome } from "react-icons/ai";
import { IoLogoGameControllerB } from "react-icons/io";
import { ImNewspaper, ImBookmarks } from "react-icons/im";
import { BiSun, BiMoon } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeContext } from "../../Theme";
import { Nav, Burger, BurgerLabel } from "./Nav.styles";
import UserAuthAndLogout from "./UserAuthAndLogout";

const Navigation: React.FC = () => {
  const { changeTheme, mode } = useContext(ThemeContext);
  const isAuthorised = useIsAuthorised();

  return (
    <>
      <BurgerLabel htmlFor="burger" className="burger-btn">
        <GiHamburgerMenu />
      </BurgerLabel>
      <Burger type="checkbox" name="burger" id="burger" hidden />
      <Nav className="nav">
        <ul className="features-list">
          <li>
            <Link to="/home" className="list-item">
              <span className="icon-box">
                <AiFillHome />
              </span>
              <span>home</span>
            </Link>
          </li>
          <li>
            <Link to="/explore" className="list-item">
              <span className="icon-box">
                <MdExplore />
              </span>
              <span>explore</span>
            </Link>
          </li>
          {isAuthorised && (
            <>
              <li>
                <Link to="/subscribtions" className="list-item">
                  <span className="icon-box">
                    <MdSubscriptions />
                  </span>
                  <span>subscribtions</span>
                </Link>
              </li>
              <li>
                <Link to="/bookmarks" className="list-item">
                  <span className="icon-box">
                    <ImBookmarks />
                  </span>
                  <span>bookmarks</span>
                </Link>
              </li>
            </>
          )}
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

        <button onClick={changeTheme} className="theme-btn">
          <span>{mode === "dark" ? <BiMoon /> : <BiSun />}</span>
          <span>change to {mode === "dark" ? "day" : "night"} mode</span>
        </button>

        <UserAuthAndLogout isAuthorised={isAuthorised} />

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
      </Nav>
    </>
  );
};

export default Navigation;
