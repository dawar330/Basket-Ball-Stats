/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../../../app/modules/auth";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type Props = {
  className: string;
};

const GameTable: React.FC<Props> = ({ className }) => {
  const [TeamCheckBox, setTeamCheckBox] = useState(false);
  const CurrentGame = useSelector((state: any) => state.CurrentGame);
  const auth = useAuth();
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
      length: 7 - (CurrentGame[team]?.TimeOuts?.length || 0),
    })
  );
  const generatePDF = () => {
    const report = new jsPDF();
    const exportTable = document.querySelector(
      "#exportTable"
    ) as HTMLElement | null;

    exportTable &&
      html2canvas(exportTable).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // Adjust the PDF page size to match the canvas
        const pdfWidth = report.internal.pageSize.getWidth();
        const pdfHeight = report.internal.pageSize.getHeight();
        const aspectRatio = canvas.width / canvas.height;
        const pdfImgHeight = pdfWidth / aspectRatio;

        // Add the image of the component to the PDF
        report.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfImgHeight);

        // Save the PDF file
        report.save("exportedComponent.pdf");
      });
  };
  return (
    <>
      {" "}
      <div className="d-flex w-100 justify-content-center my-5"> </div>
      <div className={`card ${className}`} id="exportTable">
        {/* begin::Header */}
        <div className="card-header border-0 pt-3">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold fs-3 mb-1">
              Game Statistics
            </span>
          </h3>
          <div className=" btn btn-bg-light  btn-color-gray-600 align-self-center">
            <span className="btn-label" onClick={() => generatePDF()}>
              Export{" "}
            </span>
          </div>

          {CurrentGame.awayTeam._id !== "" && (
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
                {CurrentGame?.[team].PlayerPlays &&
                  CurrentGame?.[team].PlayerPlays.map(
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
                            <td>
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.FG2 + "-" + player.FGA2}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.FG3 + "-" + player.FGA3}
                                </div>
                              </div>
                            </td>
                            <td>
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
                            <td>
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.OFF}
                                </div>
                              </div>
                            </td>{" "}
                            <td>
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
                            <td>
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.PF}
                                </div>
                              </div>
                            </td>{" "}
                            <td>
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.A}
                                </div>
                              </div>
                            </td>{" "}
                            <td>
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {" "}
                                  {player.TO}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player.BLOCK}
                                </div>
                              </div>
                            </td>{" "}
                            <td>
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
                  {CurrentGame[team]?.TimeOuts?.map((TimeOuts: any) => {
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
                        data-bs-toggle="modal"
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
                  <td style={{ borderBottomStyle: "hidden" }}>
                    <div className="d-flex align-items-center">
                      <div className="d-flex justify-content-start flex-column"></div>
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
                        Qtr/Time:{" "}
                      </div>
                    </div>
                  </td>
                  {CurrentGame[team]?.TimeOuts?.map((TimeOuts: any) => {
                    return (
                      <td>
                        <div className="text-end text-muted">
                          <div className="d-flex justify-content-start flex-column">
                            {TimeOuts.Quarter +
                              " / " +
                              new Date(parseInt(TimeOuts.Time)).getHours() +
                              ":" +
                              new Date(parseInt(TimeOuts.Time)).getMinutes()}
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>{" "}
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
                  {CurrentGame[team]?.Possessions?.map((Possession: any) => {
                    return (
                      <td>
                        <div className="text-end text-muted">
                          <div className="d-flex justify-content-start flex-column">
                            {Possession.Quarter} / {Possession.Time}
                          </div>
                        </div>
                      </td>
                    );
                  })}
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

export { GameTable };
