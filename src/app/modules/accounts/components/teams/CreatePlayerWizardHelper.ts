import * as Yup from "yup";

export interface ICreatePlayer {
  PlayerName: string;
  PlayingLevel: string;
  Height: number;
  Weight: number;
  WingSpan: number;
  Vertical: number;
  CGPA: number;
  AAU: Boolean;
  AAUTeamName: string;
  AAUAgeLevel: string;
  AAUState: string;
}

const createPlayerSchemas = [
  Yup.object({
    PlayerName: Yup.string().required().label("Player Name"),
    PlayingLevel: Yup.string().required().label("Playing Level"),
    Height: Yup.string().required().label("Player Height"),
    Weight: Yup.string().required().label("Player Weight"),
    WingSpan: Yup.string().required().label("Player WingSpan"),
    Vertical: Yup.string().required().label("Player Vertical"),
    CGPA: Yup.string().required().label("Player CGPA"),
  }),
  Yup.object({}),
  Yup.object({
    AAU: Yup.boolean().required().label("AAU"),
    AAUTeamName: Yup.string().when("AAU", {
      is: true,
      then: Yup.string().required().label("AAU Team Name"),
    }),
    AAUAgeLevel: Yup.string().when("AAU", {
      is: true,
      then: Yup.string().required().label("AAU Age Level"),
    }),
    AAUState: Yup.string().when("AAU", {
      is: true,
      then: Yup.string().required().label("AAU State"),
    }),
  }),
];

const inits: ICreatePlayer = {
  PlayerName: "",
  PlayingLevel: "",
  Height: 0,
  Weight: 0,
  WingSpan: 0,
  Vertical: 0,
  CGPA: 0,
  AAU: false,
  AAUTeamName: "",
  AAUAgeLevel: "",
  AAUState: "",
};

export { createPlayerSchemas, inits };
