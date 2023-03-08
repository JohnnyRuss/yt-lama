import React from "react";
import { useAppSelector } from "../../store/hooks";

import { Feed, Spinner, ContentContainer } from "../Layouts";

const Explore: React.FC = () => {
  const { videos, loadingStatus } = useAppSelector(({ videos }) => ({
    videos: videos.videos,
    loadingStatus: videos.loadingStatus,
  }));

  return (
    <ContentContainer>
      {loadingStatus.loading && <Spinner />}
      {!loadingStatus.loading && <Feed videos={videos} />}
    </ContentContainer>
  );
};

export default Explore;
