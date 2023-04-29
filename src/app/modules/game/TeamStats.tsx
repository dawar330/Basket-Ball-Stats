/* eslint-disable jsx-a11y/anchor-is-valid */

import { useParams, Params } from "react-router-dom";
import { StatisticsWidget6 } from "../../../_metronic/partials/widgets";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { getGame } from "./core/request";

interface GameRouteParams extends Params {
  id: string;
}

export function TeamStats() {
  const { id: game_ID } = useParams<GameRouteParams>();
  const [game, setgame] = useState<{
    image: string;
    _id: string;
    homeTeam: {
      _id: string;
      teamName: string;
      teamCity: string;
      Image: string;
      Players: [string];
    };
    awayTeam: {
      _id: string;
      teamName: string;
      teamCity: string;
      Image: string;
      Players: [string];
    };
  }>();

  useQuery(getGame, {
    variables: {
      gameID: game_ID,
    },

    onCompleted: ({ getGame }) => {
      setgame(getGame);
    },
  });
  return (
    <>
      <div className="row g-5 g-xl-8">
        <div className="col-xl-4">
          <StatisticsWidget6
            className="card-xl-stretch mb-xl-8"
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            description="Points"
            homeStat={20}
            awayStat={25}
          />
        </div>

        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="FG"
            homeStat={10}
            awayStat={23}
          />
        </div>

        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="FG%"
            homeStat={11}
            awayStat={16}
          />
        </div>

        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="3P"
            homeStat={1}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="3P%"
            homeStat={10}
            awayStat={7}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="FT"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="FT%"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="REBOUNDS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="OFFENSIVE REBOUNDS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="DEFENSIVE REBOUNDS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="TIES"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="LEAD CHANGES"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="TIME WITH LEAD"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="LEAD % OF GAME"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="LAST LEAD"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="LAST LEAD: TIME"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="LARGEST LEAD"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="LARGEST LEAD: SCORE"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="LARGEST LEAD: TIME"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="ASSISTS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="TURNOVERS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="BENCH POINTS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="BLOCKS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="ON COURT POINTS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="FASTBREAK POINTS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="STEALS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="POINTS OFF TURNOVERS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="POINTS IN THE PAINT"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="SECOND CHANCE POINTS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="PERSONAL FOULS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
            className="card-xl-stretch mb-xl-8"
            description="TECHNICAL FOULS"
            homeStat={10}
            awayStat={6}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={game?.homeTeam.teamName ? game?.homeTeam.teamName : ""}
            Away={game?.awayTeam.teamName ? game?.awayTeam.teamName : ""}
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
