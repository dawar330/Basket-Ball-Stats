import { gql } from "@apollo/client";

export const register = gql`
  mutation ($registerUserInput: registerUserInput!) {
    register(registerUserInput: $registerUserInput) {
      api_token
      email
      first_name
      last_name
    }
  }
`;

export const getUserByToken = gql`
  query ($token: String!) {
    getUserByToken(token: $token) {
      fname
      lname
      email
    }
  }
`;
