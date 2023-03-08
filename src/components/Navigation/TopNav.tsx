import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { useIsAuthorised } from "../../hooks";

import { TopNavContainer } from "./Nav.styles";
import UploadModal from "./UploadModal";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { AuthForm } from "../Layouts";

import { BiVideoPlus } from "react-icons/bi";

const TopNav: React.FC = () => {
  const isAuthorised = useIsAuthorised();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const { avatar, username, openAuthPopUp } = useAppSelector(({ auth }) => ({
    avatar: auth.user?.avatar,
    username: auth.user?.username,
    openAuthPopUp: auth.openAuthPopUp,
  }));

  return (
    <>
      <TopNavContainer>
        <Logo />

        <SearchBox />

        {isAuthorised && (
          <div className="nav-user__add-video">
            <button onClick={() => setOpenModal(true)}>
              <BiVideoPlus />
            </button>
            <Link to="/profile">
              <figure className="user-fig">
                <img src={avatar} alt={username} loading="lazy" />
              </figure>
            </Link>
          </div>
        )}
      </TopNavContainer>

      {openModal && <UploadModal setOpenModal={setOpenModal} />}

      {openAuthPopUp && <AuthForm isModal={true} />}
    </>
  );
};

export default TopNav;
