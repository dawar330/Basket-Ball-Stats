import * as Yup from "yup";

export interface ICreateGame {
  vs: Boolean;
  homeTeam: string;
  awayTeam: string;
  TimeOutLimit: Number;
  FoulLimit: Number;
  TotalTime: Number;
  TimeDistribution: string;
  ScheduledDate: Date;
}

const createGameSchemas = [
  Yup.object({
    vs: Yup.boolean().required().label("VS"),
    TimeOutLimit: Yup.number().required().label("Time Out Limit"),
    FoulLimit: Yup.number().required().label("Foul Out Limit"),
    TotalTime: Yup.number().required().label("Total Time"),
    TimeDistribution: Yup.string().required().label("Time Distribution"),
  }),
  Yup.object({
    homeTeam: Yup.string().required().label("Home Team"),
    awayTeam: Yup.string().when("vs", {
      is: true,
      then: Yup.string().required().label("Away Team Name"),
    }),

    ScheduledDate: Yup.date().required().label("Scheduled Date"),
  }),
];

const inits: ICreateGame = {
  vs: true,
  homeTeam: "",
  awayTeam: "",
  TimeOutLimit: 6,
  FoulLimit: 3,
  TotalTime: 34,
  TimeDistribution: "Quatres",
  ScheduledDate: new Date(),
};

export { createGameSchemas, inits };
