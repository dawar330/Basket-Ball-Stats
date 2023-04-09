/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";

import { Field, ErrorMessage } from "formik";

const CreatePlayerStep3: FC = () => {
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
          <div className="mb-10 fv-row">
            <label className=" required form-label mb-3">
              Player High School Team
            </label>

            <Field
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="HighSchoolTeam"
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="HighSchoolTeam" />
            </div>
          </div>
          <div className="mb-10 fv-row">
            <label className=" required form-label mb-3">Player AAU Team</label>

            <Field
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="AAUTeam"
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="AAUTeam" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CreatePlayerStep3 };
