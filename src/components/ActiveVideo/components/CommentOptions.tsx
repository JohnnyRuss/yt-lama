import React from "react";

import { MdDelete, MdUpdate } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

interface CommentOptionsType {
  activeCommentOption: string;
  commentId: string;
  setActiveCommentOption: () => void;
  deleteCommentHandler: () => void;
  updateCommentHandler: () => void;
}

const CommentOptions: React.FC<CommentOptionsType> = ({
  setActiveCommentOption,
  activeCommentOption,
  commentId,
  deleteCommentHandler,
  updateCommentHandler,
}) => {
  return (
    <div className="options-box">
      <button onClick={setActiveCommentOption}>
        <BsThreeDots />
      </button>
      {activeCommentOption === commentId && (
        <div className="options-box__list">
          <button
            className="options__action-btn"
            onClick={updateCommentHandler}
          >
            <span>
              <MdUpdate />
            </span>
            <span>update comment</span>
          </button>
          <button
            className="options__action-btn"
            onClick={deleteCommentHandler}
          >
            <span>
              <MdDelete />
            </span>
            <span>delete comment</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentOptions;
