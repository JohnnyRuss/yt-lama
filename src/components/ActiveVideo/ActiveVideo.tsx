import React from "react";

import { ActiveVideoContainer, MainThread } from "./styles/activeVideo.styles";
import SideBar from "./SideBar";
import Frame from "./components/Frame";
import VideoDetailsAndActions from "./components/VideoDetailsAndActions";
import Comments from "./components/Comments";

const ActiveVideo: React.FC = () => {
  return (
    <ActiveVideoContainer>
      <MainThread>
        <Frame />
        <VideoDetailsAndActions />
        <Comments />
      </MainThread>
      <SideBar />
    </ActiveVideoContainer>
  );
};

export default ActiveVideo;
