import { createSlice } from "@reduxjs/toolkit";

export const TeamsSlice = createSlice({
  name: "Teams",
  initialState: {
    teams: [],
  },
  reducers: {
    upsertTeams: (state, action) => {
      state.teams = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { upsertTeams } = TeamsSlice.actions;

export default TeamsSlice.reducer;
