/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useAppDispatch } from "../store/hooks";
import { useRestrictUnauthorised, useScrollUp } from "../hooks";
import { getSubscribedVideos } from "../store/reducers/thunks/videoSlice.thunks";

import Subscribtions from "../components/Subscribtions/Subscribtions";

const SubscribtionsPage: React.FC = () => {
  useScrollUp();

  useRestrictUnauthorised();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSubscribedVideos());
  }, []);

  return <Subscribtions />;
};

export default SubscribtionsPage;
