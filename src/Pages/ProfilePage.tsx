/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { getUserVideos } from "../store/reducers/thunks/videoSlice.thunks";

import Profile from "../components/Profile/Profile";

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserVideos());
  }, []);

  return <Profile />;
};

export default ProfilePage;
