import React from "react";
import { useAppSelector } from "../../../store/hooks";

const Frame: React.FC = () => {
  const { url, title } = useAppSelector(({ videos }) => ({
    url: videos.video?.videoUrl,
    title: videos.video?.title,
  }));

  return (
    <div className="video-box">
      <iframe
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="frame"
      ></iframe>
    </div>
  );
};

export default Frame;
