import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { axiosPublicQuery, axiosPrivateQuery } from "../../axiosConfig";

import { VideoT } from "../../../interface/DB/video.types";

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
  imageUrl: string;
  videoUrl: string;
  title: string;
  description: string;
  tags: string[];
}

export const getRandomVideos = createAsyncThunk<
  VideoT[],
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
  VideoT[],
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
  VideoT[],
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

export const getRelatedVideos = createAsyncThunk<
  VideoT[],
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
  VideoT,
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
