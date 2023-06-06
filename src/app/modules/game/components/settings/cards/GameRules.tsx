/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { KTSVG } from "../../../../../../_metronic/helpers";
import * as Yup from "yup";
import { useFormik } from "formik";
import { IUpdateTimeOutLimit, IUpdateFoulLimit } from "../SettingsModel";
import { useDispatch, useSelector } from "react-redux";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  UpdateGameFoulLimit,
  UpdateGameTimeOutLimit,
} from "../../../core/request";
import { upsertToggleTeamStats } from "../../../../../../Redux/CurrectGame";
import { useAuth } from "../../../../auth";

const emailFormValidationSchema = Yup.object().shape({
  newFoulLimit: Yup.number().required("Foul Limit is required"),
  confirmPassword: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const passwordFormValidationSchema = Yup.object().shape({
  newTimeOut: Yup.number().required("TimeOut Limit is required"),
  confirmPassword: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const GameRules: React.FC = () => {
  const CurrentGame = useSelector((state: any) => state.CurrentGame);
  const [FoulLimitUpdateData, setFoulLimitUpdateData] =
    useState<IUpdateFoulLimit>({
      newFoulLimit: CurrentGame.FoulLimit,
      confirmPassword: "",
    });
  const [passwordUpdateData, setPasswordUpdateData] =
    useState<IUpdateTimeOutLimit>({
      newTimeOut: CurrentGame.TimeOutLimit,
      confirmPassword: "",
    });

  const [showFoulLimitForm, setShowFoulLimitForm] = useState<boolean>(false);
  const [showTimeOutLimitForm, setTimeOutLimitForm] = useState<boolean>(false);

  const [loading1, setLoading1] = useState(false);

  const formik1 = useFormik<IUpdateFoulLimit>({
    initialValues: {
      ...FoulLimitUpdateData,
    },
    validationSchema: emailFormValidationSchema,
    onSubmit: (values) => {
      setLoading1(true);
      UpdateGameFoulLimitF({
        variables: {
          gameID: CurrentGame._id,
          PassWord: values.confirmPassword,
          newLimit: values.newFoulLimit,
        },
        onCompleted: ({ UpdateGameFoulLimit }) => {
          setLoading1(false);
          UpdateGameFoulLimit && setShowFoulLimitForm(false);
          if (!UpdateGameFoulLimit) {
            formik1.errors.confirmPassword = "Invalid Password";
          }
        },
        onError: () => {
          setLoading1(false);
        },
      });
    },
  });

  const [loading2, setLoading2] = useState(false);
  const [UpdateGameFoulLimitF] = useMutation(UpdateGameFoulLimit);
  const [UpdateGameTimeOutLimitF] = useMutation(UpdateGameTimeOutLimit);

  const formik2 = useFormik<IUpdateTimeOutLimit>({
    initialValues: {
      ...passwordUpdateData,
    },
    validationSchema: passwordFormValidationSchema,
    onSubmit: (values) => {
      setLoading2(true);
      UpdateGameTimeOutLimitF({
        variables: {
          gameID: CurrentGame._id,
          PassWord: values.confirmPassword,
          newLimit: values.newTimeOut,
        },
        onCompleted: ({ UpdateGameTimeOutLimit }) => {
          setLoading2(false);
          UpdateGameTimeOutLimit && setTimeOutLimitForm(false);
          if (!UpdateGameTimeOutLimit) {
            formik2.errors.confirmPassword = "Invalid Password";
          }
        },
        onError: () => {
          setLoading2(false);
        },
      });
    },
  });
  const [ShowTeamStats, setShowTeamStats] = useState(CurrentGame.ShowTeamStats);
  const dispatch = useDispatch();
  function handleChange(e: any) {
    setShowTeamStats(e?.target?.checked);
    dispatch(upsertToggleTeamStats(e?.target?.checked));
  }
  const auth = useAuth();
  return (
    <div className="card mb-5 mb-xl-10">
      <div
        className="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_signin_method"
      >
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0">Game Rules</h3>
        </div>
      </div>

      <div id="kt_account_signin_method" className="collapse show">
        <div className="card-body border-top p-9">
          <div className="d-flex flex-wrap align-items-center">
            <div
              id="kt_signin_email"
              className={" " + (showFoulLimitForm && "d-none")}
            >
              <div className="fs-6 fw-bolder mb-1">Foul Limit</div>
              <div className="fw-bold text-gray-600">
                {CurrentGame.FoulLimit}
              </div>
            </div>

            <div
              id="kt_FoulLimit_edit"
              className={"flex-row-fluid " + (!showFoulLimitForm && "d-none")}
            >
              <form
                onSubmit={formik1.handleSubmit}
                id="kt_signin_change_email"
                className="form"
                noValidate
              >
                <div className="row mb-6">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="fv-row mb-0">
                      <label className="form-label fs-6 fw-bolder mb-3">
                        Enter New Foul Limit
                      </label>
                      <input
                        type="Number"
                        className="form-control form-control-lg form-control-solid"
                        placeholder="Foul Limit"
                        {...formik1.getFieldProps("newFoulLimit")}
                      />
                      {formik1.touched.newFoulLimit &&
                        formik1.errors.newFoulLimit && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              {formik1.errors.newFoulLimit}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fv-row mb-0">
                      <label className="form-label fs-6 fw-bolder mb-3">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg form-control-solid"
                        id="confirmemailpassword"
                        {...formik1.getFieldProps("confirmPassword")}
                      />
                      {formik1.touched.confirmPassword &&
                        formik1.errors.confirmPassword && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              {formik1.errors.confirmPassword}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <button
                    id="kt_signin_submit"
                    type="submit"
                    className="btn btn-primary  me-2 px-6"
                  >
                    {!loading1 && "Update Limit"}
                    {loading1 && (
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
                    id="kt_signin_cancel"
                    type="button"
                    onClick={() => {
                      setShowFoulLimitForm(false);
                    }}
                    className="btn btn-color-gray-400 btn-active-light-primary px-6"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>

            <div
              id="kt_FoulLimit_edit"
              className={"ms-auto " + (showFoulLimitForm && "d-none")}
            >
              <button
                onClick={() => {
                  setShowFoulLimitForm(true);
                }}
                className="btn btn-light btn-active-light-primary"
              >
                Change Limit
              </button>
            </div>
          </div>

          <div className="separator separator-dashed my-6"></div>
          <div className="d-flex flex-wrap align-items-center">
            <div
              id="kt_signin_email"
              className={" " + (showTimeOutLimitForm && "d-none")}
            >
              <div className="fs-6 fw-bolder mb-1">TimeOut Limit</div>
              <div className="fw-bold text-gray-600">
                {CurrentGame.TimeOutLimit}
              </div>
            </div>

            <div
              id="kt_FoulLimit_edit"
              className={
                "flex-row-fluid " + (!showTimeOutLimitForm && "d-none")
              }
            >
              <form
                onSubmit={formik2.handleSubmit}
                id="kt_signin_change_email"
                className="form"
                noValidate
              >
                <div className="row mb-6">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="fv-row mb-0">
                      <label
                        htmlFor="emailaddress"
                        className="form-label fs-6 fw-bolder mb-3"
                      >
                        Enter New TimeOut Limit
                      </label>
                      <input
                        type="Number"
                        className="form-control form-control-lg form-control-solid"
                        id="emailaddress"
                        placeholder="TimeOut Limit"
                        {...formik2.getFieldProps("newTimeOut")}
                      />
                      {formik2.touched.newTimeOut && formik2.errors.newTimeOut && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            {formik2.errors.newTimeOut}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fv-row mb-0">
                      <label
                        htmlFor="confirmemailpassword"
                        className="form-label fs-6 fw-bolder mb-3"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg form-control-solid"
                        id="confirmemailpassword"
                        {...formik2.getFieldProps("confirmPassword")}
                      />
                      {formik2.touched.confirmPassword &&
                        formik2.errors.confirmPassword && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              {formik2.errors.confirmPassword}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <button
                    id="kt_signin_submit"
                    type="submit"
                    className="btn btn-primary  me-2 px-6"
                  >
                    {!loading2 && "Update Limit"}
                    {loading2 && (
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
                    id="kt_signin_cancel"
                    type="button"
                    onClick={() => {
                      setTimeOutLimitForm(false);
                    }}
                    className="btn btn-color-gray-400 btn-active-light-primary px-6"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>

            <div
              id="kt_signin_email_button"
              className={"ms-auto " + (showTimeOutLimitForm && "d-none")}
            >
              <button
                onClick={() => {
                  setTimeOutLimitForm(true);
                }}
                className="btn btn-light btn-active-light-primary"
              >
                Change Limit
              </button>
            </div>
          </div>
          <div className="separator separator-dashed my-6"></div>
          {auth.auth?.Role === "Player" && (
            <div className="d-flex flex-wrap align-items-center">
              <div id="kt_signin_email">
                <div className="fs-6 fw-bolder mb-1">Show Team Statistics</div>
                <div className="fw-bold text-gray-600">
                  {ShowTeamStats.toString().toUpperCase()}
                </div>
              </div>

              <div
                id="kt_signin_email_button"
                className={"ms-auto " + (showTimeOutLimitForm && "d-none")}
              >
                <div className="form-check form-check-sm form-check-custom form-check-solid me-5">
                  <input
                    className="form-check-input widget-9-check"
                    type="checkbox"
                    onChange={handleChange}
                    checked={CurrentGame.ShowTeamStats}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { GameRules };
