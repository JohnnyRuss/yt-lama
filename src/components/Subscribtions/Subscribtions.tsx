import React from "react";
import { useAppSelector } from "../../store/hooks";

import { Feed, Spinner } from "../Layouts";

import styled from "styled-components";
const SubscribtionsContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Subscribtions: React.FC = () => {
  const { videos, loadingStatus } = useAppSelector(({ videos }) => ({
    videos: videos.videos,
    loadingStatus: videos.loadingStatus,
  }));

  return (
    <SubscribtionsContainer>
      {loadingStatus.loading && <Spinner />}
      <Feed videos={videos} />
    </SubscribtionsContainer>
  );
};

export default Subscribtions;
