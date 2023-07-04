/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from "react";

import { Field, ErrorMessage, useField } from "formik";
import { getTeams } from "../core/request";
import { useQuery } from "@apollo/client";

const CreateGameStepInital: FC = () => {
  const [teams, setteams] = useState<
    [
      {
        _id: string;
        teamName: string;
        teamCity: string;
        Image: string;
        Players: [string];
      }
    ]
  >();
  useQuery(getTeams, {
    onCompleted: ({ getTeams }) => {
      setteams(getTeams);
    },
  });
  const [selectedHome, setselectedHome] = useState<string>();
  const [selectedAway, setselectedAway] = useState<string>();
  const [homeTeam] = useField("homeTeam");
  const [awayTeam] = useField("awayTeam");
  return (
    <div className="w-100">
      {" "}
      <div className="pb-10 pb-lg-15">
        <h2 className="fw-bolder d-flex align-items-center text-dark">
          Add Game Details
        </h2>

        <div className="text-gray-400 fw-bold fs-6">
          Please provide basic information for your Game.
        </div>
      </div>
      <div className="fv-row">
        <div className="row">
          <div className="fv-row mb-10">
            <div className="form-check form-check-custom form-check-solid">
              <Field
                className="form-check-input"
                type="checkbox"
                id="kt_login_toc_agree"
                name="vs"
              />
              <label
                className="form-check-label fw-bold text-gray-700 fs-6"
                htmlFor="kt_login_toc_agree"
              >
                Is this a VS Game ?
              </label>
              <div className="text-danger mt-2">
                <ErrorMessage name="AAU" />
              </div>
            </div>
          </div>
          <div className="mb-10 fv-row">
            <label className=" required form-label mb-3">Time Out Limit</label>

            <Field
              type="Number"
              className="form-control form-control-lg form-control-solid"
              name="TimeOutLimit"
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="TimeOutLimit" />
            </div>
          </div>
          <div className="mb-10 fv-row">
            <label className=" required form-label mb-3">Foul Out Limit</label>

            <Field
              type="Number"
              className="form-control form-control-lg form-control-solid"
              name="FoulLimit"
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="FoulLimit" />
            </div>
          </div>
          <div className="mb-10 fv-row">
            <label className=" required form-label mb-3">Total Time</label>

            <Field
              type="Number"
              className="form-control form-control-lg form-control-solid"
              name="TotalTime"
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="TotalTime" />
            </div>
          </div>

          <div className="fv-row mb-10">
            <label className="form-label required"> Time Distribution</label>

            <Field
              as="select"
              name="TimeDistribution"
              className="form-select form-select-lg form-select-solid"
            >
              <option></option>
              <option value="Quatres">Quatres</option>
              <option value="Halves">Halves</option>
            </Field>
            <div className="text-danger mt-2">
              <ErrorMessage name="TimeDistribution" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CreateGameStepInital };
