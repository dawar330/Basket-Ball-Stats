/* eslint-disable react/jsx-no-target-blank */
import { FC, useEffect } from "react";
import { KTSVG } from "../../../../helpers";
import { GamesTab } from "./GamesTab";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../app/modules/auth";

type Props = {
  link: string;
};
const SelectedTab: FC<Props> = ({ link }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (link === "subscription") {
      debugger;
      navigate("/Search");
    }
  }, [link]);

  switch (link) {
    case "projects":
      return <GamesTab />;

    case "subscription":
      return <GamesTab />;

    default:
      return <GamesTab />;
  }
};

const TabsBase: FC<Props> = ({ link }) => {
  const { currentUser, auth } = useAuth();
  return (
    <div className="d-flex h-100 flex-column">
      {/* begin::Wrapper */}
      <div
        className="flex-column-fluid hover-scroll-y"
        data-kt-scroll="true"
        data-kt-scroll-activate="true"
        data-kt-scroll-height="auto"
        data-kt-scroll-wrappers="#kt_aside_wordspace"
        data-kt-scroll-dependencies="#kt_aside_secondary_footer"
        data-kt-scroll-offset="0px"
      >
        {/* begin::Tab content */}
        <div className="tab-content">
          <div
            className="tab-pane fade active show"
            id={`kt_aside_nav_tab_${link}`}
            role="tabpanel"
          >
            <SelectedTab link={link} />
          </div>
        </div>
        {/* end::Tab content */}
      </div>
      {/* end::Wrapper */}
      {/* begin::Footer */}

      {currentUser?.AvailableGames.toString() !== "0" &&
        auth?.Role !== "Player" && (
          <div
            className="flex-column-auto pt-10 px-5"
            id="kt_aside_secondary_footer"
          >
            <Link
              to="createGame"
              className="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
              data-bs-toggle="tooltip"
              data-bs-custom-class="tooltip-dark"
              data-bs-trigger="hover"
              data-bs-offset="0,5"
              data-bs-dismiss-="click"
            >
              <KTSVG
                path="/media/icons/duotune/general/gen041.svg"
                className="svg-icon-muted svg-icon-2hx"
              />
              <span className="btn-label">Create Game</span>
            </Link>
          </div>
        )}

      {/* end::Footer */}
    </div>
  );
};

export { TabsBase };
