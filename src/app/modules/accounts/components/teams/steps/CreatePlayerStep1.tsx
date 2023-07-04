/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";

import { Field, ErrorMessage } from "formik";

const CreatePlayerStep1: FC = () => {
  return (
    <div className="w-100">
      <div className="pb-10 pb-lg-15">
        <h2 className="fw-bolder d-flex align-items-center text-dark">
          Add Player Details
        </h2>

        <div className="text-gray-400 fw-bold fs-6">
          Please provide basic information for your Player.
        </div>
      </div>

      <div className="fv-row">
        <div className="row">
          <div className="mb-10 fv-row">
            <label className=" required form-label mb-3">Player Name</label>

            <Field
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="PlayerName"
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="PlayerName" />
            </div>
          </div>
          <div className="mb-10 fv-row">
            <label className=" required form-label mb-3"> Height (cm)</label>

            <Field
              type="number"
              className="form-control form-control-lg form-control-solid"
              name="Height"
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="Height" />
            </div>
          </div>
          <div className="mb-10 fv-row">
            <label className=" required form-label mb-3"> Weight (kg)</label>

            <Field
              type="number"
              className="form-control form-control-lg form-control-solid"
              name="Weight"
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="Weight" />
            </div>
          </div>
          <div className="mb-10 fv-row">
            <label className=" required form-label mb-3"> WingSpan (cm)</label>

            <Field
              type="number"
              className="form-control form-control-lg form-control-solid"
              name="WingSpan"
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="WingSpan" />
            </div>
          </div>
          <div className="mb-10 fv-row">
            <label className=" required form-label mb-3"> Vertical (cm)</label>

            <Field
              type="number"
              className="form-control form-control-lg form-control-solid"
              name="Vertical"
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="Vertical" />
            </div>
          </div>
          <div className="mb-10 fv-row">
            <label className=" required form-label mb-3"> CGPA</label>

            <Field
              type="number"
              className="form-control form-control-lg form-control-solid"
              name="CGPA"
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="CGPA" />
            </div>
          </div>
          <div className="fv-row mb-10">
            <label className="form-label required">Playing Level</label>

            <Field
              as="select"
              name="PlayingLevel"
              className="form-select form-select-lg form-select-solid"
            >
              <option></option>
              <option value="Elementary">Elementary</option>
              <option value="Middle School">Middle School</option>
              <option value=" High School"> High School</option>
              <option value="College">College</option>
              <option value="Pro">Pro</option>
            </Field>
            <div className="text-danger mt-2">
              <ErrorMessage name="PlayingLevel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CreatePlayerStep1 };
