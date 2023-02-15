import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideoT } from "../../interface/DB/video.types";
import {
  KnownErrorT,
  getRandomVideos,
  getTrendingVideos,
  getSubscribedVideos,
} from "./thunks/videoSlice.thunks";

interface StateT {
  loadingStatus: {
    loading: boolean;
    message: string;
    error: boolean;
  };
  videos: VideoT[];
}

const initialState: StateT = {
  loadingStatus: {
    error: false,
    loading: false,
    message: "",
  },
  videos: [],
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRandomVideos.pending, (state, _) => {
        state.loadingStatus = {
          ...state.loadingStatus,
          loading: true,
        };
      })
      .addCase(
        getRandomVideos.fulfilled,
        (state, { payload }: PayloadAction<VideoT[]>) => {
          state.videos = payload;

          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
          };
        }
      )
      .addCase(
        getRandomVideos.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {
          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
            error: true,
            message: payload?.message || "",
          };
        }
      )
      .addCase(getTrendingVideos.pending, (state, _) => {
        state.loadingStatus = {
          ...state.loadingStatus,
          loading: true,
        };
      })
      .addCase(
        getTrendingVideos.fulfilled,
        (state, { payload }: PayloadAction<VideoT[]>) => {
          state.videos = payload;

          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
          };
        }
      )
      .addCase(
        getTrendingVideos.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {
          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
            error: true,
            message: payload?.message || "",
          };
        }
      )
      .addCase(getSubscribedVideos.pending, (state, _) => {
        state.loadingStatus = {
          ...state.loadingStatus,
          loading: true,
        };
      })
      .addCase(
        getSubscribedVideos.fulfilled,
        (state, { payload }: PayloadAction<VideoT[]>) => {
          state.videos = payload;

          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
          };
        }
      )
      .addCase(
        getSubscribedVideos.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {
          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
            error: true,
            message: payload?.message || "",
          };
        }
      );
  },
});

export default videosSlice.reducer;
// export const {} = videosSlice.actions;
