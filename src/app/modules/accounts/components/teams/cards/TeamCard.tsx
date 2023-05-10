/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from "react";
import { toAbsoluteUrl, KTSVG } from "../../../../../../_metronic/helpers";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getTeamStats } from "../../../../game/core/request";

type Props = {
  color?: string;
  avatar?: string;
  online?: boolean;
  name: string;
  id: string;
};

const TeamCard: FC<Props> = ({
  color = "",
  avatar = "",
  online = false,
  name,
  id,
}) => {
  const [teamStat, setteamStat] = useState<{
    points: string;
    rebounds: string;
    assists: string;
    steals: string;
  }>();
  const navigate = useNavigate();
  useQuery(getTeamStats, {
    variables: {
      teamID: id,
    },
    onError: (e) => {
      console.log(e);
      debugger;
    },
    onCompleted: ({ getTeamStats }) => {
      debugger;
      setteamStat(getTeamStats);
    },
  });
  return (
    <div className="card">
      <div className="card-body d-flex flex-center flex-column p-9">
        <div className="mb-5">
          <div className="symbol symbol-75px symbol-circle">
            {color ? (
              <span
                className={`symbol-label bg-light-${color} text-${color} fs-5 fw-bolder`}
              >
                {name.charAt(0)}
              </span>
            ) : (
              <img alt="Pic" src={toAbsoluteUrl(avatar)} />
            )}
            {online && (
              <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3"></div>
            )}
          </div>
        </div>

        <a
          href="#"
          className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
        >
          {name}
        </a>

        <div className="fw-bold text-gray-400 mb-6">{}</div>

        <div className="d-flex flex-center flex-wrap mb-5">
          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
            <div className="fs-6 fw-bolder text-gray-700">
              {teamStat?.points}
            </div>
            <div className="fw-bold text-gray-400">Points</div>
          </div>

          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
            <div className="fs-6 fw-bolder text-gray-700">
              {teamStat?.rebounds}
            </div>
            <div className="fw-bold text-gray-400">Rebounds</div>
          </div>
        </div>
        <div className="d-flex flex-center flex-wrap mb-5">
          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
            <div className="fs-6 fw-bolder text-gray-700">
              {teamStat?.assists}
            </div>
            <div className="fw-bold text-gray-400">Assists</div>
          </div>

          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
            <div className="fs-6 fw-bolder text-gray-700">
              {teamStat?.steals}
            </div>
            <div className="fw-bold text-gray-400">Steals</div>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/account/teams/editTeam/2");
          }}
          className="btn btn-sm btn-light"
        >
          <KTSVG
            path="/media/icons/duotune/art/art003.svg"
            className="svg-icon-3"
          />
          Edit
        </div>
      </div>
    </div>
  );
};

export { TeamCard };
