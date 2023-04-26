/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";

import { Field, ErrorMessage } from "formik";

const CreateGameStep1: FC = () => {
  return (
    <div className="w-100">
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
            >
              <option></option>
              <option value="New York, N">New York, NY</option>
              <option value="Los Angeles, CA">Los Angeles, CA</option>
              <option value="Chicago, IL">Chicago, IL</option>
              <option value="Houston, TX">Houston, TX</option>
              <option value="Phoenix, AZ">Phoenix, AZ</option>
            </Field>
            <div className="text-danger mt-2">
              <ErrorMessage name="homeTeam" />
            </div>
          </div>

          <div className="fv-row mb-10">
            <label className="form-label required">Away Team</label>

            <Field
              as="select"
              name="awayTeam"
              className="form-select form-select-lg form-select-solid"
            >
              <option></option>
              <option value="New York, N">New York, NY</option>
              <option value="Los Angeles, CA">Los Angeles, CA</option>
              <option value="Chicago, IL">Chicago, IL</option>
              <option value="Houston, TX">Houston, TX</option>
              <option value="Phoenix, AZ">Phoenix, AZ</option>
            </Field>
            <div className="text-danger mt-2">
              <ErrorMessage name="awayTeam" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CreateGameStep1 };
