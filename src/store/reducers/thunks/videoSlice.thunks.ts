import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { axiosPublicQuery, axiosPrivateQuery } from "../../axiosConfig";

import { VideoT, VideoLabelT } from "../../../interface/DB/video.types";

export type KnownErrorT = { message: string } | undefined;

interface GetVideoArgsT {
  id: string;
}

interface GetRelatedVideosArgsT {
  tags: string;
}

interface ReactOnVideoArgsT {
  videoId: string;
}

export interface ReactOnVideoResT {
  likes: string[];
  dislikes: string[];
}

interface UploadVideoArgsT {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  tags: string[];
}

interface SaveVideoT {
  videoId: string;
}

export const getRandomVideos = createAsyncThunk<
  VideoLabelT[],
  undefined,
  { rejectValue: KnownErrorT }
>("/getRandomVideos", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosPublicQuery("/videos/random");
    return data;
  } catch (error: any) {
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const getTrendingVideos = createAsyncThunk<
  VideoLabelT[],
  undefined,
  { rejectValue: KnownErrorT }
>("/getTrendingVideos", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosPublicQuery("/videos/trending");
    return data;
  } catch (error: any) {
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const getSubscribedVideos = createAsyncThunk<
  VideoLabelT[],
  undefined,
  { rejectValue: KnownErrorT }
>("/getSubscribedVideos", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosPrivateQuery("/videos/subscribed");
    return data;
  } catch (error: any) {
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const getVideo = createAsyncThunk<
  VideoT,
  GetVideoArgsT,
  { rejectValue: KnownErrorT }
>("/getVideoById", async ({ id }, { rejectWithValue }) => {
  try {
    const { data } = await axiosPrivateQuery(`/videos/${id}`);
    return data;
  } catch (error: any) {
    console.log(error);
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const deleteVideo = createAsyncThunk<
  string,
  GetVideoArgsT,
  { rejectValue: KnownErrorT }
>("/deleteVideo", async ({ id }, { rejectWithValue }) => {
  try {
    await axiosPrivateQuery.delete(`/videos/${id}`);
    return id;
  } catch (error: any) {
    console.log(error);
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const getRelatedVideos = createAsyncThunk<
  VideoLabelT[],
  GetRelatedVideosArgsT,
  { rejectValue: KnownErrorT }
>("/getRelatedVideos", async ({ tags }, { rejectWithValue }) => {
  try {
    const { data } = await axiosPrivateQuery(`/videos/related?tags=${tags}`);
    return data;
  } catch (error: any) {
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const likeVideo = createAsyncThunk<
  ReactOnVideoResT,
  ReactOnVideoArgsT,
  { rejectValue: KnownErrorT }
>("/reactOnVideo/like", async ({ videoId }, { rejectWithValue }) => {
  try {
    const { data } = await axiosPrivateQuery.post(
      `/videos/${videoId}/reaction`
    );

    return data;
  } catch (error: any) {
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const dislikeVideo = createAsyncThunk<
  ReactOnVideoResT,
  ReactOnVideoArgsT,
  { rejectValue: KnownErrorT }
>("/reactOnVideo/dislike", async ({ videoId }, { rejectWithValue }) => {
  try {
    const { data } = await axiosPrivateQuery.delete(
      `/videos/${videoId}/reaction`
    );

    return data;
  } catch (error: any) {
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const uploadVideo = createAsyncThunk<
  VideoLabelT,
  UploadVideoArgsT,
  { rejectValue: KnownErrorT }
>("/video/uploadVideo", async (body, { rejectWithValue }) => {
  try {
    const { data } = await axiosPrivateQuery.post(`/videos`, body);
    return data;
  } catch (error: any) {
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const saveVideo = createAsyncThunk<
  { videoId: string },
  SaveVideoT,
  { rejectValue: KnownErrorT }
>("/video/saveVideo", async ({ videoId }, { rejectWithValue }) => {
  try {
    await axiosPrivateQuery.post(`/users/save/${videoId}`);
    return { videoId };
  } catch (error: any) {
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const unsaveVideo = createAsyncThunk<
  { videoId: string },
  SaveVideoT,
  { rejectValue: KnownErrorT }
>("/video/unsaveVideo", async ({ videoId }, { rejectWithValue }) => {
  try {
    await axiosPrivateQuery.delete(`/users/save/${videoId}`);
    return { videoId };
  } catch (error: any) {
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const getBookmarks = createAsyncThunk<
  VideoLabelT[],
  undefined,
  { rejectValue: KnownErrorT }
>("/video/getBookmarks", async (body, { rejectWithValue }) => {
  try {
    const { data } = await axiosPrivateQuery(`/users/bookmarks`, body);
    return data.bookmarks;
  } catch (error: any) {
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const getBookmarksIds = createAsyncThunk<
  string[],
  undefined,
  { rejectValue: KnownErrorT }
>("/video/getBookmarksIds", async (body, { rejectWithValue }) => {
  try {
    const { data } = await axiosPrivateQuery(`/users/bookmarksIds`);

    return data.bookmarks;
  } catch (error: any) {
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const getUserVideos = createAsyncThunk<
  VideoLabelT[],
  undefined,
  { rejectValue: KnownErrorT }
>("/video/getUserVideos", async (body, { rejectWithValue }) => {
  try {
    const { data } = await axiosPrivateQuery(`/videos/user-uploads`);

    return data;
  } catch (error: any) {
    const err: AxiosError<KnownErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});
