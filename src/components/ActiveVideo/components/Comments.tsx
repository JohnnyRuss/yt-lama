/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { useIsAuthorised } from "../../../hooks";

import {
  getComments,
  addComment,
  deleteComment,
  updateComment,
} from "../../../store/reducers/thunks/commentsSlice.thunks";

import {
  CommentsContainer,
  ShowCommentsLabel,
  ShowCommentsCheckBox,
} from "../styles/comments.styles";
import CommentOptions from "./CommentOptions";
import WriteComment from "./WriteComment";
import CommentBody from "./CommentBody";

const Comments: React.FC = () => {
  const dispatch = useAppDispatch();

  const isAuthorised = useIsAuthorised();

  const { videoId } = useParams();

  const { activeUserAvatar, activeUserName, activeUserId } = useAppSelector(
    ({ auth }) => ({
      activeUserAvatar: auth.user?.avatar,
      activeUserName: auth.user?.username,
      activeUserId: auth.user?._id,
    })
  );

  const comments = useAppSelector(({ comments }) => comments.comments);

  const [comment, setComment] = useState<string>("");

  const [activeCommentOption, setActiveCommentOption] = useState<string>("");

  const [updatingCommentId, setUpdatingCommentId] = useState<string>("");

  function deleteCommentHandler(commentId: string) {
    dispatch(deleteComment({ commentId, videoId: videoId || "" }));
    setActiveCommentOption("");
  }

  function updateCommentHandler(text: string, commentID: string) {
    setUpdatingCommentId(commentID);
    setComment(text);
    setActiveCommentOption("");
  }

  function handleComment() {
    if (!comment) return;

    if (updatingCommentId)
      dispatch(
        updateComment({
          params: {
            commentId: updatingCommentId,
            videoId: videoId || "",
          },
          description: comment,
        })
      );
    else
      dispatch(
        addComment({
          params: { videoId: videoId || "" },
          body: { description: comment },
        })
      );

    setComment("");
    setUpdatingCommentId("");
  }

  useEffect(() => {
    videoId && dispatch(getComments({ videoId }));
  }, [videoId]);

  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <ShowCommentsLabel htmlFor="show-more" className="show-comments__label">
        {checked ? "hide comments" : "show comments"}
      </ShowCommentsLabel>
      <ShowCommentsCheckBox
        type="checkbox"
        hidden
        id="show-more"
        onChange={() => setChecked((prev) => !prev)}
      />

      <CommentsContainer className="comments--container">
        {isAuthorised && (
          <WriteComment
            activeUserAvatar={activeUserAvatar || ""}
            activeUserName={activeUserName || ""}
            handleComment={handleComment}
            comment={comment}
            setComment={setComment}
            updatingCommentId={updatingCommentId}
          />
        )}

        <div className="comments-list">
          {comments.map((comm) => (
            <div className="comment-item" key={comm._id}>
              <CommentBody comm={comm} />
              {comm.author._id === activeUserId && (
                <CommentOptions
                  activeCommentOption={activeCommentOption}
                  commentId={comm._id}
                  setActiveCommentOption={() =>
                    setActiveCommentOption((prev) =>
                      prev === comm._id ? "" : comm._id
                    )
                  }
                  updateCommentHandler={() =>
                    updateCommentHandler(comm.description, comm._id)
                  }
                  deleteCommentHandler={() => deleteCommentHandler(comm._id)}
                />
              )}
            </div>
          ))}
        </div>
      </CommentsContainer>
    </>
  );
};

export default Comments;
