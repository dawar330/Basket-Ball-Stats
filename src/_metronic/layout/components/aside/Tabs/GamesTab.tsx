import { Link } from "react-router-dom";
import { KTSVG, toAbsoluteUrl } from "../../../../helpers";
import { Dropdown1, Search } from "../../../../partials";
import { getGames } from "../../../../../app/modules/game/core/request";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const GamesTab = () => {
  const [games, setgames] = useState<
    [
      {
        image: string;
        _id: string;
        homeTeam: string;
        awayTeam: string;
      }
    ]
  >();
  useQuery(getGames, {
    onCompleted: ({ getGames }) => {
      setgames(getGames);
    },
  });
  return (
    <div className="m-0">
      {/*begin::Projects*/}
      <div className="m-0">
        {/*begin::Heading*/}
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">Games</h1>
        {/*end::Heading*/}

        {/*begin::Items*/}
        <div className="mb-10">
          {games?.map((p, index) => (
            <Link
              key={index}
              to={`game/${p._id}/overview`}
              className="custom-list d-flex align-items-center px-5 py-4"
            >
              {/*begin::Symbol*/}
              <div className="symbol symbol-40px me-5">
                <span className="symbol-label">
                  <img
                    src={toAbsoluteUrl(p.image)}
                    alt={p.homeTeam}
                    className="h-50 align-self-center"
                  />
                </span>
              </div>
              {/*end::Symbol*/}

              {/*begin::Description*/}
              <div className="d-flex flex-column flex-grow-1">
                {/*begin::Title*/}
                <h5 className="custom-list-title fw-bold text-gray-800 mb-1">
                  {p.homeTeam}
                </h5>
                {/*end::Title*/}

                {/*begin::Link*/}
                <span className="text-gray-400 fw-bold">VS {p.awayTeam}</span>
                {/*end::Link*/}
              </div>
              {/*begin::Description*/}
            </Link>
          ))}
        </div>
        {/*end::Items*/}
      </div>
      {/*end::Projects*/}
    </div>
  );
};

export { GamesTab };
