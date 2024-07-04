import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MovieSlice from "./MovieSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    movies: MovieSlice,
  },
});

export default store;
