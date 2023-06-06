import React, { useState } from "react";
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
import { Settings } from "./components/settings/Settings";
import { GameRules } from "./components/settings/cards/GameRules";

const GamePage: React.FC = () => {
  const [Home, setHome] = useState("");
  const [Away, setAway] = useState("");
  const { id: game_ID } = useParams();
  const gameBreadCrumbs: Array<PageLink> = [
    {
      title: "Game",
      path: `game/${game_ID}/overview`,
      isSeparator: false,
      isActive: false,
    },
  ];
  return (
    <Routes>
      <Route
        element={
          <>
            <GameHeader />
            <Outlet />
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
              <QuarterlyTable className="mb-5 mb-xl-8" />
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
