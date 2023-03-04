import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";

import {
  likeVideo,
  dislikeVideo,
  saveVideo,
  unsaveVideo,
} from "../../../store/reducers/thunks/videoSlice.thunks";

import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { MdOutlineAddCircle } from "react-icons/md";

const VideoActions: React.FC = () => {
  const dispatch = useAppDispatch();

  const userID = useAppSelector(({ auth }) => auth.user?._id);

  const { likes, dislikes, id, bookmarksIds } = useAppSelector(
    ({ videos }) => ({
      likes: videos.video?.likes,
      dislikes: videos.video?.dislikes,
      id: videos.video?._id,
      bookmarksIds: videos.bookmarksIds,
    })
  );

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

  function saveVideoHandler() {
    if (bookmarksIds.includes(id || ""))
      dispatch(unsaveVideo({ videoId: id || "" }));
    else dispatch(saveVideo({ videoId: id || "" }));
  }

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

      <button className="action-btn">
        <BiShare />
        <span className="label">share</span>
      </button>

      <button className="action-btn" onClick={saveVideoHandler}>
        {id && bookmarksIds.includes(id) ? (
          <AiFillMinusCircle />
        ) : (
          <MdOutlineAddCircle />
        )}
        <span className="label">
          {id && bookmarksIds.includes(id) ? "unsave" : "save"}
        </span>
      </button>
    </div>
  );
};

export default VideoActions;
