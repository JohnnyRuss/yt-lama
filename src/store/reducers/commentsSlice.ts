import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getComments,
  addComment,
  deleteComment,
  updateComment,
} from "./thunks/commentsSlice.thunks";
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
      .addCase(addComment.rejected, (state) => {})
      .addCase(deleteComment.pending, (state) => {})
      .addCase(
        deleteComment.fulfilled,
        (state, { payload }: PayloadAction<string>) => {
          state.comments = state.comments.filter(
            (comm) => comm._id !== payload
          );
        }
      )
      .addCase(deleteComment.rejected, (state) => {})
      .addCase(updateComment.pending, (state) => {})
      .addCase(
        updateComment.fulfilled,
        (state, { payload }: PayloadAction<CommentT>) => {
          const i = state.comments.findIndex(
            (comm) => comm._id === payload._id
          );

          state.comments[i] = payload;
        }
      )
      .addCase(updateComment.rejected, (state) => {});
  },
});

export default commentsSlice.reducer;
