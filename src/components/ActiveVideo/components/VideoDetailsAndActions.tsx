import React from "react";
import { useAppSelector } from "../../../store/hooks";

import VideoActions from "./VideoActions";
import AuthorAndSubscribe from "./AuthorAndSubscribe";
import ViewsAndDate from "./ViewsAndDate";

const VideoDetailsAndActions: React.FC = () => {
  const { title, description } = useAppSelector(({ videos }) => ({
    title: videos.video?.title,
    description: videos.video?.description,
  }));

  return (
    <>
      <h4 className="video-title">{title}</h4>
      <div className="view--actions__container">
        <ViewsAndDate />
        <VideoActions />
      </div>
      <AuthorAndSubscribe />
      <blockquote className="video-description">{description}</blockquote>
    </>
  );
};

export default VideoDetailsAndActions;
