import { configureStore } from "@reduxjs/toolkit";
import { CurrentGameSlice } from "./CurrectGame";
import { TeamsSlice } from "./Team";

export default configureStore({
  reducer: { CurrentGame: CurrentGameSlice.reducer, Teams: TeamsSlice.reducer },
});
