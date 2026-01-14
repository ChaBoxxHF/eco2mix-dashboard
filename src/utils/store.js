import { configureStore } from "@reduxjs/toolkit";
import langSlice from "./languageSlice";

export const store = configureStore({
  reducer: langSlice,
});
