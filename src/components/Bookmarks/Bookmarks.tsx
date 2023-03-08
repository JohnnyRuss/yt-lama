import React from "react";
import { useAppSelector } from "../../store/hooks";

import { Spinner, Feed, ContentContainer } from "../Layouts";

const Bookmarks: React.FC = () => {
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

export default Bookmarks;
