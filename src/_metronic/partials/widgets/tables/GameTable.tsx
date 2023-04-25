/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

type Props = {
  className: string;
  Home: string;
  Away: string;
};

const GameTable: React.FC<Props> = ({ className, Home, Away }) => {
  const [TeamCheckBox, setTeamCheckBox] = useState(false);
  const dumyData = [
    {
      Player: "John Doe",
      "FG-FGA": "8-12",
      "FT-FTA": "4-4",
      PTS: 20,
      OFF: 2,
      DEF: 8,
      TOT: 10,
      PF: 3,
      A: 5,
      TO: 2,
      BLOCK: 1,
      STEAL: 3,
    },
    {
      Player: "Jane Smith",
      "FG-FGA": "5-9",
      "FT-FTA": "2-3",
      PTS: 12,
      OFF: 1,
      DEF: 6,
      TOT: 7,
      PF: 2,
      A: 3,
      TO: 1,
      BLOCK: 0,
      STEAL: 2,
    },
    {
      Player: "Bob Johnson",
      "FG-FGA": "3-7",
      "FT-FTA": "1-2",
      PTS: 7,
      OFF: 3,
      DEF: 4,
      TOT: 7,
      PF: 4,
      A: 2,
      TO: 3,
      BLOCK: 2,
      STEAL: 1,
    },
    {
      Player: "LeBron James",
      "FG-FGA": "10-20",
      "FT-FTA": "6-8",
      PTS: 26,
      OFF: 3,
      DEF: 7,
      TOT: 10,
      PF: 2,
      A: 8,
      TO: 3,
      BLOCK: 2,
      STEAL: 1,
    },
    {
      Player: "Kevin Durant",
      "FG-FGA": "12-25",
      "FT-FTA": "4-5",
      PTS: 31,
      OFF: 2,
      DEF: 5,
      TOT: 7,
      PF: 1,
      A: 4,
      TO: 2,
      BLOCK: 3,
      STEAL: 0,
    },
    {
      Player: "Stephen Curry",
      "FG-FGA": "9-17",
      "FT-FTA": "3-3",
      PTS: 25,
      OFF: 1,
      DEF: 4,
      TOT: 5,
      PF: 3,
      A: 9,
      TO: 4,
      BLOCK: 0,
      STEAL: 2,
    },
    {
      Player: "Kawhi Leonard",
      "FG-FGA": "7-14",
      "FT-FTA": "5-6",
      PTS: 20,
      OFF: 1,
      DEF: 9,
      TOT: 10,
      PF: 2,
      A: 3,
      TO: 1,
      BLOCK: 2,
      STEAL: 1,
    },
    {
      Player: "James Harden",
      "FG-FGA": "6-18",
      "FT-FTA": "10-11",
      PTS: 24,
      OFF: 2,
      DEF: 3,
      TOT: 5,
      PF: 3,
      A: 12,
      TO: 5,
      BLOCK: 0,
      STEAL: 3,
    },
    {
      Player: "Giannis Antetokounmpo",
      "FG-FGA": "11-20",
      "FT-FTA": "4-8",
      PTS: 26,
      OFF: 4,
      DEF: 11,
      TOT: 15,
      PF: 1,
      A: 6,
      TO: 4,
      BLOCK: 4,
      STEAL: 2,
    },
    {
      Player: "Russell Westbrook",
      "FG-FGA": "9-21",
      "FT-FTA": "5-7",
      PTS: 23,
      OFF: 4,
      DEF: 8,
      TOT: 12,
      PF: 2,
      A: 10,
      TO: 3,
      BLOCK: 1,
      STEAL: 2,
    },
    {
      Player: "Joel Embiid",
      "FG-FGA": "10-18",
      "FT-FTA": "8-10",
      PTS: 28,
      OFF: 4,
      DEF: 12,
      TOT: 16,
      PF: 4,
      A: 4,
      TO: 2,
      BLOCK: 3,
      STEAL: 0,
    },
    {
      Player: "Luka Doncic",
      "FG-FGA": "11-22",
      "FT-FTA": "6-8",
      PTS: 30,
      OFF: 1,
      DEF: 8,
      TOT: 9,
      PF: 3,
      A: 9,
      TO: 4,
      BLOCK: 0,
      STEAL: 2,
    },
    {
      Player: "Damian Lillard",
      "FG-FGA": "10-19",
      "FT-FTA": "7-8",
      PTS: 31,
      OFF: 0,
      DEF: 4,
      TOT: 4,
      PF: 1,
      A: 10,
      TO: 2,
      BLOCK: 0,
      STEAL: 1,
    },
    {
      Player: "Kyrie Irving",
      "FG-FGA": "9-17",
      "FT-FTA": "3-4",
      PTS: 24,
      OFF: 2,
      DEF: 4,
      TOT: 6,
      PF: 2,
      A: 7,
      TO: 1,
      BLOCK: 0,
      STEAL: 2,
    },
    {
      Player: "Chris Paul",
      "FG-FGA": "6-11",
      "FT-FTA": "4-4",
      PTS: 17,
      OFF: 0,
      DEF: 6,
      TOT: 6,
      PF: 2,
      A: 12,
      TO: 3,
      BLOCK: 0,
      STEAL: 3,
    },
  ];
  const dumyData2 = [
    {
      Player: "Steph Curry",
      "FG-FGA": "8-17",
      "FT-FTA": "5-5",
      PTS: 23,
      OFF: 1,
      DEF: 4,
      TOT: 5,
      PF: 2,
      A: 7,
      TO: 2,
      BLOCK: 0,
      STEAL: 3,
    },
    {
      Player: "Jimmy Butler",
      "FG-FGA": "7-15",
      "FT-FTA": "9-10",
      PTS: 23,
      OFF: 3,
      DEF: 4,
      TOT: 7,
      PF: 2,
      A: 8,
      TO: 3,
      BLOCK: 1,
      STEAL: 4,
    },
    {
      Player: "Donovan Mitchell",
      "FG-FGA": "11-25",
      "FT-FTA": "6-7",
      PTS: 31,
      OFF: 0,
      DEF: 3,
      TOT: 3,
      PF: 3,
      A: 6,
      TO: 2,
      BLOCK: 0,
      STEAL: 2,
    },
    {
      Player: "Devin Booker",
      "FG-FGA": "10-22",
      "FT-FTA": "5-6",
      PTS: 27,
      OFF: 1,
      DEF: 3,
      TOT: 4,
      PF: 1,
      A: 5,
      TO: 2,
      BLOCK: 0,
      STEAL: 1,
    },
    {
      Player: "Trae Young",
      "FG-FGA": "9-20",
      "FT-FTA": "8-9",
      PTS: 28,
      OFF: 0,
      DEF: 4,
      TOT: 4,
      PF: 2,
      A: 11,
      TO: 4,
      BLOCK: 0,
      STEAL: 1,
    },

    {
      Player: "Joel Embiid",
      "FG-FGA": "10-18",
      "FT-FTA": "13-15",
      PTS: 33,
      OFF: 3,
      DEF: 9,
      TOT: 12,
      PF: 2,
      A: 3,
      TO: 3,
      BLOCK: 2,
      STEAL: 1,
    },
    {
      Player: "Kawhi Leonard",
      "FG-FGA": "11-21",
      "FT-FTA": "5-6",
      PTS: 27,
      OFF: 1,
      DEF: 8,
      TOT: 9,
      PF: 3,
      A: 3,
      TO: 2,
      BLOCK: 1,
      STEAL: 2,
    },
    {
      Player: "Giannis Antetokounmpo",
      "FG-FGA": "9-16",
      "FT-FTA": "8-10",
      PTS: 26,
      OFF: 4,
      DEF: 11,
      TOT: 15,
      PF: 4,
      A: 5,
      TO: 4,
      BLOCK: 2,
      STEAL: 2,
    },
    {
      Player: "Damian Lillard",
      "FG-FGA": "9-19",
      "FT-FTA": "7-7",
      PTS: 27,
      OFF: 0,
      DEF: 3,
      TOT: 3,
      PF: 1,
      A: 8,
      TO: 1,
      BLOCK: 0,
      STEAL: 0,
    },
    {
      Player: "Bradley Beal",
      "FG-FGA": "13-25",
      "FT-FTA": "5-5",
      PTS: 31,
      OFF: 0,
      DEF: 2,
      TOT: 2,
      PF: 2,
      A: 4,
      TO: 4,
      BLOCK: 0,
      STEAL: 1,
    },
    {
      Player: "Jaylen Brown",
      "FG-FGA": "9-18",
      "FT-FTA": "4-4",
      PTS: 22,
      OFF: 2,
      DEF: 5,
      TOT: 7,
      PF: 3,
      A: 2,
      TO: 2,
      BLOCK: 1,
      STEAL: 2,
    },
    {
      Player: "Zion Williamson",
      "FG-FGA": "12-18",
      "FT-FTA": "6-8",
      PTS: 30,
      OFF: 3,
      DEF: 9,
      TOT: 12,
      PF: 3,
      A: 2,
      TO: 2,
      BLOCK: 1,
      STEAL: 0,
    },
    {
      Player: "Jimmy Butler",
      "FG-FGA": "7-15",
      "FT-FTA": "9-10",
      PTS: 24,
      OFF: 2,
      DEF: 10,
      TOT: 12,
      PF: 4,
      A: 5,
      TO: 2,
      BLOCK: 1,
      STEAL: 2,
    },
    {
      Player: "Russell Westbrook",
      "FG-FGA": "10-22",
      "FT-FTA": "3-4",
      PTS: 23,
      OFF: 3,
      DEF: 7,
      TOT: 10,
      PF: 2,
      A: 8,
      TO: 5,
      BLOCK: 0,
      STEAL: 2,
    },
    {
      Player: "Devin Booker",
      "FG-FGA": "12-25",
      "FT-FTA": "3-3",
      PTS: 28,
      OFF: 1,
      DEF: 2,
      TOT: 3,
      PF: 2,
      A: 7,
      TO: 3,
      BLOCK: 0,
      STEAL: 1,
    },
  ];

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
      <div className="d-flex w-100 justify-content-center my-5"> </div>
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className="card-header border-0 pt-3">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold fs-3 mb-1">
              Game Statistics
            </span>
          </h3>
          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
            <label
              className={`form-check-label fs-3  me-4 ${
                !TeamCheckBox ? "fw-bold text-primary" : " text-muted"
              }`}
            >
              {Home}HOME
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
              {Away}AWAY
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
                {TeamCheckBox
                  ? dumyData.map((player, index) => {
                      PTS += player.PTS;
                      OFF += player.OFF;
                      DEF += player.DEF;
                      TO += player.TO;
                      TOT += player.TOT;
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
                                  {player["FG-FGA"]}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player["FG-FGA"]}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player["FT-FTA"]}
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
                                  {player.TOT}
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
                    })
                  : dumyData2.map((player, index) => {
                      PTS += player.PTS;
                      OFF += player.OFF;
                      DEF += player.DEF;
                      TO += player.TO;
                      TOT += player.TOT;
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
                                  {player["FG-FGA"]}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player["FG-FGA"]}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-end text-muted">
                                <div className="d-flex justify-content-start flex-column">
                                  {player["FT-FTA"]}
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
                                  {player.TOT}
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
                        {1}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {1}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-end ">
                      <div className="d-flex justify-content-start flex-column">
                        {" "}
                        {1}
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
                  <td colSpan={2}>
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
                  <td colSpan={2}>
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

export { GameTable };
