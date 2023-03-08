import React from "react";
import styled from "styled-components";

interface PlayBackType {
  videoSrc: string;
}

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const PlayBack: React.FC<PlayBackType> = ({ videoSrc }) => {
  return <Video src={videoSrc} autoPlay muted></Video>;
};

export default PlayBack;
