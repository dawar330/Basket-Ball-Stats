import { createSlice } from "@reduxjs/toolkit";

export const TeamsSlice = createSlice({
  name: "Teams",
  initialState: {
    teams: [],
    currentTeam: {},
  },
  reducers: {
    upsertTeams: (state, action) => {
      state.teams = action.payload;
    },
    upsertCurrentTeam: (state, action) => {
      state.currentTeam = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { upsertTeams, upsertCurrentTeam } = TeamsSlice.actions;

export default TeamsSlice.reducer;
