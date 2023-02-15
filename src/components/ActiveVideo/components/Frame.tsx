import React from "react";

interface FrameType {}

const Frame: React.FC<FrameType> = (props) => {
  return (
    <div className="video-box">
      <iframe
        // width="100%"
        // height="720"
        // src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
        src="https://www.youtube.com/embed/fKKNPLowteY"
        title="YouTube video player"
        // fr="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="frame"
      ></iframe>
    </div>
  );
};

export default Frame;
