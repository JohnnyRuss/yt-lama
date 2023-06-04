import { Link } from "react-router-dom";

import { MdExplore, MdSubscriptions } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { ImBookmarks } from "react-icons/im";
import * as Styled from "./styles/SideBarFeaturesList.styled";

interface SideBarUserBasedRoutesType {
  isAuthorised: boolean;
}

const SideBarUserBasedRoutes: React.FC<SideBarUserBasedRoutesType> = ({
  isAuthorised,
}) => {
  return (
    <Styled.SideBarFeaturesList>
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
    </Styled.SideBarFeaturesList>
  );
};

export default SideBarUserBasedRoutes;
