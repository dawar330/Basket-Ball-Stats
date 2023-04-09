import * as Yup from "yup";

export interface ICreatePlayer {
  PlayerName: string;
  homeTown: string;
  HighSchoolTeam: string;
  AAUTeam: string;
}

const createPlayerSchemas = [
  Yup.object({
    PlayerName: Yup.string().required().label("Player Name"),
    homeTown: Yup.string().required().label("Home Town"),
  }),
  Yup.object({}),
  Yup.object({
    HighSchoolTeam: Yup.string().required().label("High School Team Name"),
    AAUTeam: Yup.string().required().label("AAU Team"),
  }),
];

const inits: ICreatePlayer = {
  PlayerName: "",
  homeTown: "",
  HighSchoolTeam: "",
  AAUTeam: "",
};

export { createPlayerSchemas, inits };
