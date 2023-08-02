import { lazy, FC, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import AccountPage from "../modules/accounts/AccountPage";
import { CreateTeamStepper } from "../modules/accounts/components/teams/CreateTeamStepper";
import { CreateGameStepper } from "../modules/game/CreateGameStepper";
import SearchPage from "../modules/game/core/SearchPage";

const PrivateRoutes = () => {
  const GamePage = lazy(() => import("../modules/game/GamePage"));

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/account/overview" />} />
        {/* Pages */}
        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route
          path="game/:id/*"
          element={
            <SuspensedView>
              <GamePage />
            </SuspensedView>
          }
        />
        <Route
          path="Search"
          element={
            <SuspensedView>
              <SearchPage />
            </SuspensedView>
          }
        />
        Search
        <Route
          path="account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path="createGame"
          element={
            <SuspensedView>
              <CreateGameStepper />
            </SuspensedView>
          }
        />
        {/* Lazy Modules */}
        {/* <Route path="*" element={<Navigate to="/error/404" />} /> */}
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
