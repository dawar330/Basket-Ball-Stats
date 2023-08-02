/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { KTSVG } from "../../../../_metronic/helpers";
import { ChartsWidget1 } from "../../../../_metronic/partials/widgets";
import { useAuth } from "../../auth";

import { loadStripe } from "@stripe/stripe-js";
export function Overview() {
  const [PaymentMethodAdded, setPaymentMethodAdded] = useState(false);
  const { currentUser, auth } = useAuth();

  const stripePromise = loadStripe("your-publishable-key");

  // const fetchSessionData = async (sessionId: String) => {
  //   const stripe = await stripePromise;
  //   const session = await stripe?.checkout?.sessions.retrieve(sessionId);
  //   console.log(session);
  //   // Process the session data here
  // };

  return (
    <>
      <div className="card mb-5 mb-xl-10">
        <div
          className="card-header border-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_profile_detailss"
          aria-expanded="true"
          aria-controls="kt_account_profile_detailss"
        >
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Profile Details</h3>
          </div>
        </div>

        <div
          id="kt_account_profile_detailss"
          className=" card-body p-9 collapse show"
        >
          <div className="row">
            <div className="col-lg-6">
              {" "}
              <div className="row mb-7">
                <label className="col-lg-6 fw-bold text-muted">Full Name</label>

                <div className="col-lg-6">
                  <span className="fw-bolder fs-6 text-dark">
                    {currentUser?.fname + " " + currentUser?.lname}
                  </span>
                </div>
              </div>
              <div className="row mb-7">
                <label className="col-lg-6 fw-bold text-muted">
                  Email
                  <i
                    className="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Phone number must be active"
                  ></i>
                </label>

                <div className="col-lg-6 d-flex align-items-center">
                  <span className="fw-bolder fs-6 me-2">
                    {currentUser?.email}
                  </span>
                </div>
              </div>
              <div className="row mb-7">
                <label className="col-lg-6 fw-bold text-muted">
                  Available Game
                  <i
                    className="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Phone number must be active"
                  ></i>
                </label>

                <div className="col-lg-6 d-flex align-items-center">
                  <span className="fw-bolder fs-6 me-2">
                    {currentUser?.AvailableGames.toString()}
                  </span>
                </div>
              </div>
              <div className="row mb-7">
                <label className="col-lg-6 fw-bold text-muted">
                  {auth?.Role === "Player" ? "Playing Level" : "Coaching Level"}
                </label>

                <div className="col-lg-6">
                  <span className="fw-bolder fs-6 text-dark">
                    {currentUser?.PlayingLevel}
                  </span>
                </div>
              </div>
              {auth?.Role === "Player" && (
                <>
                  {" "}
                  <div className="row mb-7">
                    <label className="col-lg-6 fw-bold text-muted">
                      Height
                    </label>

                    <div className="col-lg-6">
                      <span className="fw-bolder fs-6 text-dark">
                        {currentUser?.Height}
                      </span>
                    </div>
                  </div>
                  <div className="row mb-7">
                    <label className="col-lg-6 fw-bold text-muted">
                      Weight
                    </label>

                    <div className="col-lg-6">
                      <span className="fw-bolder fs-6 text-dark">
                        {currentUser?.Weight}
                      </span>
                    </div>
                  </div>
                  <div className="row mb-7">
                    <label className="col-lg-6 fw-bold text-muted">
                      Wing Span
                    </label>

                    <div className="col-lg-6">
                      <span className="fw-bolder fs-6 text-dark">
                        {currentUser?.WingSpan}
                      </span>
                    </div>
                  </div>
                  <div className="row mb-7">
                    <label className="col-lg-6 fw-bold text-muted">CGPA</label>

                    <div className="col-lg-6">
                      <span className="fw-bolder fs-6 text-dark">
                        {currentUser?.CGPA}
                      </span>
                    </div>
                  </div>{" "}
                </>
              )}
            </div>
            <div className="col-lg-6">
              <div className="card-title m-0">
                <h3 className="fw-bolder m-0  mb-5 mb-xl-10">AAU</h3>
              </div>
              <div className="row mb-7">
                <label className="col-lg-6 fw-bold text-muted ">AAU</label>

                <div className="col-lg-6">
                  <span className="fw-bolder fs-6 text-dark">
                    {currentUser?.AAU.toString().toUpperCase()}
                  </span>
                </div>
              </div>
              {currentUser?.AAU && (
                <>
                  {" "}
                  <div className="row mb-7">
                    <label className="col-lg-6 fw-bold text-muted"> Team</label>

                    <div className="col-lg-6">
                      <span className="fw-bolder fs-6 text-dark">
                        {currentUser?.AAUTeamName}
                      </span>
                    </div>
                  </div>
                  <div className="row mb-7">
                    <label className="col-lg-6 fw-bold text-muted">
                      {" "}
                      Age Level
                    </label>

                    <div className="col-lg-6">
                      <span className="fw-bolder fs-6 text-dark">
                        {currentUser?.AAUAgeLevel}
                      </span>
                    </div>
                  </div>
                  <div className="row mb-7">
                    <label className="col-lg-6 fw-bold text-muted">
                      {" "}
                      State
                    </label>

                    <div className="col-lg-6">
                      <span className="fw-bolder fs-6 text-dark">
                        {currentUser?.AAUState}
                      </span>
                    </div>
                  </div>{" "}
                </>
              )}
            </div>
          </div>

          <Link
            to="/account/settings"
            className="btn btn-primary align-self-center"
            style={{ zIndex: 100 }}
          >
            Edit Profile
          </Link>
          {/* <div className="row mb-7">
            <label className="col-lg-6 fw-bold text-muted">
              Country
              <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Country of origination"
              ></i>
            </label>

            <div className="col-lg-6">
              <span className="fw-bolder fs-6 text-dark">Germany</span>
            </div>
          </div> */}

          {/* <div className="row mb-7">
            <label className="col-lg-6 fw-bold text-muted">
              Account Subscription Type
            </label>

            <div className="col-lg-6">
              <span className="fw-bolder fs-6 text-dark">Package 1</span>
            </div>
          </div> */}

          {/* <div className="row mb-10">
            <label className="col-lg-6 fw-bold text-muted">
              Payment Method Added
            </label>

            <div className="col-lg-6">
              <span className="fw-bold fs-6">
                {PaymentMethodAdded ? "Yes" : "No"}
              </span>
            </div>
          </div> */}

          {/* {!PaymentMethodAdded && (
            <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
              <KTSVG
                path="icons/duotune/general/gen044.svg"
                className="svg-icon-2tx svg-icon-warning me-4"
              />
              <div className="d-flex flex-stack flex-grow-1">
                <div className="fw-bold">
                  <h4 className="text-gray-800 fw-bolder">
                    We need your attention!
                  </h4>
                  <div className="fs-6 text-gray-600">
                    Your payment was declined. To start using tools, please
                    <Link className="fw-bolder" to="/account/settings">
                      {" "}
                      Add Payment Method
                    </Link>
                    .
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>

      <div className="row gy-10 gx-xl-10">
        <div className="col-xl-12">
          <ChartsWidget1 className="card-xxl-stretch mb-5 mb-xl-10" />
        </div>
      </div>
    </>
  );
}
