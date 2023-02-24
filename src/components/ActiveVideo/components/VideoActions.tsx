import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";

import {
  likeVideo,
  dislikeVideo,
} from "../../../store/reducers/thunks/videoSlice.thunks";

import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { MdOutlineAddCircle } from "react-icons/md";

const VideoActions: React.FC = () => {
  const dispatch = useAppDispatch();

  const userID = useAppSelector(({ auth }) => auth.user?._id);

  const { likes, dislikes, id } = useAppSelector(({ videos }) => ({
    likes: videos.video?.likes,
    dislikes: videos.video?.dislikes,
    id: videos.video?._id,
  }));

  const [existingUserReaction, setExistingUserReaction] = useState<
    "like" | "dislike" | "passive"
  >("like");

  useEffect(() => {
    setExistingUserReaction(
      likes?.includes(userID || "")
        ? "like"
        : dislikes?.includes(userID || "")
        ? "dislike"
        : "passive"
    );
  }, [likes, dislikes, userID]);

  return (
    <div className="view--actions__container__actions">
      <div className="actionField">
        <button
          onClick={() => dispatch(likeVideo({ videoId: id || "" }))}
          className="action-btn"
        >
          {existingUserReaction === "like" ? <AiFillLike /> : <AiOutlineLike />}
        </button>
        <span className="label">{likes?.length.toLocaleString()}</span>
      </div>

      <div className="actionField">
        <button
          onClick={() => dispatch(dislikeVideo({ videoId: id || "" }))}
          className="action-btn"
        >
          {existingUserReaction === "dislike" ? (
            <AiFillDislike />
          ) : (
            <AiOutlineDislike />
          )}
        </button>
        <span className="label">{dislikes?.length.toLocaleString()}</span>
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
