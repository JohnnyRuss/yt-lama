import React from "react";
import { useAppSelector } from "../../store/hooks";

import { Feed, Spinner } from "../Layouts";

import styled from "styled-components";
const HomeContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Home: React.FC = () => {
  const { videos, loadingStatus } = useAppSelector(({ videos }) => ({
    videos: videos.videos,
    loadingStatus: videos.loadingStatus,
  }));

  return (
    <HomeContainer>
      {loadingStatus.loading && <Spinner />}
      <Feed videos={videos} />
    </HomeContainer>
  );
};

export default Home;
