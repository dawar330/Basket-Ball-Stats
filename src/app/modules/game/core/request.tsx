import { gql } from "@apollo/client";
export const createComment = gql`
  mutation ($comment: String!, $gameID: String!) {
    createComment(comment: $comment, gameID: $gameID) {
      _id
      userID
      gameID
      comment
    }
  }
`;
export const getComments = gql`
  query ($gameID: String!) {
    getComments(gameID: $gameID) {
      _id
      userID
      gameID
      comment
      time
    }
  }
`;
export const getTeamStats = gql`
  query ($teamID: String!) {
    getTeamStats(teamID: $teamID) {
      assists
      steals
      rebounds
      points
    }
  }
`;

export const createGame = gql`
  mutation ($CreateGameInput: CreateGameInput!) {
    createGame(CreateGameInput: $CreateGameInput) {
      _id
    }
  }
`;
export const StartGame = gql`
  mutation ($gameID: String!) {
    StartGame(gameID: $gameID)
  }
`;
export const EndGame = gql`
  mutation ($gameID: String!) {
    EndGame(gameID: $gameID)
  }
`;
export const UpdateGameFoulLimit = gql`
  mutation ($gameID: String!, $PassWord: String!, $newLimit: Int!) {
    UpdateGameFoulLimit(
      gameID: $gameID
      PassWord: $PassWord
      newLimit: $newLimit
    )
  }
`;
export const UpdateGameTimeOutLimit = gql`
  mutation ($gameID: String!, $PassWord: String!, $newLimit: Int!) {
    UpdateGameTimeOutLimit(
      gameID: $gameID
      PassWord: $PassWord
      newLimit: $newLimit
    )
  }
`;
export const UpdateGameTimeDistribution = gql`
  mutation ($gameID: String!, $PassWord: String!, $newLimit: String!) {
    UpdateGameTimeDistribution(
      gameID: $gameID
      PassWord: $PassWord
      newLimit: $newLimit
    )
  }
`;

export const UpdateGameTotalTime = gql`
  mutation ($gameID: String!, $PassWord: String!, $newLimit: Int!) {
    UpdateGameTotalTime(
      gameID: $gameID
      PassWord: $PassWord
      newLimit: $newLimit
    )
  }
`;
export const createTeam = gql`
  mutation (
    $teamName: String!
    $teamCity: String!
    $Image: String!
    $Color: String!
  ) {
    createTeam(
      teamName: $teamName
      teamCity: $teamCity
      Image: $Image
      Color: $Color
    ) {
      _id
    }
  }
`;

export const updateTeamInfo = gql`
  mutation (
    $teamID: String!
    $teamName: String!
    $teamCity: String!
    $Image: String!
  ) {
    updateTeamInfo(
      teamID: $teamID
      teamName: $teamName
      teamCity: $teamCity
      Image: $Image
    ) {
      _id
      teamName
      teamCity
      Image
      Players
    }
  }
`;
export const createPlay = gql`
  mutation (
    $PlayerID: String!
    $TeamID: String!
    $PlayType: String!
    $Missed: Boolean!
    $GameID: String!
    $Quarter: Int!
    $time: String!
  ) {
    createPlay(
      PlayerID: $PlayerID
      TeamID: $TeamID
      PlayType: $PlayType
      Missed: $Missed
      GameID: $GameID
      Quarter: $Quarter
      time: $time
    ) {
      PlayerID
      PlayType
      Missed
      Time
    }
  }
`;
export const createTimeOuts = gql`
  mutation (
    $TeamID: String!
    $Secs: String!
    $GameID: String!
    $Quarter: Int!
  ) {
    createTimeOuts(
      TeamID: $TeamID
      Secs: $Secs

      GameID: $GameID
      Quarter: $Quarter
    ) {
      Time
    }
  }
`;
export const createPossession = gql`
  mutation (
    $TeamID: String!
    $Time: String!
    $GameID: String!
    $Quarter: Int!
  ) {
    createPossession(
      TeamID: $TeamID
      Time: $Time

      GameID: $GameID
      Quarter: $Quarter
    ) {
      Time
    }
  }
`;
export const RemoveTeamPlayer = gql`
  mutation ($teamID: String!, $PlayerID: String!) {
    RemoveTeamPlayer(teamID: $teamID, PlayerID: $PlayerID)
  }
`;
export const addTeamPlayer = gql`
  mutation ($teamID: String!, $PlayerIDs: [String!]) {
    addTeamPlayer(teamID: $teamID, PlayerIDs: $PlayerIDs)
  }
`;
export const getGameTimeOuts = gql`
  query ($gameID: String!) @live {
    getGameTimeOuts(gameID: $gameID) {
      homeTeam {
        Quarter
        Time
        Team
        Secs
        Time
      }
      awayTeam {
        Quarter
        Time
        Team
        Secs
        Time
      }
    }
  }
`;
export const getGamePossession = gql`
  query ($gameID: String!) @live {
    getGamePossession(gameID: $gameID) {
      homeTeam {
        Quarter
        Time
        Team
        Time
      }
      awayTeam {
        Quarter
        Time
        Team
        Time
      }
    }
  }
`;

export const getGamePlay = gql`
  query ($gameID: String!) @live {
    getGamePlay(gameID: $gameID) {
      awayTeam
      homeTeam
    }
  }
`;

