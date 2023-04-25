/* eslint-disable jsx-a11y/anchor-is-valid */

import { useLocation, useParams, Params } from "react-router-dom";
import { StatisticsWidget6 } from "../../../_metronic/partials/widgets";

const games: ReadonlyArray<{
  image: string;
  game_ID: Number;
  home: string;
  away: string;
}> = [
  {
    image: "/media/svg/brand-logos/bebo.svg",
    game_ID: 1,
    home: "Michigan",
    away: "Ohio",
  },
  {
    image: "/media/svg/brand-logos/vimeo.svg",
    game_ID: 2,
    home: "Colorado",
    away: "Ohio",
  },
  {
    image: "/media/svg/brand-logos/kickstarter.svg",
    game_ID: 3,
    home: "Michigan",
    away: "Ohio",
  },
];
interface GameRouteParams extends Params {
  id: string;
}

export function TeamStats() {
  const location = useLocation();
  const { id: game_ID } = useParams<GameRouteParams>();
  return (
    <>
      <div className="row g-5 g-xl-8">
        <div className="col-xl-4">
          <StatisticsWidget6
            className="card-xl-stretch mb-xl-8"
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            description="Points"
            homeStat={20}
            awayStat={25}
          />
        </div>

        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="FG"
            homeStat={10}
            awayStat={23}
          />
        </div>

        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="FG%"
            homeStat={11}
            awayStat={16}
          />
        </div>

        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="3P"
            homeStat={1}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="3P%"
            homeStat={10}
            awayStat={7}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="FT"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="FT%"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="REBOUNDS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="OFFENSIVE REBOUNDS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="DEFENSIVE REBOUNDS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="TIES"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="LEAD CHANGES"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="TIME WITH LEAD"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="LEAD % OF GAME"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="LAST LEAD"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="LAST LEAD: TIME"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="LARGEST LEAD"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="LARGEST LEAD: SCORE"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="LARGEST LEAD: TIME"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="ASSISTS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="TURNOVERS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="BENCH POINTS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="BLOCKS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="ON COURT POINTS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="FASTBREAK POINTS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="STEALS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="POINTS OFF TURNOVERS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="POINTS IN THE PAINT"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="SECOND CHANCE POINTS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="PERSONAL FOULS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="TECHNICAL FOULS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={games[parseInt(game_ID!) - 1].home}
            Away={games[parseInt(game_ID!) - 1].away}
            className="card-xl-stretch mb-xl-8"
            description="POSSESSIONS"
            homeStat={10}
            awayStat={6}
          />
        </div>
      </div>
    </>
  );
}
