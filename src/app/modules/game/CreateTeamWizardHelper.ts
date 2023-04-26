import * as Yup from "yup";

export interface ICreateGame {
  homeTeam: string;
  awayTeam: string;
}

const createGameSchemas = [
  Yup.object({
    homeTeam: Yup.string().required().label("Home Team"),
    awayTeam: Yup.string().required().label("Away Team"),
  }),
];

const inits: ICreateGame = {
  homeTeam: "",
  awayTeam: "",
};

export { createGameSchemas, inits };
