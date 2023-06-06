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
      avatar
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
export const getPlayers = gql`
  query {
    getPlayers {
      _id
      fname
      lname
      email
      avatar
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
export const updateUserInfo = gql`
  mutation ($fname: String!, $lname: String!, $avatar: String!) {
    updateUserInfo(fname: $fname, lname: $lname, avatar: $avatar) {
      fname
    }
  }
`;
export const UpdateEmail = gql`
  mutation ($email: String!, $PassWord: String!) {
    UpdateEmail(email: $email, PassWord: $PassWord)
  }
`;
export const UpdatePass = gql`
  mutation ($newPass: String!, $PassWord: String!) {
    UpdatePass(newPass: $newPass, PassWord: $PassWord)
  }
`;
