import { createSlice } from "@reduxjs/toolkit";

const Movieslice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addMovies } = Movieslice.actions;

export default Movieslice.reducer;
