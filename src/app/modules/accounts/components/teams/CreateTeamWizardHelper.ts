import * as Yup from "yup";

export interface ICreateTeam {
  teamName: string;
  homeTown: string;
  image: string;
}

const createTeamSchemas = [
  Yup.object({
    teamName: Yup.string().required().label("Team Name"),
    homeTown: Yup.string().required().label("Home Town"),
    image: Yup.string().label("Team Image"),
  }),
];

const inits: ICreateTeam = {
  teamName: "",
  homeTown: "",
  image: "",
};

export { createTeamSchemas, inits };
