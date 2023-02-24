import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivateQuery } from "../../axiosConfig";
import { AxiosError } from "axios";

import {
  encreaseChanelSubscribers,
  decreaseChanelSubscribers,
} from "../videosSlice";

import { addNewSubscribedChanel, removeSubscribedChanel } from "../authSlice";

export interface ErrorT {
  message: string;
}

interface SubscribeUserArgsT {
  userId: string;
}

export const subscribeUser = createAsyncThunk<
  void,
  SubscribeUserArgsT,
  { rejectValue: ErrorT }
>("users/subscribeUser", async ({ userId }, { rejectWithValue, dispatch }) => {
  try {
    await axiosPrivateQuery.post(`/users/${userId}/subscribe`);
    dispatch(addNewSubscribedChanel({ userId }));
    dispatch(encreaseChanelSubscribers({ userId }));
  } catch (error: any) {
    const err: AxiosError<ErrorT> = error;
    return rejectWithValue(err.response?.data || { message: "" });
  }
});

export const unsubscribeUser = createAsyncThunk<
  void,
  SubscribeUserArgsT,
  { rejectValue: ErrorT }
>(
  "users/unsubscribeUser",
  async ({ userId }, { rejectWithValue, dispatch }) => {
    try {
      await axiosPrivateQuery.delete(`/users/${userId}/subscribe`);
      dispatch(removeSubscribedChanel({ userId }));
      dispatch(decreaseChanelSubscribers({ userId }));
    } catch (error: any) {
      const err: AxiosError<ErrorT> = error;
      return rejectWithValue(err.response?.data || { message: "" });
    }
  }
);
