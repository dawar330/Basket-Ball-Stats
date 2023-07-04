import { Link } from "react-router-dom";
import { KTSVG } from "../../../../helpers";
import { getGames } from "../../../../../app/modules/game/core/request";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { getAuth } from "../../../../../app/modules/auth";
import { useDispatch, useSelector } from "react-redux";
import { upsertGames } from "../../../../../Redux/Games";

const GamesTab = () => {
  const dispatch = useDispatch();
  useQuery(getGames, {
    onCompleted: ({ getGames }) => {
      debugger;
      dispatch(upsertGames(getGames));
    },
  });
  const { Games } = useSelector((state: any) => state.Games);
  console.log(Games);

  return (
    <div className="m-0">
      {/*begin::Projects*/}
      <div className="m-0">
        {/*begin::Heading*/}
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">Games</h1>
        {/*end::Heading*/}

        {/*begin::Items*/}
        <div className="mb-10 ">
          {Games?.map((Game: any, index: any) => {
            let date = new Date(parseInt(Game.ScheduledDate)).toDateString();

            return (
              <Link
                key={index}
                to={`game/${Game._id}/overview`}
                className="custom-list d-flex align-items-center px-5 py-4 border-bottom "
              >
                {/*begin::Symbol*/}
                <div className="symbol symbol-40px me-5">
                  <KTSVG
                    path="/media/icons/duotune/communication/com001.svg"
                    className="svg-icon-primary svg-icon-2hx"
                  />
                </div>
                {/*end::Symbol*/}

                {/*begin::Description*/}
                <div className="d-flex flex-column flex-grow-1">
                  {/*begin::Title*/}
                  <h5 className="custom-list-title fw-bold text-gray-800 mb-1">
                    {Game.homeTeam.teamName}{" "}
                    {Game.awayTeam && "VS " + Game.awayTeam.teamName}
                  </h5>
                  {/*end::Title*/}

                  {/*begin::Link*/}
                  <span className="text-gray-400 fw-bold">{date}</span>
                  {/*end::Link*/}
                </div>
                {/*begin::Description*/}
              </Link>
            );
          })}
        </div>
        {/*end::Items*/}
      </div>
      {/*end::Projects*/}
    </div>
  );
};

export { GamesTab };
