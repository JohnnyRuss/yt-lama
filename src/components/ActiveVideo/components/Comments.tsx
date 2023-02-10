import React from "react";

import { CommentsContainer } from "../styles/comments.styles";

interface CommnetsType {}

const Comments: React.FC<CommnetsType> = (props) => {
  return (
    <CommentsContainer>
      <div className="add-comment__field">
        <figure className="user-fig">
          <img
            src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=757"
            alt="user"
          />
        </figure>
        <textarea placeholder="Add a comment..." className="text-field" />
      </div>
      <div className="comments-list">
        {[
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKJsGmp3pnqoMLUbEyb5vu8g2kS-VW9_KdQ&usqp=CAU",
          "https://apiumhub.com/wp-content/uploads/2021/02/Monica.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9Mq0b3Viu2V1Sy_j0PrkqzXR0Wi9PhtH1Q&usqp=CAU",
          "https://info.itemis.com/hubfs/Blog/Authors/Katharina_Lattenkamp_300x300px_DSC00242.jpg",
        ].map((comm) => (
          <div className="comment-item" key={comm}>
            <figure className="comment-item__author-fig">
              <img src={comm} alt="user" />
            </figure>
            <div className="comment-item__details-box">
              <div className="comment-item__author-and--date">
                <span className="comment-item__author-name">daniel</span>
                <span className="comment-item__date-creation">02-20-2023</span>
              </div>
              <p className="comment-item__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur dolorem corrupti illum officia minus fuga voluptas
                aperiam, sunt repudiandae. Enim.
              </p>
            </div>
          </div>
        ))}
      </div>
    </CommentsContainer>
  );
};

export default Comments;
