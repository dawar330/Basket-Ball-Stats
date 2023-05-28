/* eslint-disable jsx-a11y/anchor-is-valid */

import { StatisticsWidget6 } from "../../../_metronic/partials/widgets";
import { useSelector } from "react-redux";

export function TeamStats() {
  const CurrentGame = useSelector((state: any) => state.CurrentGame);

  let homePts = 0;
  let awayPts = 0;
  let homeFG = 0;
  let awayFG = 0;
  let homeFGCount = 0;
  let awayFGCount = 0;
  let homeFTCount = 0;
  let awayFTCount = 0;
  let homeFT = 0;
  let awayFT = 0;
  let home3p = 0;
  let away3p = 0;
  let home3pCount = 0;
  let away3pCount = 0;
  let homeRebounds = 0;
  let awayRebounds = 0;
  let homeReboundsDEF = 0;
  let awayReboundsDEF = 0;
  let homeReboundsOFF = 0;
  let awayReboundsOFF = 0;
  let homeAssists = 0;
  let awayAssists = 0;
  let homeTO = 0;
  let awayTO = 0;
  let homeF = 0;
  let awayF = 0;
  let homeTF = 0;
  let awayTF = 0;
  let homeBlock = 0;
  let awayBlock = 0;
  let homeSteal = 0;
  let awaySteal = 0;
  CurrentGame["homeTeam"].ScoringGamePlays.forEach((play: any) => {
    switch (play.PlayType) {
      case "3-Point":
        homePts += 3;
        home3p += 1;
        homeFG += 1;
        break;
      case "2-Point":
        homePts += 2;
        homeFG += 1;
        break;
      case "Free Throw":
        homePts += 1;
        homeFT += 1;
        break;
    }
  });
  CurrentGame["awayTeam"].ScoringGamePlays.forEach((play: any) => {
    switch (play.PlayType) {
      case "3-Point":
        awayPts += 3;
        away3p += 1;
        awayFG += 1;
        break;
      case "2-Point":
        awayFG += 1;
        awayPts += 2;
        break;
      case "Free Throw":
        awayPts += 1;
        awayFT += 1;
        break;
    }
  });
  CurrentGame["homeTeam"].PlayerPlays.forEach((play: any) => {
    homeFGCount += play.FGA3 + play.FGA2;
    home3pCount += play.FGA3;

    homeFTCount += play.FTA;
    homeRebounds += play.OFF + play.DEF;
    homeReboundsOFF += play.OFF;
    homeReboundsDEF += play.DEF;
    homeAssists += play.A;
    homeBlock += play.BLOCK;
    homeSteal += play.STEAL;
    homeTO += play.TO;
    homeF += play.PF;
  });
  CurrentGame["awayTeam"].PlayerPlays.forEach((play: any) => {
    awayFGCount += play.FGA3 + play.FGA2;
    away3pCount += play.FGA3;

    awayFTCount += play.FTA;
    awayRebounds += play.OFF + play.DEF;
    awayReboundsOFF += play.OF;
    awayReboundsDEF += play.DEF;
    awayAssists += play.A;
    awayBlock += play.BLOCK;
    awaySteal += play.STEAL;
    awayTO += play.TO;
    awayF += play.PF;
  });
  console.log(homeFG, homeFGCount);

  return (
    <>
      <div className="row g-5 g-xl-8">
        <div className="col-xl-4">
          <StatisticsWidget6
            className="card-xl-stretch mb-xl-8"
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            description="Points"
            homeStat={homePts}
            awayStat={awayPts}
          />
        </div>

        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="FG"
            homeStat={homeFG}
            awayStat={awayFG}
          />
        </div>

        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="FG%"
            homeStat={homeFGCount !== 0 ? (homeFG / homeFGCount) * 100 : 0}
            awayStat={awayFGCount !== 0 ? (awayFG / awayFGCount) * 100 : 0}
          />
        </div>

        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="3P"
            homeStat={home3p}
            awayStat={away3p}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="3P%"
            homeStat={home3pCount !== 0 ? (home3p / home3pCount) * 100 : 0}
            awayStat={away3pCount !== 0 ? (away3p / away3pCount) * 100 : 0}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="FT"
            homeStat={homeFT}
            awayStat={awayFT}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="FT%"
            homeStat={homeFTCount !== 0 ? (homeFT / homeFTCount) * 100 : 0}
            awayStat={awayFTCount !== 0 ? (awayFT / awayFTCount) * 100 : 0}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="REBOUNDS"
            homeStat={homeRebounds}
            awayStat={awayRebounds}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="OFFENSIVE REBOUNDS"
            homeStat={homeReboundsOFF}
            awayStat={awayReboundsOFF}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="DEFENSIVE REBOUNDS"
            homeStat={homeReboundsDEF}
            awayStat={awayReboundsDEF}
          />
        </div>

        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="ASSISTS"
            homeStat={homeAssists}
            awayStat={awayAssists}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="TURNOVERS"
            homeStat={homeTO}
            awayStat={awayTO}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="BLOCKS"
            homeStat={homeBlock}
            awayStat={awayBlock}
          />
        </div>

        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="STEALS"
            homeStat={homeSteal}
            awayStat={awaySteal}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="PERSONAL FOULS"
            homeStat={homeF}
            awayStat={awayF}
          />
        </div>
        <div className="col-xl-4">
          <StatisticsWidget6
            Home={
              CurrentGame?.homeTeam.teamName
                ? CurrentGame?.homeTeam.teamName
                : ""
            }
            Away={
              CurrentGame?.awayTeam.teamName
                ? CurrentGame?.awayTeam.teamName
                : ""
            }
            className="card-xl-stretch mb-xl-8"
            description="TECHNICAL FOULS"
            homeStat={homeTF}
            awayStat={awayTF}
          />
        </div>
      </div>
    </>
  );
}
