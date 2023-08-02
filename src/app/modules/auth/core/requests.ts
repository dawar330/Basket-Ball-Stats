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
      avatar
      PlayingLevel
      Height
      Weight
      WingSpan
      Vertical
      CGPA
      AAU
      AAUTeamName
      AAUAgeLevel
      AAUState
      fname
      lname
      email
      AvailableGames
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
  mutation (
    $fname: String!
    $lname: String!
    $avatar: String!
    $PlayingLevel: String!
    $Height: Int!
    $Weight: Int!
    $WingSpan: Int!
    $Vertical: Int!
    $CGPA: Float!
  ) {
    updateUserInfo(
      fname: $fname
      lname: $lname
      PlayingLevel: $PlayingLevel
      Height: $Height
      Weight: $Weight
      WingSpan: $WingSpan
      Vertical: $Vertical
      CGPA: $CGPA
      avatar: $avatar
    ) {
      fname
    }
  }
`;
export const updateUserAAUInfo = gql`
  mutation (
    $AAU: Boolean!
    $AAUTeamName: String
    $AAUAgeLevel: String
    $AAUState: String
  ) {
    updateUserAAUInfo(
      AAU: $AAU
      AAUTeamName: $AAUTeamName
      AAUAgeLevel: $AAUAgeLevel
      AAUState: $AAUState
    ) {
      AAU
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
export const registerNewPlayer = gql`
  mutation registerNewPlayer(
    $avatar: String!
    $Team: String!
    $PlayerName: String!
    $PlayingLevel: String!
    $Height: Int!
    $Weight: Int!
    $WingSpan: Int!
    $Vertical: Int!
    $CGPA: Int!
    $AAU: Boolean!
    $AAUTeamName: String
    $AAUAgeLevel: String
    $AAUState: String
  ) {
    registerNewPlayer(
      avatar: $avatar
      Team: $Team
      PlayerName: $PlayerName
      PlayingLevel: $PlayingLevel
      Height: $Height
      Weight: $Weight
      WingSpan: $WingSpan
      Vertical: $Vertical
      CGPA: $CGPA
      AAU: $AAU
      AAUTeamName: $AAUTeamName
      AAUAgeLevel: $AAUAgeLevel
      AAUState: $AAUState
    )
  }
`;
