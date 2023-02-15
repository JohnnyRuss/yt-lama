import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublicQuery } from "../../axiosConfig";
import { AxiosError } from "axios";
import { PASSPORT_KEY } from "../../../lib/config";

import { UserLabelT } from "../../../interface/DB/user.types";
export type ErrorT = { message: string } | undefined;

interface LoginArgsT {
  username: string;
  password: string;
}

export interface GoogleLoginArgsT {
  username: string;
  email: string;
  avatar: string;
}

export const loginQuery = createAsyncThunk<
  UserLabelT,
  LoginArgsT,
  { rejectValue: ErrorT }
>("/auth/login", async (body, { rejectWithValue }) => {
  try {
    const { data } = await axiosPublicQuery.post("/authentication/login", body);
    localStorage.setItem(PASSPORT_KEY, JSON.stringify(data.accessToken));
    return data.user;
  } catch (error: any) {
    const err: AxiosError<ErrorT> = error;
    return rejectWithValue({
      message: err.response?.data || error.message || "something went wrong",
    });
  }
});

export const googleLoginQuery = createAsyncThunk<
  UserLabelT,
  GoogleLoginArgsT,
  { rejectValue: ErrorT }
>("/auth/google-auth", async (body, { rejectWithValue }) => {
  try {
    const { data } = await axiosPublicQuery.post(
      "/authentication/google-auth",
      body
    );
    localStorage.setItem(PASSPORT_KEY, JSON.stringify(data.accessToken));
    return data.user;
  } catch (error: any) {
    const err: AxiosError<ErrorT> = error;
    return rejectWithValue({
      message: err.response?.data || error.message || "something went wrong",
    });
  }
});

export const logoutQuery = createAsyncThunk<
  void,
  undefined,
  { rejectValue: ErrorT }
>("/auth/logout", async (body, { rejectWithValue }) => {
  try {
    await axiosPublicQuery.post("/authentication/logout", body);
    localStorage.removeItem(PASSPORT_KEY);
  } catch (error: any) {
    const err: AxiosError<ErrorT> = error;
    return rejectWithValue({
      message: err.response?.data || error.message || "something went wrong",
    });
  }
});