export const getScoringGamePlay = gql`
  query ($gameID: String!) {
    getScoringGamePlay(gameID: $gameID) {
      homeTeam {
        PlayerID
        PlayType
        Time
        Time2
        Team
      }
      awayTeam {
        PlayerID
        PlayType
        Time
        Team
        Time2
      }
    }
  }
`;
export const getGamePlaysByPlayer = gql`
  query ($gameID: String!) @live {
    getGamePlaysByPlayer(gameID: $gameID) {
      homeTeam {
        _id
        Player
        FG3
        FGA3
        FG2
        FGA2
        FT
        FTA
        PTS
        OFF
        DEF
        TOT
        PF
        TF
        A
        TO
        BLOCK
        STEAL
      }
      awayTeam {
        _id
        Player
        FG3
        FGA3
        FG2
        FGA2
        FT
        FTA
        PTS
        OFF
        DEF
        TOT
        PF
        TF
        A
        TO
        BLOCK
        STEAL
      }
    }
  }
`;

export const getQuarterlyGamePlaysByPlayer = gql`
  query ($gameID: String!) @live {
    getQuarterlyGamePlaysByPlayer(gameID: $gameID) {
      homeTeam {
        Quarter1 {
          _id
          Player
          FG3
          FGA3
          FG2
          FGA2
          FT
          FTA
          PTS
          OFF
          DEF
          TOT
          PF
          A
          TO
          BLOCK
          STEAL
        }
        Quarter2 {
          _id
          Player
          FG3
          FGA3
          FG2
          FGA2
          FT
          FTA
          PTS
          OFF
          DEF
          TOT
          PF
          A
          TO
          BLOCK
          STEAL
        }
        Quarter3 {
          _id
          Player
          FG3
          FGA3
          FG2
          FGA2
          FT
          FTA
          PTS
          OFF
          DEF
          TOT
          PF
          A
          TO
          BLOCK
          STEAL
        }
        Quarter4 {
          _id
          Player
          FG3
          FGA3
          FG2
          FGA2
          FT
          FTA
          PTS
          OFF
          DEF
          TOT
          PF
          A
          TO
          BLOCK
          STEAL
        }
      }
      awayTeam {
        Quarter1 {
          _id
          Player
          FG3
          FGA3
          FG2
          FGA2
          FT
          FTA
          PTS
          OFF
          DEF
          TOT
          PF
          A
          TO
          BLOCK
          STEAL
        }
        Quarter2 {
          _id
          Player
          FG3
          FGA3
          FG2
          FGA2
          FT
          FTA
          PTS
          OFF
          DEF
          TOT
          PF
          A
          TO
          BLOCK
          STEAL
        }
        Quarter3 {
          _id
          Player
          FG3
          FGA3
          FG2
          FGA2
          FT
          FTA
          PTS
          OFF
          DEF
          TOT
          PF
          A
          TO
          BLOCK
          STEAL
        }
        Quarter4 {
          _id
          Player
          FG3
          FGA3
          FG2
          FGA2
          FT
          FTA
          PTS
          OFF
          DEF
          TOT
          PF
          A
          TO
          BLOCK
          STEAL
        }
      }
    }
  }
`;
export const getAllGames = gql`
  query {
    getAllGames {
      _id
      startTime
      endTime
      ScheduledDate
      homeTeam {
        _id
        teamName
        teamCity
        Image
        Players
      }
      awayTeam {
        _id
        teamName
        teamCity
        Image
        Players
      }
      coach
    }
  }
`;

export const getGames = gql`
  query {
    getGames {
      _id
      startTime
      endTime
      ScheduledDate
      homeTeam {
        _id
        teamName
        teamCity
        Image
        Players
      }
      awayTeam {
        _id
        teamName
        teamCity
        Image
        Players
      }
      coach
    }
  }
`;
export const getTeams = gql`
  query {
    getTeams {
      _id
      teamName
      teamCity
      Image
      Coach
      Players
    }
  }
`;
export const getTeamsInfo = gql`
  query {
    getTeamsInfo {
      _id
      teamName
      teamCity
      Image
      Coach
      Players {
        _id
        avatar
        fname
        lname
      }
    }
  }
`;

export const getTeam = gql`
  query ($teamID: String!) {
    getTeam(teamID: $teamID) {
      _id
      teamName
      teamCity
      Image
      Coach
      Players {
        _id
        avatar
        fname
        lname
      }
    }
  }
`;

export const getTeamPlayers = gql`
  query ($teamID: String!) {
    getTeamPlayers(teamID: $teamID) {
      avatar
      fname
      lname
    }
  }
`;
export const getGame = gql`
  query ($gameID: String!) {
    getGame(gameID: $gameID) {
      _id
      TimeOutLimit
      FoulLimit
      startTime
      endTime
      ScheduledDate
      TimeDistribution
      TotalTime

      coach
      homeTeam {
        _id
        teamName
        teamCity
        Image
        Players
        Color
      }
      awayTeam {
        _id
        teamName
        teamCity
        Image
        Players
        Color
      }
    }
  }
`;

export const getSeasonOverView = gql`
  query {
    getSeasonOverView {
      Win
      Loss
    }
  }
`;
export const getGamePlayerPlays = gql`
  query {
    getGamePlayerPlays {
      FG3
      FGA3
      FG2
      FGA2
      FT
      FTA
      PTS
      OFF
      DEF
      TOT
      PF
      A
      TO
      BLOCK
      STEAL
    }
  }
`;

export const getRecentGamesStats = gql`
  query {
    getRecentGamesStats {
      _id
      Points
      TournOvers
      Steal
      ReboundOFF
      ReboundDEF
      BLOCK
      Assist
    }
  }
`;
