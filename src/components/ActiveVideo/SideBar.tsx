import React from "react";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import { useAppSelector } from "../../store/hooks";

import { SideBar as SideBarEl } from "./styles/activeVideo.styles";

const SideBar: React.FC = () => {
  const relatedVideos = useAppSelector(({ videos }) => videos.videos);

  return (
    <SideBarEl>
      {relatedVideos.map((thumb) => (
        <Link to=":id" className="thumb" key={thumb._id}>
          <figure className="thumb-fig">
            <img src={thumb.thumbnail} alt={thumb.title} />
          </figure>
          <div className="thumb-details">
            <p>{thumb.title}</p>
            <p className="thumb-chanel">info</p>
            <div className="thumb--views--date__container">
              <div>
                <span>{thumb.views.toLocaleString()}</span>
                <span>views</span>
              </div>
              <TimeAgo date={thumb.createdAt} />
            </div>
          </div>
        </Link>
      ))}
    </SideBarEl>
  );
};

export default SideBar;
