import React from "react";

interface WriteCommentType {
  activeUserAvatar: string;
  activeUserName: string;
  handleComment: () => void;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  comment: string;
  updatingCommentId: string;
}

const WriteComment: React.FC<WriteCommentType> = ({
  activeUserAvatar,
  activeUserName,
  handleComment,
  setComment,
  comment,
  updatingCommentId,
}) => {
  return (
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
          autoFocus={updatingCommentId ? true : false}
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
  );
};

export default WriteComment;
