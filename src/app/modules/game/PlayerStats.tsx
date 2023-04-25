/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Card2 } from "../../../_metronic/partials/content/cards/Card2";
import { PlayerStatsTable } from "../../../_metronic/partials/widgets/tables/PlayerStatsTable";
import { IconUserModel } from "../profile/ProfileModels";

type Props = {
  className: string;
  Home: string;
  Away: string;
};

const PlayerStats: React.FC<Props> = ({ className, Home, Away }) => {
  const [TeamCheckBox, setTeamCheckBox] = useState(false);
  const [SelectedPlayer, setSelectedPlayer] = useState("");
  const users1: Array<IconUserModel> = [
    { name: "Emma Smith", avatar: "/media/avatars/300-6.jpg" },
    { name: "Rudy Stone", avatar: "/media/avatars/300-1.jpg" },
    { name: "Susan Redwood", initials: "S", color: "primary" },
  ];
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

            <div className="card-body row g-6 g-xl-9">
              <div className="col-md-6 col-xl-4">
                <Card2
                  icon="\media\icons\duotune\general\james.png"
                  badgeColor="primary"
                  status="In Progress"
                  statusColor="primary"
                  title="JAMES"
                  description="CRM App application to HR efficiency"
                  date="November 10, 2021"
                  budget="$284,900.00"
                  progress={50}
                  users={users1}
                  setSelectedPlayer={setSelectedPlayer}
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <Card2
                  icon="\media\icons\duotune\general\james.png"
                  badgeColor="primary"
                  status="In Progress"
                  statusColor="primary"
                  title="JAMES"
                  description="CRM App application to HR efficiency"
                  date="November 10, 2021"
                  budget="$284,900.00"
                  progress={50}
                  users={users1}
                  setSelectedPlayer={setSelectedPlayer}
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <Card2
                  icon="\media\icons\duotune\general\james.png"
                  badgeColor="primary"
                  status="In Progress"
                  statusColor="primary"
                  title="JAMES"
                  description="CRM App application to HR efficiency"
                  date="November 10, 2021"
                  budget="$284,900.00"
                  progress={50}
                  users={users1}
                  setSelectedPlayer={setSelectedPlayer}
                />
              </div>
            </div>
            {/* begin::Body */}
          </div>
        </>
      ) : (
        <PlayerStatsTable
          setSelectedPlayer={setSelectedPlayer}
          className="mb-5 mb-xl-8"
        />
      )}
    </>
  );
};

export { PlayerStats };
