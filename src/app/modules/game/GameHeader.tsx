/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";
import { Link, useLocation, useParams, Params } from "react-router-dom";
import { getGame } from "./core/request";
import { useQuery } from "@apollo/client";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import {
  ICreateGame,
  createGameSchemas,
  inits,
} from "./CreateTeamWizardHelper";

interface GameRouteParams extends Params {
  id: string;
}

const GameHeader: React.FC = () => {
  const { id: game_ID } = useParams<GameRouteParams>();
  const [currentSchema, setCurrentSchema] = useState(createGameSchemas[0]);
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

    onCompleted: ({ getGame }) => {
      setgame(getGame);
    },
  });
  const submitStep = async (values: ICreateGame, actions: FormikValues) => {
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
  const [initValues] = useState<ICreateGame>(inits);
  const location = useLocation();
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
        <div
          className="flex-column-auto pt-10 px-5"
          id="kt_aside_secondary_footer"
        >
          <div
            className="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_1"
          >
            <KTSVG
              path="/media/icons/duotune/general/gen041.svg"
              className="svg-icon-muted svg-icon-2hx"
            />
            <span className="btn-label">Create Play</span>
          </div>
        </div>
        <div className="modal fade" tabIndex={-1} id="kt_modal_1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Play</h5>
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
              <div className="modal-body">
                <Formik
                  validationSchema={currentSchema}
                  initialValues={initValues}
                  onSubmit={submitStep}
                >
                  {() => (
                    <Form
                      className="py-20 w-100"
                      noValidate
                      id="kt_create_account_form"
                    >
                      <div className="row">
                        <div className="fv-row mb-10">
                          <label className="form-label required">
                            Scoring Team
                          </label>

                          <Field
                            as="select"
                            name="scoringTeam"
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
                            <ErrorMessage name="homeTeam" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="fv-row mb-10">
                          <label className="form-label required">
                            Scoring Player
                          </label>

                          <Field
                            as="select"
                            name="scoringTeam"
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
                            <ErrorMessage name="homeTeam" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="fv-row mb-10">
                          <label className="form-label required">Score</label>

                          <Field
                            as="select"
                            name="scoringTeam"
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
                            <ErrorMessage name="homeTeam" />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-6">
                        <div className="col-lg-8 fv-row">
                          <div className="d-flex align-items-center mt-3">
                            <label className="form-check form-check-inline form-check-solid me-5">
                              <input
                                className="form-check-input"
                                name="communication[]"
                                type="checkbox"
                                defaultChecked={false}
                                onChange={() => {
                                  // updateData({
                                  //   communications: {
                                  //     email: !data.communications?.email,
                                  //     phone: data.communications?.phone,
                                  //   },
                                  // });
                                }}
                              />
                              <span className="fw-bold ps-2 fs-6">Missed</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save Play
                </button>
              </div>
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
