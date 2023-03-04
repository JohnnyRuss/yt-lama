import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { deleteFile } from "../../store/firebase";
import { deleteVideo } from "../../store/reducers/thunks/videoSlice.thunks";

import { Feed, Spinner } from "../Layouts";

import styled from "styled-components";
const ProfileContainer = styled.div`
  position: relative;
  width: 100%;
`;

export interface GetCredentialsForDeleteFileT {
  videoId: string;
  thumbnail: string;
  videoUrl: string;
}

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();

  const { videos, loadingStatus } = useAppSelector(({ videos }) => ({
    videos: videos.videos,
    loadingStatus: videos.loadingStatus,
  }));

  async function deleteVideoHandler(args: GetCredentialsForDeleteFileT) {
    const rootUrl =
      "https://firebasestorage.googleapis.com/v0/b/yt-lama.appspot.com/o/";
    const thumbnailName = args.thumbnail.split("?")[0].replace(rootUrl, "");
    const videoName = args.videoUrl.split("?")[0].replace(rootUrl, "");

    await Promise.all(
      [thumbnailName, videoName].map(async (f) => deleteFile(f))
    );

    dispatch(deleteVideo({ id: args.videoId }));
  }

  return (
    <ProfileContainer>
      {loadingStatus.loading && <Spinner />}
      <Feed
        videos={videos}
        deletableCard={true}
        onCardDelete={deleteVideoHandler}
      />
    </ProfileContainer>
  );
};

export default Profile;
