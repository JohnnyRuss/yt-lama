import React from "react";

import { useIsAuthorised } from "../../hooks";
import UserAuthAndLogout from "./components/SideBarUserAuthAndLogout";

import SideBarUserBasedRoutes from "./components/SideBarUserBasedRoutes";
import SideBarLibAndHistory from "./components/SideBarLibAndHistory";
import SideBarChannels from "./components/SideBarChannels";
import ThemeSwitch from "./components/ThemeSwitch";
import * as Styled from "./styles/SideBar.styled";

const SideBar: React.FC = () => {
  const isAuthorised = useIsAuthorised();
  return (
    <Styled.SideBar data-sidebar>
      <SideBarUserBasedRoutes isAuthorised={isAuthorised} />

      <SideBarLibAndHistory />

      <ThemeSwitch />

      <UserAuthAndLogout isAuthorised={isAuthorised} />

      <SideBarChannels />
    </Styled.SideBar>
  );
};

export default SideBar;
