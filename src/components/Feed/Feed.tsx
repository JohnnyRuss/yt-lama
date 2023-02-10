import React from "react";
import { Link } from "react-router-dom";
import { FeedContainer } from "./feed.styles";

const Feed: React.FC = () => {
  return (
    <FeedContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((thumb) => (
        <Link to=":id" className="feed-thumb">
          <figure className="thumb-fig">
            <img
              src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/How-to-Make-YouTube-Thumbnails-1.png?resize=1176%2C720&ssl=1"
              alt=""
            />
          </figure>
          <div className="thumb-details">
            <figure className="thumb-channel__fig">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYthQLPUJdUzOwrvoHVvpUQVNfgapgqetbSw&usqp=CAU"
                alt=""
              />
            </figure>
            <div className="thumb-identifier">
              <span className="thumb-identifier__title">thumb title </span>
              <span className="thumb-identifier__channel">channel</span>
              <div className="thumb-identifier__views">
                <div>
                  <span>613,00</span>
                  <span>&nbsp;views</span>
                </div>
                <div>
                  <span>1</span>
                  <span>day ago</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </FeedContainer>
  );
};

export default Feed;
