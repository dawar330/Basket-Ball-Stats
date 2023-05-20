/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";
import { Link, useLocation, useParams, Params } from "react-router-dom";
import {
  StartGame,
  getGame,
  getGamePlay,
  getGamePlaysByPlayer,
  getQuarterlyGamePlaysByPlayer,
  getScoringGamePlay,
} from "./core/request";
import { useMutation, useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import {
  upsertGame,
  upsertPlayerPlays,
  upsertPlays,
  upsertQuarterlyPlayerPlays,
  upsertScoringGamePlay,
} from "../../../Redux/CurrectGame";

interface GameRouteParams extends Params {
  id: string;
}

const GameHeader: React.FC = () => {
  const dispatch = useDispatch();
  const CurrentGame = useSelector((state: any) => state.CurrentGame);
  console.log(CurrentGame);

  const { id: game_ID } = useParams<GameRouteParams>();

  const [GameActive, setGameActive] = useState(false);
  const [GameEnded, setGameEnded] = useState(false);
  let [startGame] = useMutation(StartGame, {
    variables: { gameID: game_ID },
    onCompleted: () => {
      setGameActive(true);
    },
  });
  useQuery(getGamePlaysByPlayer, {
    variables: { gameID: game_ID },
    onCompleted: ({ getGamePlaysByPlayer }) => {
      dispatch(upsertPlayerPlays(getGamePlaysByPlayer));
    },
  });

  useQuery(getQuarterlyGamePlaysByPlayer, {
    variables: { gameID: game_ID },
    onCompleted: ({ getQuarterlyGamePlaysByPlayer }) => {
      console.log(getQuarterlyGamePlaysByPlayer);

      dispatch(upsertQuarterlyPlayerPlays(getQuarterlyGamePlaysByPlayer));
    },
  });

  useQuery(getGamePlay, {
    variables: {
      gameID: game_ID,
    },

    onCompleted: ({ getGamePlay }) => {
      dispatch(upsertPlays(getGamePlay));
    },
  });
  useQuery(getScoringGamePlay, {
    variables: {
      gameID: game_ID,
    },
    onCompleted: ({ getScoringGamePlay }) => {
      dispatch(upsertScoringGamePlay(getScoringGamePlay));
    },
  });
  useQuery(getGame, {
    variables: {
      gameID: game_ID,
    },

    onCompleted: async ({ getGame }) => {
      dispatch(upsertGame(getGame));
      setGameActive(getGame.startTime ? true : false);
      setGameEnded(
        new Date().getTime() -
          new Date(parseInt(getGame.startTime)).getTime() >=
          48 * 60 * 1000
          ? true
          : false
      );
    },
  });

  const location = useLocation();

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-body pt-9 pb-0">
        <div className="d-flex justify-content-between flex-sm-nowrap">
          <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
            <div className="me-7 mb-4">
              <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                <img
                  src={toAbsoluteUrl("/media/teamlogo/teama.jfif")}
                  alt="Metronic"
                />
                <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-warning rounded-circle border border-4 border-white h-20px w-20px"></div>
              </div>
            </div>

            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                    >
                      {CurrentGame?.homeTeam.teamName}
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap flex-stack mt-12">
                <div className="d-flex flex-column flex-grow-1 pe-8">
                  <div className="d-flex flex-wrap">
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="fs-2 fw-bolder">
                          {" "}
                          {CurrentGame?.homeTeam?.TotalScore}
                        </div>
                      </div>

                      <div className="fw-bold fs-6 text-gray-400">Points</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
            <div className=" order-sm-1 order-md-2 mb-4">
              <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                <div className="position-absolute translate-middle bottom-0  start-0 mb-6 bg-primary rounded-circle border border-4 border-white h-20px w-20px"></div>
                <img
                  src={toAbsoluteUrl("/media/teamlogo/teamb.jfif")}
                  alt="Metronic"
                />
              </div>
            </div>

            <div className="flex-grow-1 mr-7">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                    >
                      {CurrentGame?.awayTeam.teamName}
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap flex-stack mt-12">
                <div className="d-flex flex-column flex-grow-1 pe-8">
                  <div className="d-flex flex-wrap">
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4  mb-3">
                      <div className="d-flex align-items-center">
                        <div className="fs-2 fw-bolder">
                          {" "}
                          {CurrentGame?.awayTeam?.TotalScore}
                        </div>
                      </div>

                      <div className="fw-bold fs-6 text-gray-400">Points</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!GameEnded && (
          <div
            className="flex-column-auto pt-10"
            id="kt_aside_secondary_footer"
          >
            <div
              className="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100 mb-2"
              onClick={() => {
                if (!GameActive) startGame();
                else setGameEnded(true);
              }}
            >
              <KTSVG
                path="/media/icons/duotune/general/gen041.svg"
                className="svg-icon-muted svg-icon-2hx"
              />
              <span className="btn-label">
                {!GameActive ? "Start Game" : "End Game"}
              </span>
            </div>
          </div>
        )}

        <div className="d-flex overflow-auto h-55px">
          <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/game/${game_ID}/overview` &&
                    "active")
                }
                to={`/game/${game_ID}/overview`}
              >
                Overview
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/game/${game_ID}/gamesheet` &&
                    "active")
                }
                to={`/game/${game_ID}/gamesheet`}
              >
                Game Sheet
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/game/${game_ID}/quarterlysheet` &&
                    "active")
                }
                to={`/game/${game_ID}/quarterlysheet`}
              >
                Quarterly Sheet
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/game/${game_ID}/teamStats` &&
                    "active")
                }
                to={`/game/${game_ID}/teamStats`}
              >
                Team Stats
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/game/${game_ID}/leaders` && "active")
                }
                to={`/game/${game_ID}/leaders`}
              >
                Leaders
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/game/${game_ID}/playerstats` &&
                    "active")
                }
                to={`/game/${game_ID}/playerstats`}
              >
                Player Statistics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/game/${game_ID}/comments` &&
                    "active")
                }
                to={`/game/${game_ID}/comments`}
              >
                Comments
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { GameHeader };
