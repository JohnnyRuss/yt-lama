import React from "react";
import { useAppSelector } from "../../store/hooks";

import { Spinner, Feed } from "../Layouts";
import styled from "styled-components";

const BookmarksContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Bookmarks: React.FC = () => {
  const { videos, loadingStatus } = useAppSelector(({ videos }) => ({
    videos: videos.videos,
    loadingStatus: videos.loadingStatus,
  }));

  return (
    <BookmarksContainer>
      {loadingStatus.loading && <Spinner />}
      <Feed videos={videos} />
    </BookmarksContainer>
  );
};

export default Bookmarks;
