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
export const createGame = gql`
  mutation ($CreateGameInput: CreateGameInput!) {
    createGame(CreateGameInput: $CreateGameInput) {
      homeTeam
      awayTeam
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
      TeamID
      PlayType
      Missed
      Time
      GameID
    }
  }
`;

export const getGamePlay = gql`
  query ($gameID: String!) {
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
