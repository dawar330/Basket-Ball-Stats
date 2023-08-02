/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { useSelector } from "react-redux";
import { Params, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { RemoveTeamPlayer } from "../../../../app/modules/game/core/request";
import { InviteUsers } from "../../modals/invite-users/InviteUsers";

type Props = {
  className: string;
};
interface TeamParams extends Params {
  id: string;
}
const TablesWidget10: React.FC<Props> = ({ className }) => {
  const { id: TeamID } = useParams<TeamParams>();
  const [RemoveTeamPlayerF] = useMutation(RemoveTeamPlayer);
  const { currentTeam } = useSelector((state: any) => state.Teams);

  return (
    <div className={`card ${className}`}>
      <InviteUsers />
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Team Members </span>
        </h3>
        <div
          className="card-toolbar"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
          data-bs-placement="top"
          data-bs-trigger="hover"
          title="Click to add a user"
        >
          <a
            className="btn btn-sm btn-light-primary"
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTSVG
              path="media/icons/duotune/arrows/arr075.svg"
              className="svg-icon-3"
            />
            New Member
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body py-3">
        {/* begin::Table container */}
        <div className="table-responsive">
          {/* begin::Table */}
          <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
            {/* begin::Table head */}
            <thead>
              <tr className="fw-bold text-muted">
                <th className="min-w-150px">Name</th>

                <th className="min-w-100px text-end">Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {currentTeam?.Players?.map((Player: any, index: any) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-45px me-5">
                          <img
                            src={
                              Player.avatar === ""
                                ? toAbsoluteUrl("/media/avatars/blank.png")
                                : Player.avatar
                            }
                            alt=""
                          />
                        </div>
                        <div className="d-flex justify-content-start flex-column">
                          <a
                            href="#"
                            className="text-dark fw-bold text-hover-primary fs-6"
                          >
                            {Player.fname + " " + Player.lname}
                          </a>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="d-flex justify-content-end flex-shrink-0">
                        <a
                          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                          onClick={() => {
                            RemoveTeamPlayerF({
                              variables: {
                                teamID: TeamID,
                                PlayerID: Player._id,
                              },
                            });
                          }}
                        >
                          <KTSVG
                            path="/media/icons/duotune/general/gen027.svg"
                            className="svg-icon-3"
                          />
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  );
};

export { TablesWidget10 };
