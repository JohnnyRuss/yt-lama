import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import root from "./reducers/root";

export const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistore = persistStore(store);

export type RootStateT = ReturnType<typeof store.getState>;
export type DispatchT = typeof store.dispatch;
