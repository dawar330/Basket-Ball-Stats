import { createSlice } from "@reduxjs/toolkit";

export const CurrentGameSlice = createSlice({
  name: "CurrentGame",
  initialState: {
    _id: "",
    homeTeam: {
      _id: "",
      teamName: "",
      teamCity: "",
      Image: "",
      Players: [],
      QuarterScore: [],
      ScoringGamePlays: [],
      TotalScore: 0,
    },
    awayTeam: {
      _id: "",
      teamName: "",
      teamCity: "",
      Image: "",
      Players: [],
      QuarterScore: [],
      ScoringGamePlays: [],
      TotalScore: 0,
    },
    startTime: "",
  },
  reducers: {
    upsertGame: (state, action) => {
      state._id = action.payload._id;
      state.homeTeam._id = action.payload.homeTeam._id;
      state.homeTeam.teamName = action.payload.homeTeam.teamName;
      state.homeTeam.teamCity = action.payload.homeTeam.teamCity;
      state.homeTeam.Image = action.payload.homeTeam.Image;
      state.homeTeam.Players = action.payload.homeTeam.Players;

      state.awayTeam._id = action.payload.awayTeam._id;
      state.awayTeam.teamName = action.payload.awayTeam.teamName;
      state.awayTeam.teamCity = action.payload.awayTeam.teamCity;
      state.awayTeam.Image = action.payload.awayTeam.Image;
      state.awayTeam.Players = action.payload.awayTeam.Players;
      state.startTime = action.payload.startTime;
    },
    upsertPlays: (state, action) => {
      state.homeTeam.QuarterScore = action.payload.homeTeam;
      state.awayTeam.QuarterScore = action.payload.awayTeam;
      state.homeTeam.TotalScore = action.payload.homeTeam.reduce(
        (acc: any, val: any) => acc + val,
        0
      );
      state.awayTeam.TotalScore = action.payload.awayTeam.reduce(
        (acc: any, val: any) => acc + val,
        0
      );
    },
    upsertScoringGamePlay: (state, action) => {
      state.homeTeam.ScoringGamePlays = action.payload.homeTeam;
      state.awayTeam.ScoringGamePlays = action.payload.awayTeam;
    },
  },
});

// Action creators are generated for each case reducer function
export const { upsertGame, upsertPlays, upsertScoringGamePlay } =
  CurrentGameSlice.actions;

export default CurrentGameSlice.reducer;
