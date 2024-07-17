import { createSlice } from "@reduxjs/toolkit";

const Movieslice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    upcoming: null,
    top_rated: null,
    popular: null,
    trailerVideo: null,
    currentWatching: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMoviesUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addMoviesPopular: (state, action) => {
      state.popular = action.payload;
    },
    addMoviesTopRated: (state, action) => {
      state.top_rated = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addCurrentWatching: (state, action) => {
      state.currentWatching = action.payload;
    },
    removeCurrentWatching: (state) => {
      state.currentWatching = null;
    },
  },
});

export const {
  addMovies,
  addTrailerVideo,
  addMoviesPopular,
  addMoviesTopRated,
  addCurrentWatching,
  removeCurrentWatching,
  addMoviesUpcoming,
} = Movieslice.actions;

export default Movieslice.reducer;
