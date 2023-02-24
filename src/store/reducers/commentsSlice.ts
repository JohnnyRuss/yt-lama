import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getComments, addComment } from "./thunks/commentsSlice.thunks";
import { CommentT } from "../../interface/DB/comment.types";

interface StateT {
  comments: CommentT[];
}

const initialState: StateT = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getComments.pending, (state) => {})
      .addCase(
        getComments.fulfilled,
        (state, { payload }: PayloadAction<CommentT[]>) => {
          state.comments = payload;
        }
      )
      .addCase(getComments.rejected, (state) => {})
      .addCase(addComment.pending, (state) => {})
      .addCase(
        addComment.fulfilled,
        (state, { payload }: PayloadAction<CommentT>) => {
          state.comments.unshift(payload);
        }
      )
      .addCase(addComment.rejected, (state) => {});
  },
});

export default commentsSlice.reducer;
