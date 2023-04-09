import * as Yup from "yup";

export interface ICreateTeam {
  teamName: string;
  homeTown: string;
}

const createTeamSchemas = [
  Yup.object({
    teamName: Yup.string().required().label("Team Name"),
    homeTown: Yup.string().required().label("Home Town"),
  }),
];

const inits: ICreateTeam = {
  teamName: "",
  homeTown: "",
};

export { createTeamSchemas, inits };
