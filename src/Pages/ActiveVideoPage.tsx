/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useIsAuthorised } from "../hooks";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import {
  getVideo,
  getRelatedVideos,
  getBookmarksIds,
  addViewToVideo,
} from "../store/reducers/thunks/videoSlice.thunks";

import ActiveVideo from "../components/ActiveVideo/ActiveVideo";

const ActiveVideoPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const isAuthoriosed = useIsAuthorised();

  const { videoId } = useParams();
  const { videoIsLoading, video } = useAppSelector(({ videos }) => ({
    videoIsLoading: videos.loadingStatus.loading,
    video: videos.video,
  }));

  useEffect(() => {
    videoId && dispatch(getVideo({ id: videoId }));
    isAuthoriosed && dispatch(getBookmarksIds());
  }, [videoId]);

  useEffect(() => {
    if (!videoIsLoading && video)
      dispatch(getRelatedVideos({ tags: video.tags.join(",") }));
  }, [videoIsLoading, videoId]);

  useEffect(() => {
    videoId && dispatch(addViewToVideo({ videoId }));
  }, []);

  return <ActiveVideo />;
};

export default ActiveVideoPage;
