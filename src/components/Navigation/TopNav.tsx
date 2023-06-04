import React, { useState } from "react";

import { useAppSelector } from "../../store/hooks";
import { useIsAuthorised } from "../../hooks";

import { AuthForm } from "../Layouts";
import UploadModal from "./UploadModal";
import Logo from "./components/Logo";
import SearchBox from "./components/SearchBox";
import TopNavAddVideoAndUserFig from "./components/TopNavAddVideoAndUserFig";
import Burger from "./components/Burger";
import * as Styled from "./styles/TopNav.styled";

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
      <Styled.TopNav>
        <Burger />

        <Logo />

        <SearchBox />

        {isAuthorised && (
          <TopNavAddVideoAndUserFig
            avatar={avatar || ""}
            username={username || ""}
            setOpenModal={setOpenModal}
          />
        )}
      </Styled.TopNav>

      {openModal && <UploadModal setOpenModal={setOpenModal} />}

      {openAuthPopUp && <AuthForm isModal={true} />}
    </>
  );
};

export default TopNav;
