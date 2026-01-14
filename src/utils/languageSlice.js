import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "fr",
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = langSlice.actions;
export default langSlice.reducer;
