import { Link } from "react-router-dom";
import { KTSVG, toAbsoluteUrl } from "../../../../helpers";
import { Dropdown1, Search } from "../../../../partials";

const games: ReadonlyArray<{
  image: string;
  game_ID: Number;
  home: string;
  away: string;
}> = [
  {
    image: "/media/svg/brand-logos/bebo.svg",
    game_ID: 1,
    home: "Michigan",
    away: "Ohio",
  },
  {
    image: "/media/svg/brand-logos/vimeo.svg",
    game_ID: 2,
    home: "Colorado",
    away: "Ohio",
  },
  {
    image: "/media/svg/brand-logos/kickstarter.svg",
    game_ID: 3,
    home: "Michigan",
    away: "Ohio",
  },
];

const GamesTab = () => {
  return (
    <div className="m-0">
      {/*begin::Projects*/}
      <div className="m-0">
        {/*begin::Heading*/}
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">Games</h1>
        {/*end::Heading*/}

        {/*begin::Items*/}
        <div className="mb-10">
          {games.map((p, index) => (
            <Link
              key={index}
              to={`game/${p.game_ID}/overview`}
              className="custom-list d-flex align-items-center px-5 py-4"
            >
              {/*begin::Symbol*/}
              <div className="symbol symbol-40px me-5">
                <span className="symbol-label">
                  <img
                    src={toAbsoluteUrl(p.image)}
                    alt={p.home}
                    className="h-50 align-self-center"
                  />
                </span>
              </div>
              {/*end::Symbol*/}

              {/*begin::Description*/}
              <div className="d-flex flex-column flex-grow-1">
                {/*begin::Title*/}
                <h5 className="custom-list-title fw-bold text-gray-800 mb-1">
                  {p.home}
                </h5>
                {/*end::Title*/}

                {/*begin::Link*/}
                <span className="text-gray-400 fw-bold">VS {p.away}</span>
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
