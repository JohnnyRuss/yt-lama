import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { axiosPrivateQuery, axiosPublicQuery } from "../../axiosConfig";
import { CommentT } from "../../../interface/DB/comment.types";

interface ErrorT {
  message: string;
}

interface GetCommentsArgsT {
  videoId: string;
}

interface AddCommentsArgsT {
  params: {
    videoId: string;
  };
  body: {
    description: string;
  };
}

interface DeleteCommentsArgsT {
  videoId: string;
  commentId: string;
}

interface UpdateCommentsArgsT {
  params: {
    videoId: string;
    commentId: string;
  };
  description: string;
}

export const getComments = createAsyncThunk<
  CommentT[],
  GetCommentsArgsT,
  { rejectValue: ErrorT }
>("/comments/getComments", async ({ videoId }, { rejectWithValue }) => {
  try {
    const { data } = await axiosPublicQuery(`/comments/${videoId}`);
    return data;
  } catch (error: any) {
    const err: AxiosError<ErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const addComment = createAsyncThunk<
  CommentT,
  AddCommentsArgsT,
  { rejectValue: ErrorT }
>("/comments/addComments", async ({ params, body }, { rejectWithValue }) => {
  try {
    const { data } = await axiosPrivateQuery.post(
      `/comments/${params.videoId}`,
      body
    );
    return data;
  } catch (error: any) {
    const err: AxiosError<ErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const deleteComment = createAsyncThunk<
  string,
  DeleteCommentsArgsT,
  { rejectValue: ErrorT }
>(
  "/comments/deleteComments",
  async ({ commentId, videoId }, { rejectWithValue }) => {
    try {
      await axiosPrivateQuery.delete(`/comments/${videoId}/${commentId}`);
      return commentId;
    } catch (error: any) {
      const err: AxiosError<ErrorT> = error;
      return rejectWithValue(err.response?.data || { message: "" });
    }
  }
);

export const updateComment = createAsyncThunk<
  CommentT,
  UpdateCommentsArgsT,
  { rejectValue: ErrorT }
>(
  "/comments/updateComments",
  async (
    { params: { commentId, videoId }, description },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axiosPrivateQuery.patch(
        `/comments/${videoId}/${commentId}`,
        { description }
      );

      return data;
    } catch (error: any) {
      const err: AxiosError<ErrorT> = error;
      return rejectWithValue(err.response?.data || { message: "" });
    }
  }
);
