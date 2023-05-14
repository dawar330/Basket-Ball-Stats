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
  query ($gameID: String!) @live {
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
  query ($teamID: String!) @live {
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
      coach
    }
  }
`;
export const StartGame = gql`
  mutation ($gameID: String!) {
    StartGame(gameID: $gameID) {
      coach
    }
  }
`;
export const createTeam = gql`
  mutation ($teamName: String!, $teamCity: String!, $Image: String!) {
    createTeam(teamName: $teamName, teamCity: $teamCity, Image: $Image) {
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
  ) {
    createPlay(
      PlayerID: $PlayerID
      TeamID: $TeamID
      PlayType: $PlayType
      Missed: $Missed
      GameID: $GameID
    ) {
      PlayerID

      PlayType
      Missed
      Time
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
  query ($gameID: String!) @live {
    getScoringGamePlay(gameID: $gameID) {
      homeTeam {
        PlayerID
        PlayType
        Time
        Team
      }
      awayTeam {
        PlayerID
        PlayType
        Time
        Team
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
        A
        TO
        BLOCK
        STEAL
      }
    }
  }
`;

export const getQuarterlyGamePlaysByPlayer = gql`
  query ($gameID: String!) {
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

export const getGames = gql`
  query {
    getGames {
      _id
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

export const getTeamPlayers = gql`
  query ($teamID: String!) {
    getTeamPlayers(teamID: $teamID) {
      fname
      lname
    }
  }
`;
export const getGame = gql`
  query ($gameID: String!) {
    getGame(gameID: $gameID) {
      _id
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
      startTime
      coach
    }
  }
`;
