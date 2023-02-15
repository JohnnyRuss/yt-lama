import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

import { VideoT } from "../../../interface/DB/video.types";

import { CardContainer } from "./card.styles";

interface CardType {
  video: VideoT;
}

const Card: React.FC<CardType> = ({ video }) => {
  return (
    <CardContainer>
      <Link to="/:id" className="feed-thumb">
        <figure className="thumb-fig">
          <img src={video.thumbnail} alt={video.title} />
        </figure>
        <div className="thumb-details">
          <figure className="thumb-channel__fig">
            <img src={video.user.avatar} alt={video.user.username} />
          </figure>
          <div className="thumb-identifier">
            <span className="thumb-identifier__title">{video.title}</span>
            <span className="thumb-identifier__channel">
              {video.user.username}
            </span>
            <div className="thumb-identifier__views">
              <div>
                <span>{video.views.toLocaleString()}</span>
                <span>&nbsp;views</span>
              </div>
              &nbsp;•&nbsp;
              <span>{format(new Date(video.createdAt || ""))}</span>
            </div>
          </div>
        </div>
      </Link>
    </CardContainer>
  );
};

export default Card;
