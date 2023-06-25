/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";
import { Link } from "react-router-dom";
import { Dropdown1 } from "../../../_metronic/partials";
import { useLocation } from "react-router";
import { useAuth } from "../auth";
import { useLazyQuery, useQuery } from "@apollo/client";
import { getGamePlayerPlays, getSeasonOverView } from "../game/core/request";

const AccountHeader: React.FC = () => {
  const location = useLocation();
  const [Victories, setVictories] = useState(0);
  const [Defeats, setDefeats] = useState(0);
  const { currentUser, auth } = useAuth();
  const [PlayerStats, setPlayerStats] = useState<{
    FG3: number;
    FGA3: number;
    FG2: number;
    FGA2: number;
    FT: number;
    FTA: number;
    PTS: number;
    OFF: number;
    DEF: number;
    TOT: number;
    PF: number;
    A: number;
    TO: number;
    BLOCK: number;
    STEAL: number;
  }>();

  useQuery(getSeasonOverView, {
    onCompleted: ({ getSeasonOverView }) => {
      setVictories(getSeasonOverView.Win);
      setDefeats(getSeasonOverView.Loss);
    },
  });

  const [getGamePlayerPlaysF] = useLazyQuery(getGamePlayerPlays, {
    onCompleted: ({ getGamePlayerPlays }) => {
      setPlayerStats(getGamePlayerPlays);
    },
  });
  React.useEffect(() => {
    if (auth?.Role === "Player") getGamePlayerPlaysF();
  }, []);

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-body pt-9 pb-0">
        <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
          <div className="me-7 mb-4">
            <div className="symbol symbol-100px symbol-lg-160px symbol-fixed ">
              <img
                src={
                  currentUser?.avatar !== ""
                    ? currentUser?.avatar
                    : toAbsoluteUrl("/media/avatars/blank.png")
                }
                alt="CourtIntel"
              />
            </div>
          </div>

          <div className="flex-grow-1">
            <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center mb-2">
                  <a
                    href="#"
                    className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                  >
                    {currentUser?.fname} {currentUser?.lname}
                  </a>
                  <a href="#">
                    <KTSVG
                      path="/media/icons/duotune/general/gen026.svg"
                      className="svg-icon-1 svg-icon-primary"
                    />
                  </a>

                  <a
                    href="#"
                    className="btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_upgrade_plan"
                  >
                    Upgrade to Pro
                  </a>
                </div>

                <div className="d-flex flex-wrap fw-bold fs-6  pe-2">
                  <a
                    href="#"
                    className="d-flex align-items-center text-gray-400 text-hover-primary me-5 "
                  >
                    <KTSVG
                      path="/media/icons/duotune/general/gen017.svg"
                      className="svg-icon-4 me-1"
                    />
                    {auth?.Role}
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center text-gray-400 text-hover-primary "
                  >
                    <KTSVG
                      path="/media/icons/duotune/communication/com011.svg"
                      className="svg-icon-4 me-1"
                    />
                    {currentUser?.email}
                  </a>
                </div>
              </div>

              {/* <div className="d-flex my-4">
                <a
                  href="#"
                  className="btn btn-sm btn-light me-2"
                  id="kt_user_follow_button"
                >
                  <KTSVG
                    path="/media/icons/duotune/arrows/arr012.svg"
                    className="svg-icon-3 d-none"
                  />

                  <span className="indicator-label">Follow</span>
                  <span className="indicator-progress">
                    Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                </a>
                <a
                  href="#"
                  className="btn btn-sm btn-primary me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_offer_a_deal"
                >
                  Hire Me
                </a>
                <div className="me-0">
                  <button
                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                    data-kt-menu-flip="top-end"
                  >
                    <i className="bi bi-three-dots fs-3"></i>
                  </button>
                  <Dropdown1 />
                </div>
              </div> */}
            </div>
            {auth?.Role === "Coach" ? (
              <>
                {" "}
                <div className="text-gray-800 fs-3 fw-bold mb-2">
                  Season Overview
                </div>
                <div className="d-flex flex-wrap flex-stack">
                  <div className="d-flex flex-column flex-grow-1 pe-8">
                    <div className="d-flex flex-wrap">
                      <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                        <div className="d-flex align-items-center">
                          <KTSVG
                            path="/media/icons/duotune/arrows/arr066.svg"
                            className="svg-icon-3 svg-icon-success me-2"
                          />
                          <div className="fs-2 fw-bolder">{Victories}</div>
                        </div>

                        <div className="fw-bold fs-6 text-gray-400">
                          Victories
                        </div>
                      </div>

                      <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                        <div className="d-flex align-items-center">
                          <KTSVG
                            path="/media/icons/duotune/arrows/arr065.svg"
                            className="svg-icon-3 svg-icon-danger me-2"
                          />
                          <div className="fs-2 fw-bolder">{Defeats}</div>
                        </div>

                        <div className="fw-bold fs-6 text-gray-400">
                          Defeats
                        </div>
                      </div>

                      <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                        <div className="d-flex align-items-center">
                          <div className="fs-2 fw-bolder">
                            {Victories === 0 && Defeats === 0
                              ? "--"
                              : (
                                  (Victories / (Victories + Defeats)) *
                                  100
                                ).toFixed(2) + "%"}
                          </div>
                        </div>

                        <div className="fw-bold fs-6 text-gray-400">
                          Success Rate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="d-flex flex-wrap mb-5 justify-content-between">
                <div className=" min-w-90px py-3  mb-3">
                  <div className="text-center fs-3 text-gray-800 fw-bolder">
                    27
                  </div>
                  <div className=" text-center fs-7 fw-bold text-primary ">
                    MINUTES
                  </div>
                </div>
                <div className=" min-w-90px py-3  mb-3">
                  <div className="text-center fs-3 text-gray-800 fw-bolder">
                    {" "}
                    {PlayerStats?.PTS.toString()}
                  </div>
                  <div className="text-center text-primary fs-7 fw-bold text-primary ">
                    Points
                  </div>
                </div>
                <div className=" min-w-90px py-3  mb-3">
                  <div className="text-center fs-3 text-gray-800 fw-bolder">
                    {PlayerStats
                      ? PlayerStats?.FG2 !== 0 || PlayerStats?.FG3 !== 0
                        ? ((PlayerStats?.FG2 + PlayerStats.FG3) /
                            (PlayerStats?.FGA2 + PlayerStats.FGA3)) *
                          100
                        : 0
                      : 0}
                  </div>
                  <div className="text-center text-primary fs-7 fw-bold text-primary ">
                    FG%
                  </div>
                </div>
                <div className=" min-w-90px py-3  mb-3">
                  <div className="text-center fs-3 text-gray-800 fw-bolder">
                    {PlayerStats &&
                      (PlayerStats?.OFF + PlayerStats?.DEF).toString()}
                  </div>
                  <div className="text-center text-primary fs-7 fw-bold text-primary ">
                    REBOUNDS
                  </div>
                </div>
                <div className=" min-w-90px py-3  mb-3">
                  <div className="text-center fs-3 text-gray-800 fw-bolder">
                    {PlayerStats?.A.toString()}
                  </div>
                  <div className="text-center text-primary  fs-7 fw-bold text-primary ">
                    ASSISTS
                  </div>
                </div>
                <div className=" min-w-90px py-3  mb-3">
                  <div className="text-center fs-3 text-gray-800 fw-bolder">
                    {PlayerStats?.STEAL.toString()}
                  </div>
                  <div className="text-center text-primary fs-7 fw-bold text-primary ">
                    STEALS
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="d-flex overflow-auto h-55px">
          <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/account/overview" && "active")
                }
                to="/account/overview"
              >
                Overview
              </Link>
            </li>
            {auth?.Role === "Coach" && (
              <li className="nav-item">
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === "/account/teams" && "active")
                  }
                  to="/account/teams"
                >
                  Teams
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/account/settings" && "active")
                }
                to="/account/settings"
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { AccountHeader };
