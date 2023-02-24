/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  getVideo,
  getRelatedVideos,
} from "../store/reducers/thunks/videoSlice.thunks";

import ActiveVideo from "../components/ActiveVideo/ActiveVideo";

const ActiveVideoPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { videoId } = useParams();
  const { videoIsLoading, video } = useAppSelector(({ videos }) => ({
    videoIsLoading: videos.loadingStatus.loading,
    video: videos.video,
  }));

  useEffect(() => {
    videoId && dispatch(getVideo({ id: videoId }));
  }, [videoId]);

  useEffect(() => {
    if (!videoIsLoading && video)
      dispatch(getRelatedVideos({ tags: video.tags.join(",") }));
  }, [videoIsLoading]);

  return <ActiveVideo />;
};

export default ActiveVideoPage;
