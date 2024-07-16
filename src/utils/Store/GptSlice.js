import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    isShow: false,
  },
  reducers: {
    toggleIsShow: (state) => {
      state.isShow = !state.isShow;
    },
  },
});

export const { toggleIsShow } = gptSlice.actions;

export default gptSlice.reducer;
