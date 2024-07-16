import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    isShow: false,
    moviesName: null,
    moviesResults: null,
  },
  reducers: {
    toggleIsShow: (state) => {
      state.isShow = !state.isShow;
    },
    addGptSearchMovies: (state, action) => {
      const { movies, moviesResults } = action.payload;
      state.moviesName = movies;
      state.moviesResults = moviesResults;
    },
  },
});

export const { toggleIsShow, addGptSearchMovies } = gptSlice.actions;

export default gptSlice.reducer;
