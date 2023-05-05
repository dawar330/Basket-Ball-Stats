import { configureStore } from "@reduxjs/toolkit";
import { CurrentGameSlice } from "./CurrectGame";

export default configureStore({
  reducer: { CurrentGame: CurrentGameSlice.reducer },
});
