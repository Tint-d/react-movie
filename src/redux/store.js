import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./api/movieApi";
import sidebarSlice from "./services/sidebarSlice";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    sidebar: sidebarSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
