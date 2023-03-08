import React from "react";
import formatDate from "../../../lib/formatDate";
import { CommentT } from "../../../interface/DB/comment.types";

interface CommentBodyType {
  comm: CommentT;
}

const CommentBody: React.FC<CommentBodyType> = ({ comm }) => {
  return (
    <>
      <figure className="comment-item__author-fig">
        <img src={comm.author.avatar} alt="user" />
      </figure>
      <div className="comment-item__details-box">
        <div className="comment-item__author-and--date">
          <span className="comment-item__author-name">
            {comm.author.username}
          </span>
          <span className="comment-item__date-creation">
            {formatDate(comm.createdAt, "verbal")}
          </span>
        </div>
        <p className="comment-item__text">{comm.description}</p>
      </div>
    </>
  );
};

export default CommentBody;
