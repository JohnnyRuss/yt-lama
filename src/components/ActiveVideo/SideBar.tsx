import React from "react";
import { useAppSelector } from "../../store/hooks";
import { CardX } from "../Layouts";

import { SideBar as SideBarEl } from "./styles/activeVideo.styles";

const SideBar: React.FC = () => {
  const { relatedVideos, activeVideo } = useAppSelector(({ videos }) => ({
    relatedVideos: videos.videos,
    activeVideo: videos.video?._id,
  }));

  return (
    <SideBarEl>
      {relatedVideos
        .filter((video) => video._id !== activeVideo)
        .map((thumb) => (
          <CardX
            video={thumb}
            key={thumb._id}
            playBack={false}
            className="related-thumb"
          />
        ))}
    </SideBarEl>
  );
};

export default SideBar;
