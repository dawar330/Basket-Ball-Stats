/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Card2 } from "../../../_metronic/partials/content/cards/Card2";
import { PlayerStatsTable } from "../../../_metronic/partials/widgets/tables/PlayerStatsTable";
import { useQuery } from "@apollo/client";
import { getTeamPlayers } from "./core/request";
import { useSelector } from "react-redux";

type Props = {
  className: string;
};

const PlayerStats: React.FC<Props> = ({ className }) => {
  const [TeamCheckBox, setTeamCheckBox] = useState(false);
  const [SelectedPlayer, setSelectedPlayer] = useState("");

  const [Players, setPlayers] = useState<
    [
      {
        fname: string;
        lname: string;
      }
    ]
  >();
  const CurrentGame = useSelector((state: any) => state.CurrentGame);

  useQuery(getTeamPlayers, {
    variables: {
      teamID: !TeamCheckBox
        ? CurrentGame?.homeTeam._id
        : CurrentGame?.awayTeam._id,
    },

    onCompleted: ({ getTeamPlayers }) => {
      setPlayers(getTeamPlayers);
    },
  });

  return (
    <>
      {SelectedPlayer == "" ? (
        <>
          <div className={className}>
            <div className="d-flex w-100 justify-content-center my-5"> </div>
            {/* begin::Header */}
            <div className="d-flex justify-content-between border-0 pt-3 mb-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold fs-3 mb-1">
                  Players Statistics
                </span>
              </h3>
              <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                <label
                  className={`form-check-label fs-3  me-4 ${
                    !TeamCheckBox ? "fw-bold text-primary" : " text-muted"
                  }`}
                >
                  {CurrentGame?.homeTeam.teamName}
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
                  {CurrentGame?.awayTeam.teamName}
                </label>
              </div>
            </div>
            {/* end::Header */}

            {/* begin::Body */}

            <div className="card-body row g-6 g-xl-9">
              {Players?.map((Player, index) => {
                return (
                  <div className="col-md-6 col-xl-4" key={index}>
                    <Card2
                      icon="\media\icons\duotune\general\james.png"
                      badgeColor="primary"
                      status="In Progress"
                      statusColor="primary"
                      title={Player.fname + " " + Player.lname}
                      description="CRM App application to HR efficiency"
                      date="November 10, 2021"
                      budget="$284,900.00"
                      progress={50}
                      setSelectedPlayer={setSelectedPlayer}
                      team={!TeamCheckBox ? "homeTeam" : "awayTeam"}
                    />
                  </div>
                );
              })}
            </div>
            {/* begin::Body */}
          </div>
        </>
      ) : (
        <PlayerStatsTable
          setSelectedPlayer={setSelectedPlayer}
          SelectedPlayer={SelectedPlayer}
          team={!TeamCheckBox ? "homeTeam" : "awayTeam"}
          className="mb-5 mb-xl-8"
        />
      )}
    </>
  );
};

export { PlayerStats };
