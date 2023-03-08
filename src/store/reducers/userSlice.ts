import { createSlice } from "@reduxjs/toolkit";
import { subscribeUser, unsubscribeUser } from "./thunks/userSlice.thunks";

interface StateT {}

const initialState: StateT = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(subscribeUser.pending, (_) => {})
      .addCase(subscribeUser.fulfilled, (_) => {})
      .addCase(subscribeUser.rejected, (_) => {})
      .addCase(unsubscribeUser.pending, (_) => {})
      .addCase(unsubscribeUser.fulfilled, (_) => {})
      .addCase(unsubscribeUser.rejected, (_) => {});
  },
});

export default userSlice.reducer;
