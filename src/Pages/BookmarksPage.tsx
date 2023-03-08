/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useRestrictUnauthorised } from "../hooks";
import { useAppDispatch } from "../store/hooks";
import { getBookmarks } from "../store/reducers/thunks/videoSlice.thunks";

import Bookmarks from "../components/Bookmarks/Bookmarks";

const BookmarksPage: React.FC = () => {
  useRestrictUnauthorised();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBookmarks());
  }, []);

  return <Bookmarks />;
};

export default BookmarksPage;
