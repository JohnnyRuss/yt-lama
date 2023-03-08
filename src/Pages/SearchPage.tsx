/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useAppDispatch } from "../store/hooks";
import { searchVideos } from "../store/reducers/thunks/videoSlice.thunks";

import Search from "../components/Search/Search";

const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { state } = useLocation();

  useEffect(() => {
    dispatch(
      searchVideos({
        partial: state.partial ? state.partial : "",
        full: state.full ? state.full : "",
      })
    );
  }, [state]);

  return <Search />;
};

export default SearchPage;
