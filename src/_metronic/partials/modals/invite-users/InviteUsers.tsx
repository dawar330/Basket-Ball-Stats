/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { useMutation, useQuery } from "@apollo/client";
import { getPlayers } from "../../../../app/modules/auth/core/requests";
import { addTeamPlayer } from "../../../../app/modules/game/core/request";
import { Params, useParams } from "react-router-dom";
import { CreatePlayerStepper } from "../../../../app/modules/accounts/components/teams/CreatePlayerStepper";
interface TeamParams extends Params {
  id: string;
}
const InviteUsers: FC = () => {
  const { id: TeamID } = useParams<TeamParams>();
  const [users, setusers] = useState([]);

  const [loading, setloading] = useState(false);

  const [seletedPlayer, setseletedPlayer] = useState<any[]>([]);
  const [addTeamPlayerF] = useMutation(addTeamPlayer, {
    variables: {
      PlayerIDs: seletedPlayer,
      teamID: TeamID,
    },
    onCompleted: () => {
      setloading(false);
    },
  });
  function handleChange(e: any) {
    if (e?.target?.checked) {
      setseletedPlayer([...seletedPlayer, e?.target?.value]);
    } else {
      let temp = [...seletedPlayer];
      const indexToRemove = temp.indexOf(e?.target?.value);
      if (indexToRemove !== -1) {
        temp.splice(indexToRemove, 1);
        setseletedPlayer(temp);
      }
    }
  }
  useQuery(getPlayers, {
    onCompleted: ({ getPlayers }) => {
      setusers(getPlayers);
    },
    onError: () => {},
  });

  const [CreateNewPlayer, setCreateNewPlayer] = useState(false);
  return (
    <div className="modal fade" id="kt_modal_invite_friends" aria-hidden="true">
      <div className={`modal-dialog ${CreateNewPlayer ? "mw-75" : "mw-700px"}`}>
        <div className="modal-content">
          <div className="modal-header pb-0 border-0 justify-content-end">
            <div
              className="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
            >
              <KTSVG
                path="/media/icons/duotune/arrows/arr061.svg"
                className="svg-icon-1"
              />
            </div>
          </div>

          <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
            <div className="text-center mb-13">
              <h1 className="mb-3">Add Players</h1>
            </div>

            {!CreateNewPlayer ? (
              <div className="mb-10">
                <div className="mh-300px scroll-y me-n7 pe-7">
                  {users?.map((user: any, i) => {
                    return (
                      <div
                        className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed"
                        key={i}
                      >
                        <div className="d-flex align-items-center">
                          <div className="form-check form-check-sm form-check-custom form-check-solid me-5">
                            <input
                              className="form-check-input widget-9-check"
                              type="checkbox"
                              value={user._id}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="symbol symbol-35px symbol-circle">
                            {user.avatar !== "" && (
                              <img alt="Pic" src={user.avatar} />
                            )}

                            {user.avatar === "" && (
                              <div className="symbol symbol-35px symbol-circle">
                                <span
                                  className={`symbol-label bg-light-success text-success fw-bold`}
                                >
                                  {user.fname.charAt(0)}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                            >
                              {user.fname + " " + user.lname}
                            </a>
                            <div className="fw-bold text-muted">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <CreatePlayerStepper setCreateNewPlayer={setCreateNewPlayer} />
            )}

            {!CreateNewPlayer && (
              <div className="d-flex flex-stack">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                  onClick={() => {
                    setloading(true);
                    addTeamPlayerF();
                  }}
                >
                  {!loading && "Save Changes"}
                  {loading && (
                    <span
                      className="indicator-progress"
                      style={{ display: "block" }}
                    >
                      Please wait...{" "}
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  )}
                </button>
                <button
                  className="btn btn-primary"
                  disabled={loading}
                  onClick={() => {
                    setCreateNewPlayer(true);
                  }}
                >
                  {"Create New Player"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { InviteUsers };
