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

type Props = {
  Home: string;
  Away: string;
};

const GameOverview: React.FC<Props> = ({ Home, Away }) => {
  return (
    <>
      <div className="row g-5 g-xl-8">
        <div className="col-xl-3">
          <StatisticsWidget5
            className="card-xl-stretch mb-xl-8"
            svgIcon="/media/icons/duotune/general/gen014.svg"
            iconColor="primary"
            descriptionColor="primary"
            title="Friday, 17 March 2023"
            description="Start Date"
          />
        </div>

        <div className="col-xl-3">
          <StatisticsWidget5
            className="card-xl-stretch mb-xl-8"
            svgIcon="/media/icons/duotune/general/gen026.svg"
            iconColor="primary"
            descriptionColor="primary"
            title="10:00 PM"
            description="Start Time"
          />
        </div>

        <div className="col-xl-3">
          <StatisticsWidget5
            className="card-xl-stretch mb-xl-8"
            svgIcon="/media/icons/duotune/general/gen013.svg"
            iconColor="primary"
            descriptionColor="primary"
            title="23 MINS"
            description="Match Time"
          />
        </div>

        <div className="col-xl-3">
          <StatisticsWidget5
            className="card-xl-stretch mb-5 mb-xl-8"
            svgIcon="/media/icons/duotune/general/gen012.svg"
            iconColor="primary"
            descriptionColor="primary"
            title="25 MINS"
            description="Remaining Time"
          />
        </div>
      </div>
      <GameOverViewTable Home={Home} Away={Away} className="mb-5 mb-xl-8" />
      <div className="row ">
        <div className="col-xl-6">
          <ListsWidget5
            Home={Home}
            Away={Away}
            className="card-xxl-stretch mb-5 mb-xl-10"
          />
        </div>
        <div className="col-xl-6">
          <ListsWidget3
            Home={Home}
            Away={Away}
            className="card-xl-stretch mb-5 mb-xl-8"
          />
        </div>
      </div>
    </>
  );
};
export { GameOverview };
