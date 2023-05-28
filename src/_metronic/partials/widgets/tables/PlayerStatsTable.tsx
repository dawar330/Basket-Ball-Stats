/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Dispatch, SetStateAction } from "react";
import { KTSVG } from "../../../helpers";
import { useSelector } from "react-redux";
import { useAuth } from "../../../../app/modules/auth";

type Props = {
  className: string;
  setSelectedPlayer: Dispatch<SetStateAction<string>>;
  SelectedPlayer: string;
  team: string;
};

const PlayerStatsTable: React.FC<Props> = ({
  className,
  setSelectedPlayer,
  SelectedPlayer,
  team,
}) => {
  const CurrentGame = useSelector((state: any) => state.CurrentGame);
  let playerPlays = CurrentGame[team].PlayerPlays.find(
    (stats: any) => stats.Player === SelectedPlayer
  );

  const auth = useAuth();

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        {auth.auth?.Role !== "Player" && (
          <div className="mr-2">
            <button
              onClick={() => {
                setSelectedPlayer("");
              }}
              type="button"
              className="btn btn-lg btn-light-primary me-3"
              data-kt-stepper-action="previous"
            >
              <KTSVG
                path="/media/icons/duotune/arrows/arr063.svg"
                className="svg-icon-4 me-1"
              />
              Back
            </button>
          </div>
        )}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">
            {auth.auth?.Role === "Player"
              ? "My  Statistics"
              : "Player Statistics"}
          </span>
        </h3>
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
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="d-flex justify-content-start flex-column">
                      {SelectedPlayer}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays
                        ? playerPlays.FG2 + "-" + playerPlays.FGA2
                        : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays
                        ? playerPlays.FG3 + "-" + playerPlays.FGA3
                        : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays
                        ? playerPlays.FT + "-" + playerPlays.FT
                        : "-"}
                    </div>
                  </div>
                </td>
                <td className="border border-dashed border-gray-300 px-2">
                  <div className="text-end  ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.PTS : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.OFF : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.DEF : "-"}
                    </div>
                  </div>
                </td>
                <td className="border border-dashed border-gray-300 px-2">
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.DEF + playerPlays.OFF : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.PF : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.A : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.TO : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.BLOCK : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.STEAL : "-"}
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-primary">
                <td style={{ borderBottomStyle: "hidden" }}>
                  <div className="d-flex align-items-center">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>

                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      VERSUS
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td className="border border-dashed border-gray-300 px-2">
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      FINAL SCORE
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td className="border border-dashed border-gray-300 px-2">
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      RESULT
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      WIN I LOSS
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
              </tr>
              <tr className="text-muted">
                <td style={{ borderBottomStyle: "hidden" }}>
                  <div className="d-flex align-items-center">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>

                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.FG2 : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.FG3 : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.FT : "-"}
                    </div>
                  </div>
                </td>
                <td className="border border-dashed border-gray-300 px-2">
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.PTS : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.OFF : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.DEF : "-"}
                    </div>
                  </div>
                </td>
                <td className="border border-dashed border-gray-300 px-2">
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.OFF + playerPlays.DEF : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.PF : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.A : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.TO : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.BLOCK : "-"}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-end ">
                    <div className="d-flex justify-content-start flex-column">
                      {playerPlays ? playerPlays.STEAL : "-"}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ borderBottomStyle: "hidden" }}>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>

                <td style={{ borderBottomStyle: "hidden" }}>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td style={{ borderBottomStyle: "hidden" }}>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td style={{ borderBottomStyle: "hidden" }}>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td className="border border-dashed border-gray-300 px-2">
                  <div className="text-end text-primary">
                    <div className="d-flex justify-content-start flex-column">
                      Time Outs:
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
              <tr>
                <td style={{ borderBottomStyle: "hidden" }}>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td style={{ borderBottomStyle: "hidden" }}>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td style={{ borderBottomStyle: "hidden" }}>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td style={{ borderBottomStyle: "hidden" }}>
                  <div className="text-end text-muted">
                    <div className="d-flex justify-content-start flex-column"></div>
                  </div>
                </td>
                <td className="border border-dashed border-gray-300 px-2">
                  <div className="text-end text-primary">
                    <div className="d-flex justify-content-start flex-column">
                      Qtr/Time:
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
              <tr>
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
                <td className="border border-dashed border-gray-300 px-2">
                  <div className="text-end text-primary">
                    <div className="d-flex justify-content-start flex-column">
                      Possession:
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
  );
};

export { PlayerStatsTable };
