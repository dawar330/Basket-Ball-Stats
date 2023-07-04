import { createSlice } from "@reduxjs/toolkit";

export const GamesSlice = createSlice({
  name: "Games",
  initialState: {
    Games: [],
  },
  reducers: {
    upsertGames: (state, action) => {
      state.Games = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { upsertGames } = GamesSlice.actions;

export default GamesSlice.reducer;
