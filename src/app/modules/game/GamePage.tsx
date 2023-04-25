import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { GameTable } from "../../../_metronic/partials/widgets/tables/GameTable";
import { Settings } from "../accounts/components/settings/Settings";
import { GameOverview } from "./components/GameOverview";
import { GameHeader } from "./GameHeader";
import { PlayerStats } from "./PlayerStats";
import { GameLeaders } from "./GameLeaders";
import { TeamStats } from "./TeamStats";
import { CommentsPage } from "./CommentsPage";

const GamePage: React.FC = () => {
  debugger;
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
            <GameHeader Home={Home} Away={Away} />
            <Outlet />
          </>
        }
      >
        <Route
          path="overview"
          element={
            <>
              <PageTitle breadcrumbs={gameBreadCrumbs}>Overview</PageTitle>
              <GameOverview Home={Home} Away={Away} />
            </>
          }
        />
        <Route
          path="gamesheet"
          element={
            <>
              <PageTitle breadcrumbs={gameBreadCrumbs}>Game Sheet</PageTitle>
              <GameTable className="mb-5 mb-xl-8" Home={Home} Away={Away} />
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
              <PlayerStats className="mb-5 mb-xl-8" Home={Home} Away={Away} />
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
