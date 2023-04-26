import { gql } from "@apollo/client";

export const createGame = gql`
  mutation ($CreateGameInput: CreateGameInput!) {
    createGame(CreateGameInput: $CreateGameInput) {
      homeTeam
      awayTeam
      coach
    }
  }
`;

export const getGames = gql`
  query {
    getGames {
      _id
      homeTeam
      awayTeam
      coach
    }
  }
`;
export const getGame = gql`
  query ($gameID: String!) {
    getGame(gameID: $gameID) {
      _id
      homeTeam
      awayTeam
      coach
    }
  }
`;
