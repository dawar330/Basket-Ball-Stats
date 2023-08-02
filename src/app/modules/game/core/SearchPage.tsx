import React from "react";
import { PageLink, PageTitle } from "../../../../_metronic/layout/core";
import { GameOverview } from "../components/GameOverview";
import {
  TablesWidget1,
  TablesWidget10,
  TablesWidget5,
} from "../../../../_metronic/partials/widgets";

const SearchPage: React.FC = () => {
  const gameBreadCrumbs: Array<PageLink> = [
    {
      title: "Search",
      path: "Search",
      isSeparator: false,
      isActive: false,
    },
  ];

  return (
    <>
      {" "}
      <PageTitle breadcrumbs={gameBreadCrumbs}>Games</PageTitle>
      <div className="row g-5 g-xl-8">
        <TablesWidget5 className="card-xxl-stretch mb-5 mb-xxl-8" />
      </div>
    </>
  );
};

export default SearchPage;
