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

      coach
    }
  }
`;
