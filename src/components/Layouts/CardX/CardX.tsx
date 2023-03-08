import React, { useState } from "react";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";

import { VideoLabelT } from "../../../interface/DB/video.types";

import { CardContainer } from "./cardX.styles";
import { PlayBack } from "../";

interface CardXType {
  video: VideoLabelT;
  className?: string;
  playBack?: boolean;
}

const CardX: React.FC<CardXType> = ({ video, className, playBack = true }) => {
  const [showPlayBack, setShowPlayBack] = useState<boolean>(false);

  return (
    <CardContainer className={className || ""}>
      <Link to={`/${video._id}`} className="thumb" key={video._id}>
        <figure
          className="thumb-fig"
          onMouseEnter={() => playBack && setShowPlayBack(true)}
          onMouseLeave={() => playBack && setShowPlayBack(false)}
          data-thumbx-fig
        >
          {!showPlayBack && <img src={video.thumbnail} alt={video.title} />}
          {showPlayBack && <PlayBack videoSrc={video.videoUrl} />}
        </figure>
        <div className="thumb-details">
          <p>{video.title}</p>
          <p className="thumb-chanel">info</p>
          <div className="thumb--views--date__container">
            <div>
              <span>{video.views.toLocaleString()}</span>
              <span>views</span>
            </div>
            <TimeAgo date={video.createdAt} />
          </div>
        </div>
      </Link>
    </CardContainer>
  );
};

export default CardX;
