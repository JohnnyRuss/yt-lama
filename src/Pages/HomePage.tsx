/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { getRandomVideos } from "../store/reducers/thunks/videoSlice.thunks";

import Home from "../components/Home/Home";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRandomVideos());
  }, []);

  return <Home />;
};

export default HomePage;
