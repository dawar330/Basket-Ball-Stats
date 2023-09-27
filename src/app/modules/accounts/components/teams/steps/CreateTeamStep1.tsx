/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";

import { Field, ErrorMessage } from "formik";
import { GithubPicker } from "react-color";

const CreateTeamStep1: FC = () => {
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
            <label className=" required form-label mb-3">Team Name</label>

            <Field
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="teamName"
            />
            <div className="text-danger mt-2">
              <ErrorMessage name="teamName" />
            </div>
          </div>

          <div className="fv-row mb-10">
            <label className="form-label required">Team Home Town</label>

            <Field
              as="select"
              name="homeTown"
              className="form-select form-select-lg form-select-solid"
            >
              <option></option>
              <option value="New York, NY">New York, NY</option>
              <option value="Los Angeles, CA">Los Angeles, CA</option>
              <option value="Chicago, IL">Chicago, IL</option>
              <option value="Houston, TX">Houston, TX</option>
              <option value="Phoenix, AZ">Phoenix, AZ</option>
            </Field>
            <div className="text-danger mt-2">
              <ErrorMessage name="homeTown" />
            </div>
          </div>
          <div className="fv-row mb-10">
            <label className="form-label required"> Color</label>
            <Field name="color">
              {({ field, form }: any) => (
                <div>
                  <GithubPicker
                    color={field.value}
                    onChange={(color) => {
                      form.setFieldValue(field.name, color.hex);
                    }}
                  />
                </div>
              )}
            </Field>

            <div className="text-danger mt-2">
              <ErrorMessage name="color" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CreateTeamStep1 };
