import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideoT } from "../../interface/DB/video.types";
import {
  KnownErrorT,
  ReactOnVideoResT,
  getRandomVideos,
  getTrendingVideos,
  getSubscribedVideos,
  getVideo,
  getRelatedVideos,
  likeVideo,
  dislikeVideo,
  uploadVideo,
} from "./thunks/videoSlice.thunks";

interface StateT {
  loadingStatus: {
    loading: boolean;
    message: string;
    error: boolean;
  };
  relatedVideosLoadingStatus: {
    loading: boolean;
    message: string;
    error: boolean;
  };
  videos: VideoT[];
  video: VideoT | null;
}

const initialState: StateT = {
  loadingStatus: {
    error: false,
    loading: false,
    message: "",
  },
  relatedVideosLoadingStatus: {
    error: false,
    loading: false,
    message: "",
  },
  videos: [],
  video: null,
};

interface EncreaseChanleSubscribersNumT {
  userId: string;
}

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    encreaseChanelSubscribers(
      state,
      { payload: { userId } }: PayloadAction<EncreaseChanleSubscribersNumT>
    ) {
      if (state.video?.user._id !== userId) return;
      state.video.user.subscribers += 1;
    },

    decreaseChanelSubscribers(
      state,
      { payload: { userId } }: PayloadAction<EncreaseChanleSubscribersNumT>
    ) {
      if (state.video?.user._id !== userId) return;
      state.video.user.subscribers -= 1;
    },
  },
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
      )
      .addCase(getVideo.pending, (state, _) => {
        state.loadingStatus = {
          ...state.loadingStatus,
          loading: true,
        };
      })
      .addCase(
        getVideo.fulfilled,
        (state, { payload }: PayloadAction<VideoT>) => {
          state.video = payload;
          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
          };
        }
      )
      .addCase(
        getVideo.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {
          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
            error: true,
            message: payload?.message || "",
          };
        }
      )
      .addCase(getRelatedVideos.pending, (state, _) => {
        state.relatedVideosLoadingStatus = {
          ...state.loadingStatus,
          loading: true,
        };
      })
      .addCase(
        getRelatedVideos.fulfilled,
        (state, { payload }: PayloadAction<VideoT[]>) => {
          state.videos = payload;
          state.relatedVideosLoadingStatus = {
            ...state.loadingStatus,
            loading: false,
          };
        }
      )
      .addCase(
        getRelatedVideos.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {
          state.relatedVideosLoadingStatus = {
            ...state.loadingStatus,
            loading: false,
            error: true,
            message: payload?.message || "",
          };
        }
      )
      .addCase(likeVideo.pending, (state, _) => {})
      .addCase(
        likeVideo.fulfilled,
        (
          state,
          { payload: { likes, dislikes } }: PayloadAction<ReactOnVideoResT>
        ) => {
          if (state.video)
            state.video = {
              ...state.video,
              likes: likes,
              dislikes: dislikes,
            };
        }
      )
      .addCase(
        likeVideo.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {}
      )
      .addCase(dislikeVideo.pending, (state, _) => {})
      .addCase(
        dislikeVideo.fulfilled,
        (
          state,
          { payload: { likes, dislikes } }: PayloadAction<ReactOnVideoResT>
        ) => {
          if (state.video)
            state.video = {
              ...state.video,
              likes: likes,
              dislikes: dislikes,
            };
        }
      )
      .addCase(
        dislikeVideo.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {}
      )
      .addCase(uploadVideo.pending, (state, _) => {})
      .addCase(
        uploadVideo.fulfilled,
        (state, { payload }: PayloadAction<VideoT>) => {
          // state.videos.unshift(payload);
        }
      )
      .addCase(
        uploadVideo.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {}
      );
  },
});

export default videosSlice.reducer;
export const { encreaseChanelSubscribers, decreaseChanelSubscribers } =
  videosSlice.actions;
