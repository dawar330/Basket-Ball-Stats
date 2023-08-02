/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";

type Props = {
  className: string;
  description: string;
  Home: String;
  Away: String;
  homeStat: number;
  awayStat: number;
};

const StatisticsWidget6: React.FC<Props> = ({
  className,
  Home,
  Away,
  description,
  homeStat,
  awayStat,
}) => {
  let totalPercentage = homeStat + awayStat;
  const CurrentGame = useSelector((state: any) => state.CurrentGame);

  return (
    <div className={`card  ${className}`}>
      {/* begin::Body */}
      <div className="card-body my-3">
        <a
          href="#"
          className={`card-title fw-bold text-primary fs-5 mb-3 d-block`}
        >
          {description}
        </a>

        <div className="d-flex py-1 justify-content-between">
          <div>
            <span className="text-dark fs-1 fw-bold me-2">
              {homeStat.toFixed(1).toLocaleString()}
            </span>
            <span className="fw-semibold text-muted fs-7">{Home}</span>
          </div>
          {CurrentGame?.awayTeam?.teamName !== "" && (
            <div>
              <span className="fw-semibold text-muted fs-7">{Away}</span>
              <span className="text-dark fs-1 fw-bold ms-2">
                {awayStat.toFixed(1).toLocaleString()}
              </span>
            </div>
          )}
        </div>

        <div className={`progress h-7px bg-info  mt-7`}>
          <div
            className={`progress-bar bg-primary`}
            role="progressbar"
            style={{ width: `${(homeStat * 100) / totalPercentage}%` }}
          />
        </div>
      </div>
      {/* end:: Body */}
    </div>
  );
};

export { StatisticsWidget6 };
