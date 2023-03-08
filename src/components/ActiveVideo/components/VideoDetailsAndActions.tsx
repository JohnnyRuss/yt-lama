import React, { useState } from "react";
import { useAppSelector } from "../../../store/hooks";

import VideoActions from "./VideoActions";
import AuthorAndSubscribe from "./AuthorAndSubscribe";
import ViewsAndDate from "./ViewsAndDate";

const VideoDetailsAndActions: React.FC = () => {
  const { title, description } = useAppSelector(({ videos }) => ({
    title: videos.video?.title,
    description: videos.video?.description,
  }));

  const descriptionWordCount = description?.split(" ").length;

  const [showAllDescription, setShowAllDescription] = useState<boolean>(
    descriptionWordCount && descriptionWordCount > 50 ? false : true
  );

  return (
    <>
      <h4 className="video-title">{title}</h4>
      <div className="view--actions__container">
        <ViewsAndDate />
        <VideoActions />
      </div>
      <AuthorAndSubscribe />
      <blockquote className="video-description">
        {!showAllDescription ? (
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
        ) : (
          description
        )}
      </blockquote>
    </>
  );
};

export default VideoDetailsAndActions;
