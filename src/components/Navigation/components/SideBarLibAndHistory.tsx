import React from "react";
import { Link } from "react-router-dom";

import { MdVideoLibrary, MdHistory } from "react-icons/md";
import * as Styled from "./styles/SideBarFeaturesList.styled";

interface SideBarLibAndHistoryType {}

const SideBarLibAndHistory: React.FC<SideBarLibAndHistoryType> = () => {
  return (
    <Styled.SideBarFeaturesList>
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
    </Styled.SideBarFeaturesList>
  );
};

export default SideBarLibAndHistory;
