import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  VideoT,
  VideoLabelT,
  VideoTitlesT,
} from "../../interface/DB/video.types";

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
  getBookmarks,
  saveVideo,
  unsaveVideo,
  getBookmarksIds,
  getUserVideos,
  deleteVideo,
  getVideosTitles,
  searchVideos,
  addViewToVideo,
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
  uploadProgress: {
    proccess: "passive" | "inProccess" | "success";
  };
  videos: VideoLabelT[];
  video: VideoT | null;
  bookmarksIds: string[];
  titles: VideoTitlesT[];
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
  uploadProgress: {
    proccess: "passive",
  },
  videos: [],
  video: null,
  bookmarksIds: [],
  titles: [],
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

    resetUploadProgress(state) {
      state.uploadProgress.proccess = "passive";
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
        (state, { payload }: PayloadAction<VideoLabelT[]>) => {
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
        (state, { payload }: PayloadAction<VideoLabelT[]>) => {
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
        (state, { payload }: PayloadAction<VideoLabelT[]>) => {
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
      .addCase(getUserVideos.pending, (state, _) => {
        state.loadingStatus = {
          ...state.loadingStatus,
          loading: true,
        };
      })
      .addCase(
        getUserVideos.fulfilled,
        (state, { payload }: PayloadAction<VideoLabelT[]>) => {
          state.videos = payload;

          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
          };
        }
      )
      .addCase(
        getUserVideos.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {
          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
            error: true,
            message: payload?.message || "",
          };
        }
      )
      .addCase(getBookmarks.pending, (state, _) => {
        state.loadingStatus = {
          ...state.loadingStatus,
          loading: true,
        };
      })
      .addCase(
        getBookmarks.fulfilled,
        (state, { payload }: PayloadAction<VideoLabelT[]>) => {
          state.videos = payload;

          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
          };
        }
      )
      .addCase(
        getBookmarks.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {
          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
            error: true,
            message: payload?.message || "",
          };
        }
      )
      .addCase(getBookmarksIds.pending, (state, _) => {})
      .addCase(
        getBookmarksIds.fulfilled,
        (state, { payload }: PayloadAction<string[]>) => {
          state.bookmarksIds = payload;
        }
      )
      .addCase(
        getBookmarksIds.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {}
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
      .addCase(deleteVideo.pending, (state, _) => {})
      .addCase(
        deleteVideo.fulfilled,
        (state, { payload }: PayloadAction<string>) => {
          state.videos = state.videos.filter((v) => v._id !== payload);
        }
      )
      .addCase(
        deleteVideo.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {}
      )
      .addCase(getRelatedVideos.pending, (state, _) => {
        state.relatedVideosLoadingStatus = {
          ...state.loadingStatus,
          loading: true,
        };
      })
      .addCase(
        getRelatedVideos.fulfilled,
        (state, { payload }: PayloadAction<VideoLabelT[]>) => {
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
      .addCase(saveVideo.pending, (state, _) => {})
      .addCase(
        saveVideo.fulfilled,
        (
          state,
          { payload: { videoId } }: PayloadAction<{ videoId: string }>
        ) => {
          state.bookmarksIds.push(videoId);
        }
      )
      .addCase(
        saveVideo.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {}
      )
      .addCase(unsaveVideo.pending, (state, _) => {})
      .addCase(
        unsaveVideo.fulfilled,
        (
          state,
          { payload: { videoId } }: PayloadAction<{ videoId: string }>
        ) => {
          state.videos = state.videos.filter((video) => video._id !== videoId);
          state.bookmarksIds = state.bookmarksIds.filter(
            (bk) => bk !== videoId
          );
        }
      )
      .addCase(
        unsaveVideo.rejected,
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
      .addCase(uploadVideo.pending, (state, _) => {
        state.uploadProgress.proccess = "inProccess";
      })
      .addCase(
        uploadVideo.fulfilled,
        (state, { payload }: PayloadAction<VideoLabelT>) => {
          state.videos.unshift(payload);
          state.uploadProgress.proccess = "success";
        }
      )
      .addCase(
        uploadVideo.rejected,
        (state, { payload }: PayloadAction<KnownErrorT>) => {
          state.uploadProgress.proccess = "passive";
        }
      )
      .addCase(getVideosTitles.pending, (state) => {})
      .addCase(
        getVideosTitles.fulfilled,
        (state, { payload }: PayloadAction<VideoTitlesT[]>) => {
          state.titles = payload;
        }
      )
      .addCase(getVideosTitles.rejected, (state) => {})
      .addCase(searchVideos.pending, (state) => {})
      .addCase(
        searchVideos.fulfilled,
        (state, { payload }: PayloadAction<VideoLabelT[]>) => {
          state.videos = payload;
        }
      )
      .addCase(searchVideos.rejected, (state) => {})
      .addCase(addViewToVideo.pending, (state) => {})
      .addCase(addViewToVideo.fulfilled, (state) => {
        if (state.video) state.video.views += 1;
      })
      .addCase(addViewToVideo.rejected, (state) => {});
  },
});

export default videosSlice.reducer;
export const {
  encreaseChanelSubscribers,
  decreaseChanelSubscribers,
  resetUploadProgress,
} = videosSlice.actions;
