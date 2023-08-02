/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getAllGames } from "../../../../app/modules/game/core/request";

type Props = {
  className: string;
};

const TablesWidget5: React.FC<Props> = ({ className }) => {
  const { data } = useQuery(getAllGames);
  const { Games } = useSelector((state: any) => state.Games);
  console.log(Games);
  const navigate = useNavigate();
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Games</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body py-3">
        <div className="tab-content">
          {/* begin::Tap pane */}
          <div
            className="tab-pane fade show active"
            id="kt_table_widget_5_tab_1"
          >
            {/* begin::Table container */}
            <div className="table-responsive">
              {/* begin::Table */}
              <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                {/* begin::Table head */}
                <thead>
                  <tr className="border-0">
                    <th className="p-0 w-150px">Date</th>
                    <th className="p-0 min-w-150px">Home vs Away</th>
                    <th className="p-0 min-w-150px">Time</th>
                    <th className="p-0 min-w-150px">CITY/ STATE</th>
                    <th className="p-0 min-w-150px">Live/ Upcoming</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  {data?.getAllGames?.map((Game: any) => {
                    let date = new Date(
                      parseInt(Game.ScheduledDate)
                    ).toDateString();
                    let date2 = new Date(
                      parseInt(Game.ScheduledDate)
                    ).toLocaleTimeString();
                    return (
                      <tr
                        onClick={() => navigate(`/game/${Game._id}/overview`)}
                      >
                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                          >
                            {date}
                          </a>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                          >
                            {Game.homeTeam?.teamName}
                          </a>
                          <span className="text-muted fw-semibold d-block">
                            {Game.awayTeam
                              ? " Vs " + Game.awayTeam.teamName
                              : ""}
                          </span>
                        </td>

                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                          >
                            {date2}
                          </a>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                          >
                            City
                          </a>
                          <span className="text-muted fw-semibold d-block">
                            State
                          </span>
                        </td>
                        <td>
                          {Game.startTime && !Game.endTime ? (
                            <div className="d-flex ">
                              <div
                                className={` mb-6 me-3  rounded-circle border border-5 border-danger h-20px w-20px`}
                              ></div>
                              <>LIVE</>
                            </div>
                          ) : (
                            <a
                              href="#"
                              className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                            >
                              UpComming
                            </a>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className="tab-pane fade" id="kt_table_widget_5_tab_2">
            {/* begin::Table container */}
            <div className="table-responsive">
              {/* begin::Table */}
              <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                {/* begin::Table head */}
                <thead>
                  <tr className="border-0">
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-150px"></th>
                    <th className="p-0 min-w-140px"></th>
                    <th className="p-0 min-w-110px"></th>
                    <th className="p-0 min-w-50px"></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img
                            src={toAbsoluteUrl(
                              "/media/svg/brand-logos/plurk.svg"
                            )}
                            className="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                      >
                        Brad Simmons
                      </a>
                      <span className="text-muted fw-semibold d-block">
                        Movie Creator
                      </span>
                    </td>
                    <td className="text-end text-muted fw-semibold">
                      React, HTML
                    </td>
                    <td className="text-end">
                      <span className="badge badge-light-success">
                        Approved
                      </span>
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                      >
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr064.svg"
                          className="svg-icon-2"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img
                            src={toAbsoluteUrl(
                              "/media/svg/brand-logos/telegram.svg"
                            )}
                            className="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                      >
                        Popular Authors
                      </a>
                      <span className="text-muted fw-semibold d-block">
                        Most Successful
                      </span>
                    </td>
                    <td className="text-end text-muted fw-semibold">
                      Python, MySQL
                    </td>
                    <td className="text-end">
                      <span className="badge badge-light-warning">
                        In Progress
                      </span>
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                      >
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr064.svg"
                          className="svg-icon-2"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img
                            src={toAbsoluteUrl(
                              "/media/svg/brand-logos/bebo.svg"
                            )}
                            className="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                      >
                        Active Customers
                      </a>
                      <span className="text-muted fw-semibold d-block">
                        Movie Creator
                      </span>
                    </td>
                    <td className="text-end text-muted fw-semibold">
                      AngularJS, C#
                    </td>
                    <td className="text-end">
                      <span className="badge badge-light-danger">Rejected</span>
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                      >
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr064.svg"
                          className="svg-icon-2"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className="tab-pane fade" id="kt_table_widget_5_tab_3">
            {/* begin::Table container */}
            <div className="table-responsive">
              {/* begin::Table */}
              <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                {/* begin::Table head */}
                <thead>
                  <tr className="border-0">
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-150px"></th>
                    <th className="p-0 min-w-140px"></th>
                    <th className="p-0 min-w-110px"></th>
                    <th className="p-0 min-w-50px"></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img
                            src={toAbsoluteUrl(
                              "/media/svg/brand-logos/kickstarter.svg"
                            )}
                            className="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                      >
                        Bestseller Theme
                      </a>
                      <span className="text-muted fw-semibold d-block">
                        Best Customers
                      </span>
                    </td>
                    <td className="text-end text-muted fw-semibold">
                      ReactJS, Ruby
                    </td>
                    <td className="text-end">
                      <span className="badge badge-light-warning">
                        In Progress
                      </span>
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                      >
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr064.svg"
                          className="svg-icon-2"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img
                            src={toAbsoluteUrl(
                              "/media/svg/brand-logos/bebo.svg"
                            )}
                            className="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                      >
                        Active Customers
                      </a>
                      <span className="text-muted fw-semibold d-block">
                        Movie Creator
                      </span>
                    </td>
                    <td className="text-end text-muted fw-semibold">
                      AngularJS, C#
                    </td>
                    <td className="text-end">
                      <span className="badge badge-light-danger">Rejected</span>
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                      >
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr064.svg"
                          className="svg-icon-2"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img
                            src={toAbsoluteUrl(
                              "/media/svg/brand-logos/vimeo.svg"
                            )}
                            className="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                      >
                        New Users
                      </a>
                      <span className="text-muted fw-semibold d-block">
                        Awesome Users
                      </span>
                    </td>
                    <td className="text-end text-muted fw-semibold">
                      Laravel,CourtIntel
                    </td>
                    <td className="text-end">
                      <span className="badge badge-light-primary">Success</span>
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                      >
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr064.svg"
                          className="svg-icon-2"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img
                            src={toAbsoluteUrl(
                              "/media/svg/brand-logos/telegram.svg"
                            )}
                            className="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-dark fw-bold text-hover-primary mb-1 fs-6"
                      >
                        Popular Authors
                      </a>
                      <span className="text-muted fw-semibold d-block">
                        Most Successful
                      </span>
                    </td>
                    <td className="text-end text-muted fw-semibold">
                      Python, MySQL
                    </td>
                    <td className="text-end">
                      <span className="badge badge-light-warning">
                        In Progress
                      </span>
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                      >
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr064.svg"
                          className="svg-icon-2"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  );
};

export { TablesWidget5 };
