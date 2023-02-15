import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { axiosPublicQuery, axiosPrivateQuery } from "../../axiosConfig";

import { VideoT } from "../../../interface/DB/video.types";
export type KnownErrorT = { message: string } | undefined;

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
