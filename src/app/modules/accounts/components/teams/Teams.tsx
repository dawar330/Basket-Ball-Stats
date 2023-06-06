import { Link } from "react-router-dom";
import { TeamCard } from "./cards/TeamCard";
import { useQuery } from "@apollo/client";
import { getTeamsInfo } from "../../../game/core/request";
import { upsertTeams } from "../../../../../Redux/Team";
import { useDispatch, useSelector } from "react-redux";

export function Teams() {
  const { teams } = useSelector((state: any) => state.Teams);

  const dispatch = useDispatch();
  useQuery(getTeamsInfo, {
    onCompleted: ({ getTeamsInfo }) => {
      dispatch(upsertTeams(getTeamsInfo));
    },
  });
  return (
    <>
      <div className="d-flex flex-wrap flex-stack mb-6">
        <h3 className="fw-bolder my-2">My Teams</h3>
        <div className="d-flex align-items-center my-2">
          {/* <Link to="createPlayer" className="me-2">
            <button
              className="btn btn-primary btn-sm"
              data-bs-toggle="tooltip"
              title="Add Player"
            >
              Add Player
            </button>
          </Link> */}
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
        {teams &&
          teams.length &&
          teams?.map((team: any, index: any) => (
            <div className="col-md-6 col-xxl-4" key={index}>
              <TeamCard
                avatar={team.Image}
                name={team.teamName}
                id={team._id}
              />
            </div>
          ))}
      </div>
    </>
  );
}
