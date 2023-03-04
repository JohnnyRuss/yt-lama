import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

import { TopNavContainer } from "./Nav.styles";
import { BsSearch } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import UploadModal from "./UploadModal";
import { useIsAuthorised } from "../../hooks";

const TopNav: React.FC = () => {
  const isAuthorised = useIsAuthorised();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const { avatar, username } = useAppSelector(({ auth }) => ({
    avatar: auth.user?.avatar,
    username: auth.user?.username,
  }));

  return (
    <>
      <TopNavContainer>
        <div className="logo-box">
          <figure className="logo">
            <img
              src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
              alt=""
            />
          </figure>
          <h1 className="logo-text">Tuber</h1>
        </div>

        <form action="" className="search-form">
          <div className="search-wrapper">
            <input type="text" placeholder="search" />
            <button>
              <BsSearch />
            </button>
          </div>
        </form>

        {isAuthorised && (
          <div className="nav-user__add-video">
            <button onClick={() => setOpenModal(true)}>
              <BiVideoPlus />
            </button>
            <Link to="/profile">
              <figure className="user-fig">
                <img src={avatar} alt={username} />
              </figure>
            </Link>
          </div>
        )}
      </TopNavContainer>
      {openModal && <UploadModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default TopNav;
