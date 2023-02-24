/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";

import {
  getComments,
  addComment,
} from "../../../store/reducers/thunks/commentsSlice.thunks";
import formatDate from "../../../lib/formatDate";

import { CommentsContainer } from "../styles/comments.styles";

const Comments: React.FC = () => {
  const dispatch = useAppDispatch();

  const { videoId } = useParams();

  const { activeUserAvatar, activeUserName } = useAppSelector(({ auth }) => ({
    activeUserAvatar: auth.user?.avatar,
    activeUserName: auth.user?.username,
  }));

  const comments = useAppSelector(({ comments }) => comments.comments);

  const [comment, setComment] = useState<string>("");

  function handleComment() {
    dispatch(
      addComment({
        params: { videoId: videoId || "" },
        body: { description: comment },
      })
    );

    setComment("");
  }

  useEffect(() => {
    videoId && dispatch(getComments({ videoId }));
  }, [videoId]);

  return (
    <CommentsContainer>
      <div className="add-comment__field">
        <figure className="user-fig">
          <img src={activeUserAvatar} alt={activeUserName} />
        </figure>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleComment();
          }}
          className="text-field--form"
        >
          <textarea
            placeholder="Add a comment..."
            className="text-field"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleComment();
              }
            }}
          />
        </form>
      </div>
      <div className="comments-list">
        {comments.map((comm) => (
          <div className="comment-item" key={comm._id}>
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
          </div>
        ))}
      </div>
    </CommentsContainer>
  );
};

export default Comments;
