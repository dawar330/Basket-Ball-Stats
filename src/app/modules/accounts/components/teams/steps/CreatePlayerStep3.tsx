/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";

import { Field, ErrorMessage, useField } from "formik";

const CreatePlayerStep3: FC = () => {
  const [AAU] = useField("AAU");
  console.log(AAU);

  return (
    <div className="w-100">
      <div className="pb-10 pb-lg-15">
        <h2 className="fw-bolder d-flex align-items-center text-dark">
          Add AAU Details
        </h2>

        <div className="text-gray-400 fw-bold fs-6">
          Please provide basic information for your AAU.
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
                name="AAU"
              />
              <label
                className="form-check-label fw-bold text-gray-700 fs-6"
                htmlFor="kt_login_toc_agree"
              >
                Do you Play AAU?
              </label>
              <div className="text-danger mt-2">
                <ErrorMessage name="AAU" />
              </div>
            </div>
          </div>
          {AAU.value && (
            <>
              {" "}
              <div className="mb-10 fv-row">
                <label className=" required form-label mb-3">
                  Player AAU Team Name
                </label>

                <Field
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  name="AAUTeamName"
                />
                <div className="text-danger mt-2">
                  <ErrorMessage name="AAUTeamName" />
                </div>
              </div>
              <div className="fv-row mb-10">
                <label className="form-label required">Age Level</label>

                <Field
                  as="select"
                  name="AAUAgeLevel"
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
                  <ErrorMessage name="AAUAgeLevel" />
                </div>
              </div>
              <div className="fv-row mb-10">
                <label className="form-label required">AAU Stat</label>

                <Field
                  as="select"
                  name="AAUState"
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
                  <ErrorMessage name="AAUState" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { CreatePlayerStep3 };
