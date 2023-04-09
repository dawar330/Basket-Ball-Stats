import React from "react";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { Overview } from "./components/Overview";
import { Settings } from "./components/settings/Settings";
import { AccountHeader } from "./AccountHeader";
import { Teams } from "./components/teams/Teams";
import { CreateTeamStepper } from "./components/teams/CreateTeamStepper";
import { CreatePlayerStepper } from "./components/teams/CreatePlayerStepper";
import { ProfileDetails } from "./components/settings/cards/ProfileDetails";
import { TeamDetails } from "./components/teams/teamDetails";

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: "Account",
    path: "/account/overview",
    isSeparator: false,
    isActive: false,
  },
];

const AccountPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <AccountHeader />
            <Outlet />
          </>
        }
      >
        <Route
          path="overview"
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
              <Overview />
            </>
          }
        />
        <Route
          path="teams"
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Teams</PageTitle>
              <Teams />
            </>
          }
        />
        <Route
          path="teams/createTeam"
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>
                Create Team
              </PageTitle>
              <CreateTeamStepper />
            </>
          }
        />
        <Route
          path="teams/editTeam/:id"
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Edit Team</PageTitle>
              <TeamDetails />
            </>
          }
        />
        <Route
          path="teams/createPlayer"
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>
                Create Player
              </PageTitle>
              <CreatePlayerStepper />
            </>
          }
        />

        <Route
          path="settings"
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
              <Settings />
            </>
          }
        />
        <Route index element={<Navigate to="/account/overview" />} />
      </Route>
    </Routes>
  );
};

export default AccountPage;
