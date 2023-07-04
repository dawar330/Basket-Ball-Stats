import * as Yup from "yup";

export interface ICreateTeam {
  teamName: string;
  homeTown: string;
  color: string;
  image: string;
}

const createTeamSchemas = [
  Yup.object({
    teamName: Yup.string().required().label("Team Name"),
    homeTown: Yup.string().required().label("Home Town"),
    color: Yup.string().required().label("Color"),
    image: Yup.string().label("Team Image"),
  }),
];

const inits: ICreateTeam = {
  teamName: "",
  homeTown: "",
  color: "",
  image: "",
};

export { createTeamSchemas, inits };
