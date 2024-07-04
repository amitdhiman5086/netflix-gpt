import { createSlice } from "@reduxjs/toolkit";

const Movieslice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addMovies  ,addTrailerVideo} = Movieslice.actions;

export default Movieslice.reducer;
