import React from "react";

import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { useIsAuthorised } from "../../../hooks";

import { controllAuthModal } from "../../../store/reducers/authSlice";

import {
  subscribeUser,
  unsubscribeUser,
} from "../../../store/reducers/thunks/userSlice.thunks";

import { MdNotificationsActive, MdNotifications } from "react-icons/md";

const AuthorAndSubscribe: React.FC = () => {
  const dispatch = useAppDispatch();

  const isAuthorised = useIsAuthorised();

  const { avatar, username, subscribers, userId } = useAppSelector(
    ({ videos }) => ({
      avatar: videos.video?.user.avatar,
      username: videos.video?.user.username,
      subscribers: videos.video?.user.subscribers,
      userId: videos.video?.user._id,
    })
  );

  const subscribedUsers = useAppSelector(
    ({ auth }) => auth.user?.subscribedUsers
  );

  function isSubscribedUser() {
    return userId && subscribedUsers?.includes(userId);
  }

  function handleSubscribe(e: React.MouseEvent) {
    if (!isAuthorised) return dispatch(controllAuthModal(true));

    isSubscribedUser()
      ? dispatch(unsubscribeUser({ userId: userId || "" }))
      : dispatch(subscribeUser({ userId: userId || "" }));
  }

  return (
    <div className="channel-subscribe__container">
      <div className="channel-subscribe__container__chanel">
        <figure className="chanel-fig">
          <img src={avatar} alt={username} />
        </figure>
        <div className="chanel-info">
          <span>{username}</span>
          <span>{subscribers} subscribers</span>
        </div>
      </div>
      
      <button
        onClick={handleSubscribe}
        className={`channel-subscribe__container__subscribe ${
          isSubscribedUser() ? "subscribed" : ""
        }`}
      >
        {isSubscribedUser() ? (
          <>
            subscribed <MdNotificationsActive />
          </>
        ) : (
          <>
            subscribe <MdNotifications />
          </>
        )}
      </button>
    </div>
  );
};

export default AuthorAndSubscribe;
