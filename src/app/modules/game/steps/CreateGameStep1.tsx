/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from "react";

import { Field, ErrorMessage, useField } from "formik";
import { getTeams } from "../core/request";
import { useQuery } from "@apollo/client";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const CreateGameStep1: FC = () => {
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
  const [vs] = useField("vs");
  const [ScheduledDate] = useField("ScheduledDate");

  return (
    <div className="w-100">
      {" "}
      <div className="pb-10 pb-lg-15">
        <h2 className="fw-bolder d-flex align-items-center text-dark">
          Add Team Details
        </h2>

        <div className="text-gray-400 fw-bold fs-6">
          Please provide basic information for your team.
        </div>
      </div>
      <div className="fv-row">
        <div className="row">
          <div className="fv-row mb-10">
            <label className="form-label required">Home Team</label>

            <Field
              as="select"
              name="homeTeam"
              className="form-select form-select-lg form-select-solid"
              onChange={(e: any) => {
                setselectedHome(e.target.value);
                homeTeam.onChange(e);
              }}
            >
              <option></option>
              {teams?.map((team) => {
                if (team._id !== selectedAway)
                  return (
                    <option key={team._id} value={team._id}>
                      {team.teamName}
                    </option>
                  );
              })}
            </Field>
            <div className="text-danger mt-2">
              <ErrorMessage name="homeTeam" />
            </div>
          </div>
          {vs.value && (
            <div className="fv-row mb-10">
              <label className="form-label required">Away Team</label>

              <Field
                as="select"
                name="awayTeam"
                className="form-select form-select-lg form-select-solid"
                onChange={(e: any) => {
                  setselectedAway(e.target.value);
                  awayTeam.onChange(e);
                }}
              >
                <option></option>
                {teams?.map((team) => {
                  if (team._id !== selectedHome)
                    return (
                      <option key={team._id} value={team._id}>
                        {team.teamName}
                      </option>
                    );
                })}
              </Field>
              <div className="text-danger mt-2">
                <ErrorMessage name="awayTeam" />
              </div>
            </div>
          )}
          <div className="fv-row mb-10">
            <label className="form-label required">Away Team</label>

            <Field name="ScheduledDate">
              {({ field, form }: any) => (
                <DatePicker
                  {...field}
                  onChange={(date) => {
                    form.setFieldValue(field.name, date);
                  }}
                  selected={ScheduledDate.value}
                  // onChange={handleChange}
                />
              )}
            </Field>

            <div className="text-danger mt-2">
              <ErrorMessage name="ScheduledDate" component="div" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CreateGameStep1 };
