import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { useAuthQuery } from "../../../hooks";

import { FaRegUserCircle } from "react-icons/fa";
import * as Styled from "./styles/SideBarUserAuthAndLogout.styled";

interface SideBarUserAuthAndLogoutT {
  isAuthorised: boolean;
}

const SideBarUserAuthAndLogout: React.FC<SideBarUserAuthAndLogoutT> = ({
  isAuthorised,
}) => {
  const user = useAppSelector(({ auth }) => auth.user);
  const { userLogoutQuery } = useAuthQuery();

  const ButtonContent = (label: string) => (
    <>
      <span className="sign-icon--box">
        <FaRegUserCircle />
      </span>
      <span>{label}</span>
    </>
  );

  return (
    <Styled.SideBarUserAuthAndLogout>
      {isAuthorised && (
        <>
          <div className="authorised-user--box">
            <figure className="authorised-user--fig">
              <img src={user?.avatar} alt={user?.username} />
            </figure>
            <div className="authorised-user__info--box">
              <span>{user?.username}</span>
              <span className="authorised-user__subscribers">
                {user?.subscribers} subscribers
              </span>
            </div>
          </div>
          <button className="sign-btn" onClick={userLogoutQuery}>
            {ButtonContent("log out")}
          </button>
        </>
      )}
      {!isAuthorised && (
        <>
          <p>Sign in to like videos, comment, and subscribe.</p>
          <Link to="/auth/login" className="sign-btn">
            {ButtonContent("sign in")}
          </Link>
        </>
      )}
    </Styled.SideBarUserAuthAndLogout>
  );
};

export default SideBarUserAuthAndLogout;
