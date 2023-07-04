import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
    Color: "",
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
    Color: "",
  },
  TimeOutLimit: 0,
  FoulLimit: 0,
  startTime: "",
  endTime: "",
  ScheduledDate: "",
  TimeDistribution: 0,
  TotalTime: 0,
};
export const CurrentGameSlice = createSlice({
  name: "CurrentGame",

  initialState: initialState,
  reducers: {
    upsertGame: (state, action) => {
      state._id = action.payload._id;
      state.ScheduledDate = action.payload.ScheduledDate;
      state.TimeDistribution = action.payload.TimeDistribution;
      state.TotalTime = action.payload.TotalTime;

      state.homeTeam._id = action.payload.homeTeam._id;
      state.homeTeam.teamName = action.payload.homeTeam.teamName;
      state.homeTeam.teamCity = action.payload.homeTeam.teamCity;
      state.homeTeam.Image = action.payload.homeTeam.Image;
      state.homeTeam.Players = action.payload.homeTeam.Players;
      state.homeTeam.Color = action.payload.homeTeam.Color;
      state.awayTeam._id = "";
      if (action.payload.awayTeam) {
        state.awayTeam._id = action.payload.awayTeam._id;
        state.awayTeam.teamName = action.payload.awayTeam.teamName;
        state.awayTeam.teamCity = action.payload.awayTeam.teamCity;
        state.awayTeam.Image = action.payload.awayTeam.Image;
        state.awayTeam.Players = action.payload.awayTeam.Players;
        state.awayTeam.Color = action.payload.awayTeam.Color;
      }
      state.startTime = action.payload.startTime;
      state.endTime = action.payload.endTime;

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
      if (action.payload.awayTeam) {
        state.awayTeam.QuarterlyPlayerPlays[0] =
          action.payload.awayTeam.Quarter1;
        state.awayTeam.QuarterlyPlayerPlays[1] =
          action.payload.awayTeam.Quarter2;
        state.awayTeam.QuarterlyPlayerPlays[2] =
          action.payload.awayTeam.Quarter3;
        state.awayTeam.QuarterlyPlayerPlays[3] =
          action.payload.awayTeam.Quarter4;
      }
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
