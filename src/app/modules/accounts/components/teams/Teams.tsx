import { Link } from "react-router-dom";
import { TeamCard } from "./cards/TeamCard";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { getTeams } from "../../../game/core/request";

export function Teams() {
  const [teams, setteams] = useState<
    [
      {
        _id: string;
        teamName: string;
        teamCity: string;
        Image: string;
        Players: [string];
      }
    ]
  >();
  useQuery(getTeams, {
    onCompleted: ({ getTeams }) => {
      debugger;
      setteams(getTeams);
    },
  });
  return (
    <>
      <div className="d-flex flex-wrap flex-stack mb-6">
        <h3 className="fw-bolder my-2">My Teams</h3>
        <div className="d-flex align-items-center my-2">
          <Link to="createPlayer" className="me-2">
            <button
              className="btn btn-primary btn-sm"
              data-bs-toggle="tooltip"
              title="Add Player"
            >
              Add Player
            </button>
          </Link>
          <Link to="createTeam">
            <button
              className="btn btn-primary btn-sm"
              data-bs-toggle="tooltip"
              title="Add Team"
            >
              Add Team
            </button>
          </Link>
        </div>
      </div>
      <div className="row g-6 g-xl-9">
        {teams?.map((team, index) => (
          <div className="col-md-6 col-xxl-4" key={index}>
            <TeamCard
              avatar="/media/avatars/300-6.jpg"
              name={team.teamName}
              id={team._id}
            />
          </div>
        ))}
      </div>
    </>
  );
}
