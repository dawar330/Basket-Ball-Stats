/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { KTSVG } from "../../../helpers";
import { useMutation } from "@apollo/client";
import {
  createPlay,
  createTimeOuts,
} from "../../../../app/modules/game/core/request";

type Props = {
  className: string;
};

const QuarterlyTable: React.FC<Props> = ({ className }) => {
  const [createPlayF] = useMutation(createPlay);
  const [createTimeOutsF] = useMutation(createTimeOuts);

  const [TeamCheckBox, setTeamCheckBox] = useState(false);
  const CurrentGame = useSelector((state: any) => state.CurrentGame);
  const [PlayerID, setPlayerID] = useState("");
  const [PlayType, setPlayType] = useState("");
  const [quarter, setquarter] = useState(1);
  const team = !TeamCheckBox ? "homeTeam" : "awayTeam";
  let FG3 = 0;
  let FG2 = 0;
  let FT = 0;
  let PTS = 0;
  let OFF = 0;
  let DEF = 0;
  let TOT = 0;
  let PF = 0;
  let A = 0;
  let TO = 0;
  let BLOCK = 0;
  let STEAL = 0;
  return (
    <>
      {" "}
      <div className="modal fade" tabIndex={-1} id="createPlay_modal">
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

            <Formik initialValues={{}} onSubmit={() => {}}>
              {() => (
                <Form className="w-100" noValidate>
                  <div className="modal-body">
                    {CurrentGame.FoulLimit >
                    CurrentGame[team]?.PlayerPlays?.find(
                      (item: any) => item._id === PlayerID
                    )?.PF ? (
                      PlayType === "2-Point" ||
                      PlayType === "3-Point" ||
                      PlayType === "Free Throw" ? (
                        <>
                          {" "}
                          <div
                            className="flex-column-auto btn mb-4 btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                            onClick={() => {
                              createPlayF({
                                variables: {
                                  GameID: CurrentGame._id,
                                  PlayerID: PlayerID,
                                  TeamID: CurrentGame?.[team]._id,
                                  PlayType: PlayType,
                                  Missed: true,
                                  Quarter: quarter,
                                },
                              });
                            }}
                          >
                            <span className="btn-label text-danger">
                              Missed
                            </span>
                          </div>
                          <div
                            className="flex-column-auto btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                            onClick={() => {
                              createPlayF({
                                variables: {
                                  GameID: CurrentGame._id,
                                  PlayerID: PlayerID,
                                  TeamID: CurrentGame?.[team]._id,
                                  PlayType: PlayType,
                                  Missed: false,
                                  Quarter: quarter,
                                },
                              });
                            }}
                          >
                            <span className="btn-label text-primary">
                              Basket
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          {" "}
                          <div
                            className="flex-column-auto btn mb-4 btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                            onClick={() => {
                              createPlayF({
                                variables: {
                                  GameID: CurrentGame._id,
                                  PlayerID: PlayerID,
                                  TeamID: CurrentGame?.[team]._id,
                                  PlayType: PlayType,
                                  Missed: false,
                                  Quarter: quarter,
                                },
                              });
                            }}
                          >
                            <span className="btn-label text-danger">
                              {PlayType}
                            </span>
                          </div>
                          {PlayType === "F" && (
                            <div
                              className="flex-column-auto btn mb-4 btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                              onClick={() => {
                                createPlayF({
                                  variables: {
                                    GameID: CurrentGame._id,
                                    PlayerID: PlayerID,
                                    TeamID: CurrentGame?.[team]._id,
                                    PlayType: "TF",
                                    Missed: false,
                                    Quarter: quarter,
                                  },
                                });
                              }}
                            >
                              <span className="btn-label text-danger">TF</span>
                            </div>
                          )}
                        </>
                      )
                    ) : (
                      <>Player has Reached Foul Limit</>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="modal fade" tabIndex={-1} id="createTimeOut_modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Time Out</h5>
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

            <Formik initialValues={{}} onSubmit={() => {}}>
              {() => (
                <Form className="w-100" noValidate>
                  <div className="modal-body">
                    <div
                      className="flex-column-auto btn mb-4 btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                      onClick={() => {
                        createTimeOutsF({
                          variables: {
                            GameID: CurrentGame._id,
                            TeamID: CurrentGame?.[team]._id,
                            Secs: "30",
                            Quarter: quarter,
                          },
                        });
                      }}
                    >
                      <span className="btn-label text-danger">30 Sec</span>
                    </div>
                    <div
                      className="flex-column-auto btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                      onClick={() => {
                        createTimeOutsF({
                          variables: {
                            GameID: CurrentGame._id,
                            TeamID: CurrentGame?.[team]._id,
                            Secs: "60",
                            Quarter: quarter,
                          },
                        });
                      }}
                    >
                      <span className="btn-label text-primary">60 Sec</span>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-center my-5"> </div>
      <div className={`card ${className} `}>
        {/* begin::Header */}
        <div className="card-header border-0 justify-content-center ">
          <div
            className=" px-5 btn btn-bg-light btn-color-gray-600 align-self-center w-200px mb-2 me-2"
            onClick={() => {
              setquarter(1);
            }}
          >
            <span className="btn-label">Quarter 1</span>
          </div>
          <div
            className=" px-5 btn btn-bg-light btn-color-gray-600 align-self-center w-200px mb-2 me-2"
            onClick={() => {
              setquarter(2);
            }}
          >
            <span className="btn-label">Quarter 2</span>
          </div>
          <div
            className=" px-5 btn btn-bg-light  btn-color-gray-600 align-self-center w-200px mb-2 me-2"
            onClick={() => {
              setquarter(3);
            }}
          >
            <span className="btn-label">Quarter 3</span>
          </div>
          <div
            className=" px-5 btn btn-bg-light btn-color-gray-600 align-self-center w-200px mb-2 me-2"
            onClick={() => {
              setquarter(4);
            }}
          >
            <span className="btn-label">Quarter 4</span>
          </div>
        </div>
      </div>
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className="card-header border-0 pt-3">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold fs-3 mb-1">
              Quarterly Statistics
            </span>
            <span className="card-label fw-light fs-5 mb-1">
              Quarter {quarter}
            </span>
          </h3>
          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
            <label
              className={`form-check-label fs-3  me-4 ${
                !TeamCheckBox ? "fw-bold text-primary" : " text-muted"
              }`}
            >
              {CurrentGame.homeTeam.teamName}
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              name="notifications"
              onChange={(e) => {
                setTeamCheckBox(e.target.checked);
              }}
              defaultChecked={false}
            />
            <label
              className={`form-check-label fs-3  ms-4 ${
                TeamCheckBox ? "fw-bold text-primary" : " text-muted"
              }`}
            >
              {CurrentGame.awayTeam.teamName}
            </label>
          </div>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className="card-body py-3">
          {/* begin::Table container */}
          <div className="table-responsive">
            {/* begin::Table */}
            <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
              {/* begin::Table head */}
              <thead>
                <tr className="fw-bold fs-30 text-muted">
                  <th className="min-w-5px "></th>
                  <th className="min-w-40px "></th>

                  <th className="min-w-20px text-end text-primary">2-Point</th>
                  <th className="min-w-20px text-end text-primary">3-Point</th>
                  <th className="min-w-20px "></th>
                  <th className="min-w-20px "></th>
                  <th
                    className="min-w-40px text-primary "
                    colSpan={2}
                    style={{ textAlign: "center" }}
                  >
                    Rebounds
                  </th>
                  <th className="min-w-20px "></th>
                  <th className="min-w-20px text-end text-primary">Fouls</th>
                  <th className="min-w-20px "></th>
                  <th className="min-w-20px "></th>
                  <th className="min-w-20px "></th>
                  <th className="min-w-20px "></th>
                </tr>
                <tr className="fw-bold text-muted">
                  <th className="min-w-5px">#</th>
                  <th className="min-w-40px text-end">Player</th>
                  <th className="min-w-20px text-end">FG-FGA</th>
                  <th className="min-w-20px text-end">FG-FGA</th>
                  <th className="min-w-20px text-end">FT-FTA</th>
                  <th className="min-w-20px text-end text-primary border border-dashed border-gray-300">
                    PTS
                  </th>
                  <th className="min-w-20px text-end">OFF</th>
                  <th className="min-w-20px text-end">DEF</th>
                  <th className="min-w-20px text-end text-primary border border-dashed border-gray-300">
                    TOT
                  </th>
                  <th className="min-w-20px text-end">PF</th>
                  <th className="min-w-20px text-end">A</th>
                  <th className="min-w-20px text-end">TO</th>
                  <th className="min-w-20px text-end">BLOCK</th>
                  <th className="min-w-20px text-end">STEAL</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {CurrentGame?.[team].QuarterlyPlayerPlays[quarter - 1] &&
                  CurrentGame?.[team].QuarterlyPlayerPlays[quarter - 1].map(
                    (player: any, index: any) => {
                      FG2 += player.FG2;
                      FT += player.FT;
                      FG3 += player.FG3;
                      PTS += player.PTS;
                      OFF += player.OFF;
                      DEF += player.DEF;
                      TO += player.TO;
                      TOT += player.OFF + player.DEF;
                      PF += player.PF;
                      STEAL += player.STEAL;
                      BLOCK += player.BLOCK;
                      A += player.A;
                      return (
                        <>
                          {" "}
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="d-flex justify-content-start flex-column">
                                  {index + 1}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.Player}
                                </div>
                              </div>
                            </td>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#createPlay_modal"
                              onClick={() => {
                                setPlayerID(player._id);
                                setPlayType("2-Point");
                              }}
                            >
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.FG2 + "-" + player.FGA2}
                                </div>
                              </div>
                            </td>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#createPlay_modal"
                              onClick={() => {
                                setPlayerID(player._id);
                                setPlayType("3-Point");
                              }}
                            >
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.FG3 + "-" + player.FGA3}
                                </div>
                              </div>
                            </td>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#createPlay_modal"
                              onClick={() => {
                                setPlayerID(player._id);
                                setPlayType("Free Throw");
                              }}
                            >
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.FT + "-" + player.FTA}
                                </div>
                              </div>
                            </td>
                            <td className="border border-dashed border-gray-300 px-2">
                              <div className="text-end ">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.PTS}
                                </div>
                              </div>
                            </td>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#createPlay_modal"
                              onClick={() => {
                                setPlayerID(player._id);
                                setPlayType("OFF");
                              }}
                            >
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.OFF}
                                </div>
                              </div>
                            </td>{" "}
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#createPlay_modal"
                              onClick={() => {
                                setPlayerID(player._id);
                                setPlayType("DEF");
                              }}
                            >
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.DEF}
                                </div>
                              </div>
                            </td>
                            <td className="border border-dashed border-gray-300 px-2">
                              <div className="text-end ">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.DEF + player.OFF}
                                </div>
                              </div>
                            </td>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#createPlay_modal"
                              onClick={() => {
                                setPlayerID(player._id);
                                setPlayType("F");
                              }}
                            >
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.PF}
                                </div>
                              </div>
                            </td>{" "}
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#createPlay_modal"
                              onClick={() => {
                                setPlayerID(player._id);
                                setPlayType("A");
                              }}
                            >
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.A}
                                </div>
                              </div>
                            </td>{" "}
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#createPlay_modal"
                              onClick={() => {
                                setPlayerID(player._id);
                                setPlayType("TO");
                              }}
                            >
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {" "}
                                  {player.TO}
                                </div>
                              </div>
                            </td>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#createPlay_modal"
                              onClick={() => {
                                setPlayerID(player._id);
                                setPlayType("BLOCK");
                              }}
                            >
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.BLOCK}
                                </div>
                              </div>
                            </td>{" "}
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#createPlay_modal"
                              onClick={() => {
                                setPlayerID(player._id);
                                setPlayType("STEAL");
                              }}
                            >
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {" "}
                                  {player.STEAL}
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    }
                  )}
                <tr className="text-primary">
                  <td style={{ borderBottomStyle: "hidden" }}>
                    <div className="d-flex align-items-center">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                  <td style={{ borderBottomStyle: "hidden" }}>
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {FG2}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {FG3}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {FT}
                      </div>
                    </div>
                  </td>
                  <td className="border border-dashed border-gray-300 px-2">
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {PTS}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {OFF}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {DEF}
                      </div>
                    </div>
                  </td>
                  <td className="border border-dashed border-gray-300 px-2">
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {TOT}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {PF}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {A}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {TO}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {BLOCK}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {STEAL}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ borderBottomStyle: "hidden" }}>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                      </div>
                    </div>
                  </td>
                  <td style={{ borderBottomStyle: "hidden" }}>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                      </div>
                    </div>
                  </td>
                  <td style={{ borderBottomStyle: "hidden" }}>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                      </div>
                    </div>
                  </td>
                  <td style={{ borderBottomStyle: "hidden" }}>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                      </div>
                    </div>
                  </td>
                  <td style={{ borderBottomStyle: "hidden" }}>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                      </div>
                    </div>
                  </td>
                  <td className="border border-dashed border-gray-300 px-2">
                    <div className="text-end text-primary">
                      <div className="d-flex justify-content-start flex-column">
                        Time Outs:{" "}
                      </div>
                    </div>
                  </td>
                  <td
                    data-bs-toggle="modal"
                    data-bs-target="#createTimeOut_modal"
                  >
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                  <td
                    data-bs-toggle="modal"
                    data-bs-target="#createTimeOut_modal"
                  >
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                  <td
                    colSpan={2}
                    data-bs-toggle="modal"
                    data-bs-target="#createTimeOut_modal"
                  >
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                      </div>
                    </div>
                  </td>
                  <td
                    data-bs-toggle="modal"
                    data-bs-target="#createTimeOut_modal"
                  >
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                  <td
                    data-bs-toggle="modal"
                    data-bs-target="#createTimeOut_modal"
                  >
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                  <td
                    data-bs-toggle="modal"
                    data-bs-target="#createTimeOut_modal"
                  >
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                  <td
                    data-bs-toggle="modal"
                    data-bs-target="#createTimeOut_modal"
                  >
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                      </div>
                    </div>
                  </td>
                  <td className="border border-dashed border-gray-300 px-2">
                    <div className="text-end text-primary">
                      <div className="d-flex justify-content-start flex-column">
                        Possession:{" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end text-muted">
                      <div className="d-flex justify-content-start flex-column"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
          {/* end::Table container */}
        </div>
        {/* begin::Body */}
      </div>
    </>
  );
};

export { QuarterlyTable };
