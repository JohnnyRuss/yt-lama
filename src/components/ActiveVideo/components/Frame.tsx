import React from "react";
import { useAppSelector } from "../../../store/hooks";

const Frame: React.FC = () => {
  const { url } = useAppSelector(({ videos }) => ({
    url: videos.video?.videoUrl,
    title: videos.video?.title,
  }));

  return <video src={url} autoPlay controls className="video-box"></video>;
};

export default Frame;
