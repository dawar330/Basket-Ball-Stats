import { gql } from "@apollo/client";

export const register = gql`
  mutation ($registerUserInput: registerUserInput!) {
    register(registerUserInput: $registerUserInput) {
      api_token
      email
      first_name
      last_name
      Role
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
export const getUser = gql`
  query ($id: String!) {
    getUser(id: $id) {
      _id
      fname
      lname
    }
  }
`;
export const login = gql`
  mutation ($loginInput: loginInput!) {
    login(loginInput: $loginInput) {
      api_token
      email
      first_name
      last_name
      Role
    }
  }
`;
