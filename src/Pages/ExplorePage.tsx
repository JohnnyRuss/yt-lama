/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useAppDispatch } from "../store/hooks";
import { useScrollUp } from "../hooks";
import { getTrendingVideos } from "../store/reducers/thunks/videoSlice.thunks";

import Explore from "../components/Explore/Explore";

const ExplorePage: React.FC = () => {
  useScrollUp();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrendingVideos());
  }, []);

  return <Explore />;
};

export default ExplorePage;
