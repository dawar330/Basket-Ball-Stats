import { Link } from "react-router-dom";
import { TeamCard } from "./cards/TeamCard";

export function Teams() {
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
        <div className="col-md-6 col-xxl-4">
          <TeamCard
            avatar="/media/avatars/300-6.jpg"
            name="Emma Smith"
            position="Center"
            points="$14,560"
            assists="$236,400"
            rebounds="70"
            steals="2"
          />
        </div>
      </div>
    </>
  );
}
