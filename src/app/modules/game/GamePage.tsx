import React, { useEffect, useState, useRef } from "react";
import { Navigate, Route, Routes, Outlet, useParams } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { GameTable } from "../../../_metronic/partials/widgets/tables/GameTable";
import { GameOverview } from "./components/GameOverview";
import { GameHeader } from "./GameHeader";
import { PlayerStats } from "./PlayerStats";
import { GameLeaders } from "./GameLeaders";
import { TeamStats } from "./TeamStats";
import { CommentsPage } from "./CommentsPage";
import { QuarterlyTable } from "../../../_metronic/partials/widgets/tables/QuarterlyTable";
import { GameRules } from "./components/settings/cards/GameRules";
import {
  getGamePlay,
  getGamePlaysByPlayer,
  getGamePossession,
  getGameTimeOuts,
  getQuarterlyGamePlaysByPlayer,
  getScoringGamePlay,
} from "./core/request";
import { useQuery } from "@apollo/client";
import {
  upsertPlayerPlays,
  upsertPlays,
  upsertPossessions,
  upsertQuarterlyPlayerPlays,
  upsertScoringGamePlay,
  upsertTimeOuts,
} from "../../../Redux/CurrectGame";
import { useDispatch } from "react-redux";
const GamePage: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const { id: game_ID } = useParams();
  const gameBreadCrumbs: Array<PageLink> = [
    {
      title: "Game",
      path: `game/${game_ID}/overview`,
      isSeparator: false,
      isActive: false,
    },
  ];
  useEffect(() => {
    setloading(true);
  }, [game_ID]);

  useQuery(getGamePlaysByPlayer, {
    variables: { gameID: game_ID },
    onCompleted: ({ getGamePlaysByPlayer }) => {
      dispatch(upsertPlayerPlays(getGamePlaysByPlayer));
    },
  });

  useQuery(getGameTimeOuts, {
    variables: { gameID: game_ID },
    onError: () => {},
    onCompleted: ({ getGameTimeOuts }) => {
      dispatch(upsertTimeOuts(getGameTimeOuts));
    },
  });
  useQuery(getGamePossession, {
    variables: { gameID: game_ID },
    onError: () => {},
    onCompleted: ({ getGamePossession }) => {
      dispatch(upsertPossessions(getGamePossession));
    },
  });
  useQuery(getQuarterlyGamePlaysByPlayer, {
    variables: { gameID: game_ID },
    onCompleted: ({ getQuarterlyGamePlaysByPlayer }) => {
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
  const timerRefs = useRef<{
    [key: number]: {
      running: boolean;
      paused: boolean;
      timerId: number | null;
      time: number;
    };
  }>({});
  return (
    <Routes>
      <Route
        element={
          <>
            <GameHeader
              setloading={setloading}
              loading={loading}
              timerRefs={timerRefs}
            />
            {loading ? (
              <>
                <div className="page-loader">
                  <span className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </span>
                </div>{" "}
              </>
            ) : (
              <Outlet />
            )}
          </>
        }
      >
        <Route
          path="overview"
          element={
            <>
              <PageTitle breadcrumbs={gameBreadCrumbs}>Overview</PageTitle>
              <GameOverview />
            </>
          }
        />
        <Route
          path="gamesheet"
          element={
            <>
              <PageTitle breadcrumbs={gameBreadCrumbs}>Game Sheet</PageTitle>
              <GameTable className="mb-5 mb-xl-8" />
            </>
          }
        />
        <Route
          path="quarterlysheet"
          element={
            <>
              <PageTitle breadcrumbs={gameBreadCrumbs}>
                Quarterly Sheet
              </PageTitle>
              <QuarterlyTable className="mb-5 mb-xl-8" timerRefs={timerRefs} />
            </>
          }
        />
        <Route
          path="playerstats"
          element={
            <>
              <PageTitle breadcrumbs={gameBreadCrumbs}>
                Player Statistics
              </PageTitle>
              <PlayerStats className="mb-5 mb-xl-8" />
            </>
          }
        />

        <Route
          path="teamStats"
          element={
            <>
              <PageTitle breadcrumbs={gameBreadCrumbs}>Team Stats</PageTitle>
              <TeamStats />
            </>
          }
        />
        <Route
          path="leaders"
          element={
            <>
              <PageTitle breadcrumbs={gameBreadCrumbs}>Leaders</PageTitle>
              <GameLeaders />
            </>
          }
        />
        <Route
          path="Settings"
          element={
            <>
              <PageTitle breadcrumbs={gameBreadCrumbs}>Game Rules</PageTitle>
              <GameRules />
            </>
          }
        />
        <Route
          path="comments"
          element={
            <>
              <PageTitle breadcrumbs={gameBreadCrumbs}>Comments</PageTitle>
              <CommentsPage />
            </>
          }
        />
        <Route index element={<Navigate to={`game/${game_ID}/overview`} />} />
      </Route>
    </Routes>
  );
};

export default GamePage;
