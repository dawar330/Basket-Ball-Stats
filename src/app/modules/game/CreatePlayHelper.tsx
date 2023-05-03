import * as Yup from "yup";

export interface ICreatePlay {
  Team: string;
  Player: string;
  Score: string;
  Missed: boolean;
}

const createPlaySchemas = [
  Yup.object({
    Team: Yup.string().required().label("Team"),
    Player: Yup.string().required().label("Player"),
    Score: Yup.string().required().label("Score"),
    Missed: Yup.bool().required().label("Missed"),
  }),
];

const inits: ICreatePlay = {
  Team: "",
  Player: "",
  Score: "",
  Missed: false,
};

export { createPlaySchemas, inits };
