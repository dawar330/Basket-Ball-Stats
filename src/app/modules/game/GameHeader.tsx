/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";
import { Link, useLocation, useParams, Params } from "react-router-dom";
import { getGame } from "./core/request";
import { useLazyQuery, useQuery } from "@apollo/client";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import { ICreatePlay, createPlaySchemas, inits } from "./CreatePlayHelper";
import { getUser } from "../auth/core/requests";

interface GameRouteParams extends Params {
  id: string;
}
interface Player {
  _id: string;
  fname: string;
  lname: string;
}
const GameHeader: React.FC = () => {
  const { id: game_ID } = useParams<GameRouteParams>();
  const [currentSchema, setCurrentSchema] = useState(createPlaySchemas[0]);
  const [game, setgame] = useState<{
    image: string;
    _id: string;
    homeTeam: {
      _id: string;
      teamName: string;
      teamCity: string;
      Image: string;
      Players: [string];
    };
    awayTeam: {
      _id: string;
      teamName: string;
      teamCity: string;
      Image: string;
      Players: [string];
    };
    startTime: string;
  }>();

  useQuery(getGame, {
    variables: {
      gameID: game_ID,
    },

    onCompleted: async ({ getGame }) => {
      const homeplayerIds = getGame?.homeTeam.Players || [];

      const homeplayerQueries = homeplayerIds.map(async (id: string) => {
        const { data } = await getPlayerName({
          variables: {
            id: id,
          },
        });
        return data.getUser;
      });

      const homeplayerResults: Player[] = await Promise.all(homeplayerQueries);

      setHomePlayers(homeplayerResults);

      const playerIds = getGame?.awayTeam.Players || [];

      const awayplayerQueries: Player[] = playerIds.map((id: string) => {
        return getPlayerName({
          variables: {
            id: id,
          },
        });
      });

      const awayplayerResults = await Promise.all(awayplayerQueries);
      setawayPlayers(awayplayerResults);
      setgame(getGame);
    },
  });
  const [HomePlayers, setHomePlayers] = useState<Player[]>();
  const [awayPlayers, setawayPlayers] = useState<Player[]>();

  const submitStep = async (values: ICreatePlay, actions: FormikValues) => {
    console.log(values);
    console.log(initValues);

    // if (!stepper.current) {
    //   return;
    // }
    // if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
    //   stepper.current.goNext();
    // } else {
    //   await createGameF({
    //     variables: { CreateGameInput: { ...values } },
    //   });
    //   //TODO NAVIGATE TO GAME
    //   navigate("/account/teams");
    //   // actions.resetForm();
    // }
    // setCurrentSchema(createGameSchemas[stepper.current.currentStepIndex - 1]);
  };
  const [initValues] = useState<ICreatePlay>(inits);
  const location = useLocation();
  let [getPlayerName] = useLazyQuery(getUser);
  const [PlayType, setPlayType] = useState("");
  const options =
    PlayType === "Play" ? (
      <>
        {" "}
        <option></option>
        <option key={"2-Point"} value={"2-Point"}>
          {"2-Point"}
        </option>
        <option key={"3-Point"} value={"3-Point"}>
          {"3-Point"}
        </option>
        <option key={"Free Throw	"} value={"Free Throw"}>
          {"Free Throw"}
        </option>
      </>
    ) : PlayType === "Rebound" ? (
      <>
        {" "}
        <option></option>
        <option key={"OFF"} value={"OFF"}>
          {"OFF"}
        </option>
        <option key={"DEF"} value={"DEF"}>
          {"DEF"}
        </option>
      </>
    ) : PlayType === "Foul" ? (
      <>
        {" "}
        <option></option>
        <option key={"F"} value={"F"}>
          {"F"}
        </option>
        <option key={"TF"} value={"TF"}>
          {"TF"}
        </option>
      </>
    ) : (
      <>
        {" "}
        <option></option>
        <option key={"A"} value={"A"}>
          {"A"}
        </option>
        <option key={"TO"} value={"TO"}>
          {"TO"}
        </option>
        <option key={"BLOCK"} value={"BLOCK"}>
          {"BLOCK"}
        </option>
        <option key={"STEAL"} value={"STEAL"}>
          {"STEAL"}
        </option>
      </>
    );
  const [GameActive, setGameActive] = useState(false);
  const [GameEnded, setGameEnded] = useState(false);
  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-body pt-9 pb-0">
        <div className="d-flex justify-content-between flex-sm-nowrap">
          <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
            <div className="me-7 mb-4">
              <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                <img
                  src={toAbsoluteUrl("/media/teamlogo/teama.jfif")}
                  alt="Metronic"
                />
                <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-warning rounded-circle border border-4 border-white h-20px w-20px"></div>
              </div>
            </div>

            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                    >
                      {game?.homeTeam.teamName}
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap flex-stack mt-12">
                <div className="d-flex flex-column flex-grow-1 pe-8">
                  <div className="d-flex flex-wrap">
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="fs-2 fw-bolder">5</div>
                      </div>

                      <div className="fw-bold fs-6 text-gray-400">Points</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
            <div className=" order-sm-1 order-md-2 mb-4">
              <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                <div className="position-absolute translate-middle bottom-0  start-0 mb-6 bg-primary rounded-circle border border-4 border-white h-20px w-20px"></div>
                <img
                  src={toAbsoluteUrl("/media/teamlogo/teamb.jfif")}
                  alt="Metronic"
                />
              </div>
            </div>

            <div className="flex-grow-1 mr-7">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                    >
                      {game?.awayTeam.teamName}
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap flex-stack mt-12">
                <div className="d-flex flex-column flex-grow-1 pe-8">
                  <div className="d-flex flex-wrap">
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4  mb-3">
                      <div className="d-flex align-items-center">
                        <div className="fs-2 fw-bolder">11</div>
                      </div>

                      <div className="fw-bold fs-6 text-gray-400">Points</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!GameEnded && (
          <div
            className="flex-column-auto pt-10"
            id="kt_aside_secondary_footer"
          >
            <div
              className="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100 mb-2"
              onClick={() => {
                if (!GameActive) setGameActive(true);
                else setGameEnded(true);
              }}
            >
              <KTSVG
                path="/media/icons/duotune/general/gen041.svg"
                className="svg-icon-muted svg-icon-2hx"
              />
              <span className="btn-label">
                {!GameActive ? "Start Game" : "End Game"}
              </span>
            </div>
            {GameActive && (
              <div className="d-sm-flex flex-sm-row gap-3 gap-y-3">
                <div
                  className="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100 mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_1"
                  onClick={() => {
                    setPlayType("Play");
                  }}
                >
                  <KTSVG
                    path="/media/icons/duotune/general/gen041.svg"
                    className="svg-icon-muted svg-icon-2hx"
                  />
                  <span className="btn-label">Create Play</span>
                </div>
                <div
                  className="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100 mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_1"
                  onClick={() => {
                    setPlayType("Rebound");
                  }}
                >
                  <KTSVG
                    path="/media/icons/duotune/general/gen041.svg"
                    className="svg-icon-muted svg-icon-2hx"
                  />
                  <span className="btn-label">Create Rebounds</span>
                </div>{" "}
                <div
                  className="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100 mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_1"
                  onClick={() => {
                    setPlayType("Foul");
                  }}
                >
                  <KTSVG
                    path="/media/icons/duotune/general/gen041.svg"
                    className="svg-icon-muted svg-icon-2hx"
                  />
                  <span className="btn-label">Create Fouls</span>
                </div>{" "}
                <div
                  className="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100 mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_1"
                  onClick={() => {
                    setPlayType("Action");
                  }}
                >
                  <KTSVG
                    path="/media/icons/duotune/general/gen041.svg"
                    className="svg-icon-muted svg-icon-2hx"
                  />
                  <span className="btn-label">Create Action</span>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="modal fade" tabIndex={-1} id="kt_modal_1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create {PlayType}</h5>
                <div
                  className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <KTSVG
                    path="/media/icons/duotune/arrows/arr061.svg"
                    className="svg-icon svg-icon-2x"
                  />
                </div>
              </div>

              <Formik
                validationSchema={currentSchema}
                initialValues={initValues}
                onSubmit={submitStep}
              >
                {({ values }) => (
                  <Form
                    className="py-20 w-100"
                    noValidate
                    id="kt_create_account_form"
                  >
                    <div className="modal-body">
                      <div className="row">
                        <div className="fv-row mb-10">
                          <label className="form-label required">Team</label>

                          <Field
                            as="select"
                            name="Team"
                            className="form-select form-select-solid"
                          >
                            <option></option>

                            <option
                              key={game?.homeTeam._id}
                              value={game?.homeTeam._id}
                            >
                              {game?.homeTeam.teamName}
                            </option>
                            <option
                              key={game?.awayTeam._id}
                              value={game?.awayTeam._id}
                            >
                              {game?.awayTeam.teamName}
                            </option>
                          </Field>
                          <div className="text-danger mt-2">
                            <ErrorMessage name="Team" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="fv-row mb-10">
                          <label className="form-label required">Player</label>

                          <Field
                            as="select"
                            name="Player"
                            className="form-select form-select-solid"
                          >
                            <option></option>
                            {values.Team === game?.homeTeam._id ? (
                              <>
                                {HomePlayers?.length &&
                                  HomePlayers?.map((Player, index) => {
                                    return (
                                      <option key={index} value={Player._id}>
                                        {Player.fname + " " + Player.lname}
                                      </option>
                                    );
                                  })}
                              </>
                            ) : (
                              <>
                                {" "}
                                {awayPlayers?.length &&
                                  awayPlayers?.map((Player, index) => {
                                    return (
                                      <option key={index} value={Player._id}>
                                        {Player.fname + " " + Player.lname}
                                      </option>
                                    );
                                  })}
                              </>
                            )}
                          </Field>
                          <div className="text-danger mt-2">
                            <ErrorMessage name="Player" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="fv-row mb-10">
                          <label className="form-label required">
                            {PlayType}
                          </label>

                          <Field
                            as="select"
                            name="Score"
                            className="form-select form-select-solid"
                          >
                            {options}
                          </Field>
                          <div className="text-danger mt-2">
                            <ErrorMessage name="Score" />
                          </div>
                        </div>
                      </div>
                      {PlayType === "Play" && (
                        <div className="row mb-6">
                          <div className="col-lg-8 fv-row">
                            <div className="d-flex align-items-center mt-3">
                              <label className="form-check form-check-inline form-check-solid me-5">
                                <Field
                                  type="checkbox"
                                  name="Missed"
                                  className="form-check-input"
                                />
                                <span className="fw-bold ps-2 fs-6">
                                  Missed
                                </span>
                              </label>
                            </div>
                            <div className="text-danger mt-2">
                              <ErrorMessage name="Missed" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save Play
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="d-flex overflow-auto h-55px">
          <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/game/${game_ID}/overview` &&
                    "active")
                }
                to={`/game/${game_ID}/overview`}
              >
                Overview
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/game/${game_ID}/gamesheet` &&
                    "active")
                }
                to={`/game/${game_ID}/gamesheet`}
                state={{ Home: game?.homeTeam, Away: game?.awayTeam }}
              >
                Game Sheet
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/game/${game_ID}/teamStats` &&
                    "active")
                }
                to={`/game/${game_ID}/teamStats`}
              >
                Team Stats
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/game/${game_ID}/leaders` && "active")
                }
                to={`/game/${game_ID}/leaders`}
                state={{ Home: game?.homeTeam, Away: game?.awayTeam }}
              >
                Leaders
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/game/${game_ID}/playerstats` &&
                    "active")
                }
                to={`/game/${game_ID}/playerstats`}
                state={{ Home: game?.homeTeam, Away: game?.awayTeam }}
              >
                Player Statistics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/game/${game_ID}/comments` &&
                    "active")
                }
                to={`/game/${game_ID}/comments`}
              >
                Comments
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { GameHeader };
