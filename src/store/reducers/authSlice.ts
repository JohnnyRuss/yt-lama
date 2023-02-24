import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ErrorT,
  loginQuery,
  googleLoginQuery,
  logoutQuery,
} from "./thunks/authSlice.thunks";
import { UserLabelT } from "../../interface/DB/user.types";

interface StateT {
  loadingStatus: {
    error: boolean;
    loading: boolean;
    message: string;
  };
  user: UserLabelT | null;
  isAuthenticated: boolean;
}

const initialState: StateT = {
  loadingStatus: {
    loading: false,
    error: false,
    message: "",
  },
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setGoogleAuthError(
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) {
      state.loadingStatus = {
        ...state.loadingStatus,
        loading: false,
        error: true,
        message: message,
      };
    },

    addNewSubscribedChanel(
      state,
      { payload: { userId } }: PayloadAction<{ userId: string }>
    ) {
      state.user?.subscribedUsers.push(userId);
    },

    removeSubscribedChanel(
      state,
      { payload: { userId } }: PayloadAction<{ userId: string }>
    ) {
      if (state.user && Array.isArray(state.user.subscribedUsers))
        state.user.subscribedUsers = state.user?.subscribedUsers.filter(
          (user) => user !== userId
        );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginQuery.pending, (state) => {
        state.loadingStatus = {
          ...state.loadingStatus,
          loading: true,
        };
      })
      .addCase(
        loginQuery.fulfilled,
        (state, { payload }: PayloadAction<UserLabelT>) => {
          state.user = payload;

          state.isAuthenticated = true;

          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
          };
        }
      )
      .addCase(
        loginQuery.rejected,
        (state, { payload }: PayloadAction<ErrorT>) => {
          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
            error: true,
            message: payload?.message || "",
          };
        }
      )
      .addCase(googleLoginQuery.pending, (state) => {
        state.loadingStatus = {
          ...state.loadingStatus,
          loading: true,
        };
      })
      .addCase(
        googleLoginQuery.fulfilled,
        (state, { payload }: PayloadAction<UserLabelT>) => {
          state.user = payload;

          state.isAuthenticated = true;

          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
          };
        }
      )
      .addCase(
        googleLoginQuery.rejected,
        (state, { payload }: PayloadAction<ErrorT>) => {
          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
            error: true,
            message: payload?.message || "",
          };
        }
      )
      .addCase(logoutQuery.pending, (state) => {
        state.loadingStatus = {
          ...state.loadingStatus,
          loading: true,
        };
      })
      .addCase(logoutQuery.fulfilled, (state, _) => {
        state.user = null;

        state.isAuthenticated = false;

        state.loadingStatus = {
          ...state.loadingStatus,
          loading: false,
        };
      })
      .addCase(
        logoutQuery.rejected,
        (state, { payload }: PayloadAction<ErrorT>) => {
          state.loadingStatus = {
            ...state.loadingStatus,
            loading: false,
            error: true,
            message: payload?.message || "",
          };
        }
      );
  },
});

export default authSlice.reducer;
export const {
  setGoogleAuthError,
  addNewSubscribedChanel,
  removeSubscribedChanel,
} = authSlice.actions;
