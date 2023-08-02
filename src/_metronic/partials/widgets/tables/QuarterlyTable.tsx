/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { KTSVG } from "../../../helpers";
import { useMutation } from "@apollo/client";
import {
  createPlay,
  createPossession,
  createTimeOuts,
} from "../../../../app/modules/game/core/request";
import { useAuth } from "../../../../app/modules/auth";
import JsPDF from "jspdf";
import html2canvas from "html2canvas";
type Props = {
  className: string;
};

const QuarterlyTable: React.FC<Props> = ({ className }) => {
  const [createPlayF] = useMutation(createPlay);
  const [createTimeOutsF] = useMutation(createTimeOuts);
  const [createPossessionF] = useMutation(createPossession);

  const [TeamCheckBox, setTeamCheckBox] = useState(false);
  const CurrentGame = useSelector((state: any) => state.CurrentGame);
  const [PlayerID, setPlayerID] = useState("");
  const [PlayType, setPlayType] = useState("");
  const [quarter, setquarter] = useState(1);
  const [half, sethalf] = useState(1);

  let GameEnded = CurrentGame.endTime ? true : false;
  let GameStarted = CurrentGame.startTime ? true : false;
  let GameActive = GameStarted && !GameEnded;

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

  const [EmptyArray, setEmptyArray] = useState(
    Array.from({
      length:
        CurrentGame.TimeOutLimit - (CurrentGame[team]?.TimeOuts?.length || 0),
    })
  );

  useEffect(() => {
    setEmptyArray(
      Array.from({
        length:
          CurrentGame.TimeOutLimit - (CurrentGame[team]?.TimeOuts?.length || 0),
      })
    );
  }, [CurrentGame]);
  const auth = useAuth();
  console.log(
    "ACTIVE",
    GameActive,
    "STARTED",
    GameStarted,
    "ENDED",
    GameEnded,
    CurrentGame.startTime
  );

  function table(player: any, index: any) {
    return (
      <>
        <tr key={index}>
          <td>
            <div className="d-flex align-items-center">
              <div className="d-flex justify-content-start flex-column">
                {auth.auth?.Role === "Player" ? 1 : index + 1}
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
            data-bs-toggle={
              GameActive && auth.auth?.Role === "Coach" ? "modal" : ""
            }
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
            data-bs-toggle={
              GameActive && auth.auth?.Role === "Coach" ? "modal" : ""
            }
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
            data-bs-toggle={
              GameActive && auth.auth?.Role === "Coach" ? "modal" : ""
            }
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
            data-bs-toggle={
              GameActive && auth.auth?.Role === "Coach" ? "modal" : ""
            }
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
            data-bs-toggle={
              GameActive && auth.auth?.Role === "Coach" ? "modal" : ""
            }
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
            data-bs-toggle={
              GameActive && auth.auth?.Role === "Coach" ? "modal" : ""
            }
            data-bs-target="#createPlay_modal"
            onClick={() => {
              setPlayerID(player._id);
              setPlayType("F");
            }}
          >
            <div className="text-end text-muted">
              <div className="d-flex justify-content-start flex-column">
                {player.PF +
                  CurrentGame[team]?.PlayerPlays?.find(
                    (item: any) => item._id === player._id
                  )?.TF *
                    2}
              </div>
            </div>
          </td>{" "}
          <td
            data-bs-toggle={
              GameActive && auth.auth?.Role === "Coach" ? "modal" : ""
            }
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
            data-bs-toggle={
              GameActive && auth.auth?.Role === "Coach" ? "modal" : ""
            }
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
            data-bs-toggle={
              GameActive && auth.auth?.Role === "Coach" ? "modal" : ""
            }
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
            data-bs-toggle={
              GameActive && auth.auth?.Role === "Coach" ? "modal" : ""
            }
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

  const generatePDF = () => {
    // const report = new JsPDF({ orientation: "landscape" });
    const report = new JsPDF({ orientation: "landscape" });
    const exportTable = document.querySelector(
      "#exportTable"
    ) as HTMLElement | null;

    exportTable &&
      html2canvas(exportTable).then((canvas: any) => {
        const imgData = canvas.toDataURL("image/png");

        const pdfWidth = report.internal.pageSize.getWidth();
        const pdfHeight = report.internal.pageSize.getHeight();
        const imgProps = report.getImageProperties(imgData);

        const ratio = imgProps.width / imgProps.height;
        const width = pdfWidth - 20; // Subtract margins
        const height = width / ratio;

        report.addImage(imgData, "PNG", 10, 10, width, height);

        // const imgData = canvas.toDataURL("image/png");
        // console.log(canvas);

        // // Adjust the PDF page size to match the canvas
        // const pdfWidth = report.internal.pageSize.getWidth();
        // const pdfHeight = report.internal.pageSize.getHeight();
        // const aspectRatio = canvas.width / canvas.height;
        // const pdfImgHeight = pdfWidth / aspectRatio;

        // // Add the image of the component to the PDF

        // report.addImage(imgData, "PNG", 0, 0, pdfWidth);

        // Save the PDF file
        report.save("exportedComponent.pdf");
      });
  };

  const [Time, setTime] = useState("04:00");
  console.log(auth.auth?.Role === "Coach");

  return (
    <>
      {" "}
      {GameStarted && (
        <>
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
                        )?.PF +
                          CurrentGame[team]?.PlayerPlays?.find(
                            (item: any) => item._id === PlayerID
                          )?.TF *
                            2 ? (
                          PlayType === "2-Point" ||
                          PlayType === "3-Point" ||
                          PlayType === "Free Throw" ? (
                            <>
                              {" "}
                              <div
                                data-bs-dismiss="modal"
                                className="flex-column-auto btn mb-4 btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                                onClick={() => {
                                  createPlayF({
                                    variables: {
                                      GameID: CurrentGame._id,
                                      PlayerID: PlayerID,
                                      TeamID: CurrentGame?.[team]._id,
                                      PlayType: PlayType,
                                      Missed: true,
                                      Quarter:
                                        CurrentGame.TimeDistribution ===
                                        "Halves"
                                          ? half
                                          : quarter,
                                    },
                                  });
                                }}
                              >
                                <span className="btn-label text-danger">
                                  Missed
                                </span>
                              </div>
                              <div
                                data-bs-dismiss="modal"
                                className="flex-column-auto btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                                onClick={() => {
                                  createPlayF({
                                    variables: {
                                      GameID: CurrentGame._id,
                                      PlayerID: PlayerID,
                                      TeamID: CurrentGame?.[team]._id,
                                      PlayType: PlayType,
                                      Missed: false,
                                      Quarter:
                                        CurrentGame.TimeDistribution ===
                                        "Halves"
                                          ? half
                                          : quarter,
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
                                data-bs-dismiss="modal"
                                className="flex-column-auto btn mb-4 btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                                onClick={() => {
                                  createPlayF({
                                    variables: {
                                      GameID: CurrentGame._id,
                                      PlayerID: PlayerID,
                                      TeamID: CurrentGame?.[team]._id,
                                      PlayType: PlayType,
                                      Missed: false,
                                      Quarter:
                                        CurrentGame.TimeDistribution ===
                                        "Halves"
                                          ? half
                                          : quarter,
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
                                  data-bs-dismiss="modal"
                                  className="flex-column-auto btn mb-4 btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                                  onClick={() => {
                                    createPlayF({
                                      variables: {
                                        GameID: CurrentGame._id,
                                        PlayerID: PlayerID,
                                        TeamID: CurrentGame?.[team]._id,
                                        PlayType: "TF",
                                        Missed: false,
                                        Quarter:
                                          CurrentGame.TimeDistribution ===
                                          "Halves"
                                            ? half
                                            : quarter,
                                      },
                                    });
                                  }}
                                >
                                  <span className="btn-label text-danger">
                                    TF
                                  </span>
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
                          data-bs-dismiss="modal"
                          className="flex-column-auto btn mb-4 btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                          onClick={() => {
                            createTimeOutsF({
                              variables: {
                                GameID: CurrentGame._id,
                                TeamID: CurrentGame?.[team]._id,
                                Secs: "30",
                                Quarter:
                                  CurrentGame.TimeDistribution === "Halves"
                                    ? half
                                    : quarter,
                              },
                            });
                          }}
                        >
                          <span className="btn-label text-danger">30 Sec</span>
                        </div>
                        <div
                          data-bs-dismiss="modal"
                          className="flex-column-auto btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                          onClick={() => {
                            createTimeOutsF({
                              variables: {
                                GameID: CurrentGame._id,
                                TeamID: CurrentGame?.[team]._id,
                                Secs: "60",
                                Quarter:
                                  CurrentGame.TimeDistribution === "Halves"
                                    ? half
                                    : quarter,
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
          <div className="modal fade" tabIndex={-1} id="createPossesion_modal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create Possession</h5>
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
                        <input
                          style={{
                            backgroundColor: "primary",
                            width: "100%",
                          }}
                          step="1800"
                          type="time"
                          onChange={(e) => {
                            setTime(e.target.value);
                          }}
                          pattern="[0-9]*"
                          value={Time}
                        />
                        <div
                          className=" px-5 btn btn-bg-light btn-color-gray-600 align-self-center w-200px mb-2 me-2"
                          data-bs-dismiss="modal"
                          onClick={() => {
                            createPossessionF({
                              variables: {
                                GameID: CurrentGame._id,
                                TeamID: CurrentGame?.[team]._id,
                                Time: Time,
                                Quarter:
                                  CurrentGame.TimeDistribution === "Halves"
                                    ? half
                                    : quarter,
                              },
                            });
                          }}
                        >
                          <span className="btn-label">Save</span>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </>
      )}
      {CurrentGame.TimeDistribution === "Quatres" && (
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
      )}
      {CurrentGame.TimeDistribution === "Halves" && (
        <div className={`card ${className} `}>
          {/* begin::Header */}
          <div className="card-header border-0 justify-content-center ">
            <div
              className=" px-5 btn btn-bg-light btn-color-gray-600 align-self-center w-200px mb-2 me-2"
              onClick={() => {
                sethalf(1);
              }}
            >
              <span className="btn-label">First Half</span>
            </div>
            <div
              className=" px-5 btn btn-bg-light btn-color-gray-600 align-self-center w-200px mb-2 me-2"
              onClick={() => {
                sethalf(2);
              }}
            >
              <span className="btn-label">Second Half</span>
            </div>
          </div>
        </div>
      )}
      <div className={`card ${className}`} id="exportTable">
        {/* begin::Header */}
        <div className="card-header border-0 pt-3">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold fs-3 mb-1">
              Quarterly Statistics
            </span>
            <span className="card-label fw-light fs-5 mb-1">
              {CurrentGame.TimeDistribution === "Halves"
                ? "Half " + half
                : "Quarter " + quarter}
            </span>
          </h3>
          <div className=" btn btn-bg-light  btn-color-gray-600 align-self-center">
            <span className="btn-label" onClick={() => generatePDF()}>
              Export{" "}
            </span>
          </div>
          {CurrentGame.ShowTeamStats && CurrentGame.awayTeam._id !== "" && (
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
                {CurrentGame?.awayTeam?.teamName}
              </label>
            </div>
          )}
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
                  <th className="min-w-20px text-end">F</th>
                  <th className="min-w-20px text-end">A</th>
                  <th className="min-w-20px text-end">TO</th>
                  <th className="min-w-20px text-end">BLOCK</th>
                  <th className="min-w-20px text-end">STEAL</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {CurrentGame?.[team].QuarterlyPlayerPlays[
                  (CurrentGame.TimeDistribution === "Halves" ? half : quarter) -
                    1
                ] &&
                  CurrentGame?.[team].QuarterlyPlayerPlays[
                    (CurrentGame.TimeDistribution === "Halves"
                      ? half
                      : quarter) - 1
                  ].map((player: any, index: any) => {
                    console.log(player, "asd");

                    if (
                      !CurrentGame.ShowTeamStats &&
                      auth.auth?.first_name + " " + auth.auth?.last_name ==
                        player.Player
                    ) {
                      FG2 += player.FG2;
                      FT += player.FT;
                      FG3 += player.FG3;
                      PTS += player.PTS;
                      OFF += player.OFF;
                      DEF += player.DEF;
                      TO += player.TO;
                      TOT += player.OFF + player.DEF;
                      PF +=
                        player?.PF +
                        CurrentGame[team]?.PlayerPlays?.find(
                          (item: any) => item._id === player._id
                        )?.TF *
                          2;
                      STEAL += player.STEAL;
                      BLOCK += player.BLOCK;
                      A += player.A;
                      return table(player, index);
                    } else if (CurrentGame.ShowTeamStats) {
                      FG2 += player.FG2;
                      FT += player.FT;
                      FG3 += player.FG3;
                      PTS += player.PTS;
                      OFF += player.OFF;
                      DEF += player.DEF;
                      TO += player.TO;
                      TOT += player.OFF + player.DEF;
                      PF +=
                        player.PF +
                        CurrentGame[team]?.PlayerPlays?.find(
                          (item: any) => item._id === player._id
                        )?.TF *
                          2;
                      STEAL += player.STEAL;
                      BLOCK += player.BLOCK;
                      A += player.A;
                      return table(player, index);
                    }
                  })}
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
                  {CurrentGame[team]?.TimeOuts?.filter(
                    (TimeOuts: any) =>
                      TimeOuts.Quarter ===
                      (CurrentGame.TimeDistribution === "Halves"
                        ? half
                        : quarter)
                  )?.map((TimeOuts: any) => {
                    return (
                      <td>
                        <div className="text-end text-muted">
                          <div className="d-flex justify-content-start flex-column">
                            {TimeOuts.Secs} Secs
                          </div>
                        </div>
                      </td>
                    );
                  })}

                  {EmptyArray.map(() => {
                    return (
                      <td
                        data-bs-toggle={
                          GameActive && auth.auth?.Role === "Coach"
                            ? "modal"
                            : ""
                        }
                        data-bs-target="#createTimeOut_modal"
                      >
                        <div className="text-end text-muted">
                          <div className="d-flex justify-content-start flex-column"></div>
                        </div>
                      </td>
                    );
                  })}
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
                  {CurrentGame[team]?.Possessions?.filter(
                    (Possession: any) =>
                      Possession.Quarter ===
                      (CurrentGame.TimeDistribution === "Halves"
                        ? half
                        : quarter)
                  )?.map((Possession: any) => {
                    return (
                      <td>
                        <div className="text-end text-muted">
                          <div className="d-flex justify-content-start flex-column">
                            {Possession.Time}
                          </div>
                        </div>
                      </td>
                    );
                  })}

                  <td
                    data-bs-toggle={
                      GameActive && auth.auth?.Role === "Coach" ? "modal" : ""
                    }
                    data-bs-target="#createPossesion_modal"
                  >
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
