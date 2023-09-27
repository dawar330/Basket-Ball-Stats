/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";
import { Link, useLocation, useParams, Params } from "react-router-dom";
import { StartGame, EndGame, getGame } from "./core/request";
import { useMutation, useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { upsertGame } from "../../../Redux/CurrectGame";
import { useAuth } from "../auth";
import Stopwatch from "../../../_metronic/partials/widgets/tables/StopWatch";

interface GameRouteParams extends Params {
  id: string;
}
interface MyComponentProps {
  setloading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  timerRefs: React.MutableRefObject<{
    [key: number]: {
      running: boolean;
      paused: boolean;
      timerId: number | null;
      time: number;
    };
  }>;
}

const GameHeader: React.FC<MyComponentProps> = ({
  loading,
  setloading,
  timerRefs,
}) => {
  const dispatch = useDispatch();
  const CurrentGame = useSelector((state: any) => state.CurrentGame);

  const { id: game_ID } = useParams<GameRouteParams>();

  let GameEnded = CurrentGame.endTime ? true : false;
  let GameStarted = CurrentGame.startTime ? true : false;
  let GameActive = GameStarted && !GameEnded;

  let [startGame] = useMutation(StartGame, {
    variables: { gameID: game_ID },
  });

  let [endGame] = useMutation(EndGame, {
    variables: { gameID: game_ID },
  });

  useQuery(getGame, {
    variables: {
      gameID: game_ID,
    },

    onCompleted: async ({ getGame }) => {
      dispatch(upsertGame(getGame));
      setloading(false);
    },
  });

  const location = useLocation();

  const auth = useAuth();

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-body pt-9 pb-0">
        <div className={`d-flex justify-content-between flex-sm-nowrap ${CurrentGame.awayTeam._id !== "" ? 'gap-3 flex-wrap': 'gap-3'}`}>
          <div className="flex-wrap flex-sm-nowrap mb-3 order-1">
            <div className="mb-4">
              <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                <img
                  src={
                    CurrentGame?.homeTeam.Image !== ""
                      ? toAbsoluteUrl(CurrentGame?.homeTeam.Image)
                      : toAbsoluteUrl("/media/avatars/blank.png")
                  }
                  alt="CourtIntel"
                />
                <div
                  className={`position-absolute translate-middle bottom-0 start-100 mb-6  rounded-circle border border-4 border-white h-20px w-20px`}
                  style={{
                    backgroundColor: CurrentGame?.homeTeam.Color,
                  }}
                ></div>
              </div>
            </div>

            <div className="flex-grow-1 d-none">
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
                <div className="d-flex flex-column flex-grow-1">
                  <div className="d-flex flex-wrap">
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="fs-2 fw-bolder">
                          {" "}
                          {CurrentGame?.homeTeam?.TotalScore}
                        </div>
                      </div>

                      <div className="fw-bold fs-6 text-dark">Points</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {auth.auth?.Role === "Coach" && !loading && (
            <Stopwatch gameId={game_ID} timerRefs={timerRefs} />


          {CurrentGame.awayTeam._id !== "" && (
            <div className="d-flex flex-wrap flex-sm-nowrap mb-3 order-3">
              <div className=" order-sm-1 order-md-2 mb-4">
                <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                  <div
                    className="position-absolute translate-middle bottom-0  start-0 mb-6  rounded-circle border border-4 border-white h-20px w-20px"
                    style={{
                      backgroundColor: CurrentGame?.awayTeam.Color,
                    }}
                  ></div>
                  <img
                    src={
                      CurrentGame?.homeTeam.Image !== ""
                        ? toAbsoluteUrl(CurrentGame?.homeTeam.Image)
                        : toAbsoluteUrl("/media/avatars/blank.png")
                    }
                    alt="CourtIntel"
                  />
                </div>
              </div>

              <div className="flex-grow-1 mr-7 d-none">
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

                        <div className="fw-bold fs-6 text-dark">Points</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {!GameEnded && auth.auth?.Role === "Coach" && (
          <div
            className="flex-column-auto pt-10"
            id="kt_aside_secondary_footer"
          >
            <div
              className="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100 mb-2"
              onClick={() => {
                if (!GameActive) startGame();
                else endGame();
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
                  `nav-link text-active-primary text-dark me-6 ` +
                  (location.pathname === `/game/${game_ID}/overview` &&
                    "active")
                }
                to={`/game/${game_ID}/overview`}
              >
                {auth.auth?.Role === "Player" ? "My Stats" : "Overview"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary text-dark me-6 ` +
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
                  `nav-link text-active-primary text-dark me-6 ` +
                  (location.pathname === `/game/${game_ID}/quarterlysheet` &&
                    "active")
                }
                to={`/game/${game_ID}/quarterlysheet`}
              >
                Quarterly Sheet
              </Link>
            </li>

            {CurrentGame.ShowTeamStats && (
              <li className="nav-item">
                <Link
                  className={
                    `nav-link text-active-primary text-dark me-6 ` +
                    (location.pathname === `/game/${game_ID}/teamStats` &&
                      "active")
                  }
                  to={`/game/${game_ID}/teamStats`}
                >
                  Team Stats
                </Link>
              </li>
            )}

            {auth.auth?.Role === "Coach" && (
              <li className="nav-item">
                <Link
                  className={
                    `nav-link text-active-primary text-dark me-6 ` +
                    (location.pathname === `/game/${game_ID}/leaders` &&
                      "active")
                  }
                  to={`/game/${game_ID}/leaders`}
                >
                  Leaders
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary text-dark me-6 ` +
                  (location.pathname === `/game/${game_ID}/playerstats` &&
                    "active")
                }
                to={`/game/${game_ID}/playerstats`}
              >
                {!CurrentGame.ShowTeamStats
                  ? "My Statistics"
                  : "Player Statistics"}
              </Link>
            </li>
            {auth.auth?.Role === "Coach" && (
              <li className="nav-item">
                <Link
                  className={
                    `nav-link text-active-primary text-dark me-6 ` +
                    (location.pathname === `/game/${game_ID}/Settings` &&
                      "active")
                  }
                  to={`/game/${game_ID}/Settings`}
                >
                  Game Rules
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary text-dark me-6 ` +
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
