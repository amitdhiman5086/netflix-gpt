import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MovieSlice from "./MovieSlice";
import GptSlice from "./GptSlice";
import ConfigSlice from "./ConfigSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    movies: MovieSlice,
    gpt : GptSlice ,
    config  : ConfigSlice
  },
});

export default store;
