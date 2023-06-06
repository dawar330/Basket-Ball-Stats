/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { KTSVG } from "../../../../_metronic/helpers";
import {
  GameOverViewTable,
  ListsWidget3,
  ListsWidget5,
  StatisticsWidget5,
} from "../../../../_metronic/partials/widgets";
import { useSelector } from "react-redux";

function getTimeLeft(startTime: number, durationInMinutes: number): string {
  const endTime = new Date(startTime + durationInMinutes * 60000);
  const currentTime = new Date().getTime();
  const timeDiffInMilliseconds = endTime.getTime() - currentTime;
  const timeDiffInSeconds = Math.floor(timeDiffInMilliseconds / 1000);
  if (timeDiffInSeconds < 0) {
    return "Game Ended";
  } else if (timeDiffInSeconds < 60) {
    return `${timeDiffInSeconds} second(s)`;
  } else {
    const timeDiffInMinutes = Math.floor(timeDiffInSeconds / 60);
    return `${timeDiffInMinutes} minute(s)`;
  }
}
function getTimePassed(startTime: number): string {
  const currentTime = new Date().getTime();
  const timeDiffInSeconds = Math.floor((currentTime - startTime) / 1000);

  if (timeDiffInSeconds < 60) {
    return `${timeDiffInSeconds} second(s)`;
  } else {
    const minutes = Math.floor(timeDiffInSeconds / 60);
    if (minutes >= 48) {
      return "Game Ended";
    } else {
      return `${minutes} minute(s)`;
    }
  }
}

const GameOverview: React.FC = () => {
  const CurrentGame = useSelector((state: any) => state.CurrentGame);

  return (
    <>
      <div className="row g-5 g-xl-8">
        <div className="col-xl-3">
          <StatisticsWidget5
            className="card-xl-stretch mb-xl-8"
            svgIcon="/media/icons/duotune/general/gen014.svg"
            iconColor="primary"
            descriptionColor="primary"
            title={new Date(parseInt(CurrentGame.startTime)).toLocaleDateString(
              "en-US",
              {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
              }
            )}
            description="Start Date"
          />
        </div>

        <div className="col-xl-3">
          <StatisticsWidget5
            className="card-xl-stretch mb-xl-8"
            svgIcon="/media/icons/duotune/general/gen026.svg"
            iconColor="primary"
            descriptionColor="primary"
            title={new Date(
              parseInt(CurrentGame.startTime)
            ).toLocaleTimeString()}
            description="Start Time"
          />
        </div>

        <div className="col-xl-3">
          <StatisticsWidget5
            className="card-xl-stretch mb-xl-8"
            svgIcon="/media/icons/duotune/general/gen013.svg"
            iconColor="primary"
            descriptionColor="primary"
            title={getTimePassed(parseInt(CurrentGame.startTime))}
            description="Match Time"
          />
        </div>

        <div className="col-xl-3">
          <StatisticsWidget5
            className="card-xl-stretch mb-5 mb-xl-8"
            svgIcon="/media/icons/duotune/general/gen012.svg"
            iconColor="primary"
            descriptionColor="primary"
            title={getTimeLeft(parseInt(CurrentGame.startTime), 48)}
            description="Remaining Time"
          />
        </div>
      </div>
      <GameOverViewTable className="mb-5 mb-xl-8" />
      <div className="row ">
        <div className="col-xl-6">
          <ListsWidget5 className="card-xxl-stretch mb-5 mb-xl-10" />
        </div>
        <div className="col-xl-6">
          <ListsWidget3 className="card-xl-stretch mb-5 mb-xl-8" />
        </div>
      </div>
    </>
  );
};
export { GameOverview };
