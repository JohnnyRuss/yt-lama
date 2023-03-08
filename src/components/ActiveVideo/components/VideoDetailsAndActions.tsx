/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";

import VideoActions from "./VideoActions";
import AuthorAndSubscribe from "./AuthorAndSubscribe";
import ViewsAndDate from "./ViewsAndDate";

const VideoDetailsAndActions: React.FC = () => {
  const { title, description } = useAppSelector(({ videos }) => ({
    title: videos.video?.title,
    description: videos.video?.description,
  }));

  const [showAllDescription, setShowAllDescription] = useState<boolean>(true);

  useEffect(() => {
    if (!description) return;
    const count = description?.split(" ").length;
    setShowAllDescription(count > 50 ? false : true);
  }, [description]);

  return (
    <>
      <h4 className="video-title">{title}</h4>
      <div className="view--actions__container">
        <ViewsAndDate />
        <VideoActions />
      </div>
      <AuthorAndSubscribe />
      <blockquote className="video-description">
        {showAllDescription ? (
          description
        ) : (
          <>
            {description?.split(" ").slice(0, 50).join(" ")}
            &nbsp;
            <button
              className="show-more--desc__btn"
              onClick={() => setShowAllDescription(true)}
            >
              show more
            </button>
          </>
        )}
      </blockquote>
    </>
  );
};

export default VideoDetailsAndActions;
