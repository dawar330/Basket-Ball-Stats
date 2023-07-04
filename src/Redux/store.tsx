import { configureStore } from "@reduxjs/toolkit";
import { CurrentGameSlice } from "./CurrectGame";
import { TeamsSlice } from "./Team";
import { GamesSlice } from "./Games";

export default configureStore({
  reducer: {
    CurrentGame: CurrentGameSlice.reducer,
    Teams: TeamsSlice.reducer,
    Games: GamesSlice.reducer,
  },
});
