import React from "react";

import { Card } from "../";
import { FeedContainer } from "./feed.styles";

import { VideoLabelT } from "../../../interface/DB/video.types";
import { GetCredentialsForDeleteFileT } from "../../Profile/Profile";
interface FeedT {
  videos: VideoLabelT[];
  deletableCard?: boolean;
  onCardDelete?: (args: GetCredentialsForDeleteFileT) => void;
}

const Feed: React.FC<FeedT> = ({ videos, deletableCard, onCardDelete }) => {
  return (
    <FeedContainer>
      {videos?.map((thumb) => (
        <Card
          key={thumb._id}
          video={thumb}
          deletable={deletableCard}
          onCardDelete={onCardDelete}
        />
      ))}
    </FeedContainer>
  );
};

export default Feed;
