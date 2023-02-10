import React from "react";

import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { MdOutlineAddCircle } from "react-icons/md";

interface VideoActionsType {}

const VideoActions: React.FC<VideoActionsType> = (props) => {
  return (
    <div className="view--actions__container__actions">
      <div className="actionField">
        <button className="action-btn">
          <AiOutlineLike />
        </button>
        <span className="label">123</span>
      </div>
      <div className="actionField">
        <button className="action-btn">
          <AiOutlineDislike />
        </button>
        <span className="label">dislike</span>
      </div>
      <div className="actionField">
        <button className="action-btn">
          <BiShare />
        </button>
        <span className="label">share</span>
      </div>
      <div className="actionField">
        <button className="action-btn">
          <MdOutlineAddCircle />
        </button>
        <span className="label">save</span>
      </div>
    </div>
  );
};

export default VideoActions;
