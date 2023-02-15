import React from "react";

import { Card } from "../";
import { FeedContainer } from "./feed.styles";

import { VideoT } from "../../../interface/DB/video.types";
interface FeedT {
  videos: VideoT[];
}

const Feed: React.FC<FeedT> = ({ videos }) => {
  return (
    <FeedContainer>
      {videos.map((thumb) => (
        <Card key={thumb._id} video={thumb} />
      ))}
    </FeedContainer>
  );
};

export default Feed;
