import React from "react";
import { Link } from "react-router-dom";

import { BiVideoPlus } from "react-icons/bi";
import * as Styled from "./styles/TopNavAddVideoAndUserFig.styled";

interface TopNavAddVideoAndUserFigType {
  avatar: string;
  username: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopNavAddVideoAndUserFig: React.FC<TopNavAddVideoAndUserFigType> = ({
  avatar,
  username,
  setOpenModal,
}) => {
  return (
    <Styled.TopNavAddVideoAndUserFig>
      <button onClick={() => setOpenModal(true)}>
        <BiVideoPlus />
      </button>

      <Link to="/profile">
        <figure className="user-fig">
          <img src={avatar} alt={username} loading="lazy" />
        </figure>
      </Link>
    </Styled.TopNavAddVideoAndUserFig>
  );
};

export default TopNavAddVideoAndUserFig;
