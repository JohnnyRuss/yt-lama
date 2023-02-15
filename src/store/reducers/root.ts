import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import videosReducer from "./videosSlice";
import authReducer from "./authSlice";

const persistedUserConfig = {
  key: "yt_user",
  version: 1,
  storage,
};

const persistedUser = persistReducer(persistedUserConfig, authReducer);

const root = combineReducers({
  videos: videosReducer,
  auth: persistedUser,
});

export default root;
