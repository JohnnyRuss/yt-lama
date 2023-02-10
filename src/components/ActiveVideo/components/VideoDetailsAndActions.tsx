import React from "react";

import VideoActions from "./VideoActions";
import AuthorAndSubscribe from "./AuthorAndSubscribe";
import ViewsAndDate from "./ViewsAndDate";

interface VideoDetailsType {}

const VideoDetailsAndActions: React.FC<VideoDetailsType> = (props) => {
  return (
    <>
      <h4 className="video-title">
        React Video Sharing App UI Design | Youtube UI Clone with React
      </h4>
      <div className="view--actions__container">
        <ViewsAndDate />
        <VideoActions />
      </div>
      <AuthorAndSubscribe />
      <blockquote className="video-description">
        Video uploading app design using React and Styled Components. Youtube
        clone design with hooks and functional component. React video player.
      </blockquote>
    </>
  );
};

export default VideoDetailsAndActions;
