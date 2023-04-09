import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../../_metronic/helpers";
import {
  ITeamDetails,
  teamDetailsInitValues as initialValues,
} from "../settings/SettingsModel";

import * as Yup from "yup";
import { useFormik } from "formik";

const teamDetailsSchema = Yup.object().shape({
  teamName: Yup.string().required().label("Team Name"),
  homeTown: Yup.string().required().label("Home Town"),
});

const TeamDetails: React.FC = () => {
  const [data, setData] = useState<ITeamDetails>(initialValues);
  const updateData = (fieldsToUpdate: Partial<ITeamDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate);
    setData(updatedData);
  };

  const [loading, setLoading] = useState(false);
  const formik = useFormik<ITeamDetails>({
    initialValues,
    validationSchema: teamDetailsSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        const updatedData = Object.assign(data, values);
        setData(updatedData);
        setLoading(false);
      }, 1000);
    },
  });

  return (
    <div className="card mb-5 mb-xl-10">
      <div
        className="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_profile_details"
        aria-expanded="true"
        aria-controls="kt_account_profile_details"
      >
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0">Team Details</h3>
        </div>
      </div>

      <div id="kt_account_profile_details" className="collapse show">
        <form onSubmit={formik.handleSubmit} noValidate className="form">
          <div className="card-body border-top p-9">
            <div className="row mb-6">
              <label className="col-lg-4 col-form-label fw-bold fs-6">
                Avatar
              </label>
              <div className="col-lg-8">
                <div
                  className="image-input image-input-outline"
                  data-kt-image-input="true"
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl(
                      "/media/avatars/blank.png"
                    )})`,
                  }}
                >
                  <div
                    className="image-input-wrapper w-125px h-125px"
                    style={{
                      backgroundImage: `url(${toAbsoluteUrl(data.avatar)})`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="row mb-6">
              <label className="col-lg-4 col-form-label required fw-bold fs-6">
                Team Name
              </label>

              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                      placeholder="Team name"
                      {...formik.getFieldProps("teamName")}
                    />
                    {formik.touched.teamName && formik.errors.teamName && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          {formik.errors.teamName}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer d-flex justify-content-end py-6 px-9">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
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
          </div>
        </form>
      </div>
    </div>
  );
};

export { TeamDetails };
