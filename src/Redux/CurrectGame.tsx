import { createSlice } from "@reduxjs/toolkit";

export const CurrentGameSlice = createSlice({
  name: "CurrentGame",

  initialState: {
    _id: "",
    ShowTeamStats: true,
    homeTeam: {
      _id: "",
      teamName: "",
      teamCity: "",
      Image: "",
      Players: [],
      QuarterScore: [],
      ScoringGamePlays: [],
      PlayerPlays: [],
      QuarterlyPlayerPlays: [[], [], [], []],
      TotalScore: 0,
      TimeOuts: [],
      Possessions: [],
    },
    awayTeam: {
      _id: "",
      teamName: "",
      teamCity: "",
      Image: "",
      Players: [],
      QuarterScore: [],
      ScoringGamePlays: [],
      PlayerPlays: [],
      QuarterlyPlayerPlays: [[], [], [], []],
      TotalScore: 0,
      TimeOuts: [],
      Possessions: [],
    },
    TimeOutLimit: 0,
    FoulLimit: 0,
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

      state.TimeOutLimit = action.payload.TimeOutLimit;
      state.FoulLimit = action.payload.FoulLimit;
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
    upsertPlayerPlays: (state, action) => {
      state.homeTeam.PlayerPlays = action.payload.homeTeam;
      state.awayTeam.PlayerPlays = action.payload.awayTeam;
    },
    upsertTimeOuts: (state, action) => {
      state.homeTeam.TimeOuts = action.payload.homeTeam;
      state.awayTeam.TimeOuts = action.payload.awayTeam;
    },
    upsertPossessions: (state, action) => {
      state.homeTeam.Possessions = action.payload.homeTeam;
      state.awayTeam.Possessions = action.payload.awayTeam;
    },
    upsertToggleTeamStats: (state, action) => {
      state.ShowTeamStats = action.payload;
    },
    upsertQuarterlyPlayerPlays: (state, action) => {
      state.homeTeam.QuarterlyPlayerPlays[0] = action.payload.homeTeam.Quarter1;
      state.homeTeam.QuarterlyPlayerPlays[1] = action.payload.homeTeam.Quarter2;
      state.homeTeam.QuarterlyPlayerPlays[2] = action.payload.homeTeam.Quarter3;
      state.homeTeam.QuarterlyPlayerPlays[3] = action.payload.homeTeam.Quarter4;

      state.awayTeam.QuarterlyPlayerPlays[0] = action.payload.awayTeam.Quarter1;
      state.awayTeam.QuarterlyPlayerPlays[1] = action.payload.awayTeam.Quarter2;
      state.awayTeam.QuarterlyPlayerPlays[2] = action.payload.awayTeam.Quarter3;
      state.awayTeam.QuarterlyPlayerPlays[3] = action.payload.awayTeam.Quarter4;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  upsertTimeOuts,
  upsertPossessions,
  upsertGame,
  upsertPlays,
  upsertScoringGamePlay,
  upsertPlayerPlays,
  upsertToggleTeamStats,
  upsertQuarterlyPlayerPlays,
} = CurrentGameSlice.actions;

export default CurrentGameSlice.reducer;
