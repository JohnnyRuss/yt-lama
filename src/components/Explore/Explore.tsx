import React from "react";
import { useAppSelector } from "../../store/hooks";

import { Feed, Spinner } from "../Layouts";

import styled from "styled-components";
const ExploreContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Explore: React.FC = () => {
  const { videos, loadingStatus } = useAppSelector(({ videos }) => ({
    videos: videos.videos,
    loadingStatus: videos.loadingStatus,
  }));

  return (
    <ExploreContainer>
      {loadingStatus.loading && <Spinner />}
      <Feed videos={videos} />
    </ExploreContainer>
  );
};

export default Explore;
