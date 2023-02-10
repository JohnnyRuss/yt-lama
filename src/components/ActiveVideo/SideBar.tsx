import React from "react";
import { Link } from "react-router-dom";

import { SideBar as SideBarEl } from "./styles/activeVideo.styles";

interface SideBarType {}

const SideBar: React.FC<SideBarType> = (props) => {
  return (
    <SideBarEl>
      {[1, 2, 3, 4, 5, 6].map((thumb) => (
        <Link to=":id" className="thumb">
          <figure className="thumb-fig">
            <img
              src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/How-to-Make-YouTube-Thumbnails-1.png?resize=1176%2C720&ssl=1"
              alt=""
            />
          </figure>
          <div className="thumb-details">
            <p>React Video Sharing App UI Design | Youtube UI...</p>
            <p className="thumb-chanel">info</p>
            <div className="thumb--views--date__container">
              <div>
                <span>660,908</span>
                <span>views</span>
              </div>
              <div>
                <span>1</span>
                <span>day ago</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </SideBarEl>
  );
};

export default SideBar;
