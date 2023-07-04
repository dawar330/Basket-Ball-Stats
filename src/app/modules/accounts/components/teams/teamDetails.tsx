import React, { useRef, useState } from "react";
import { toAbsoluteUrl } from "../../../../../_metronic/helpers";
import {
  ITeamDetails,
  teamDetailsInitValues as initialValues,
} from "../settings/SettingsModel";

import * as Yup from "yup";
import { useFormik } from "formik";
import {
  getTeam,
  getTeamsInfo,
  updateTeamInfo,
} from "../../../game/core/request";
import { useMutation, useQuery } from "@apollo/client";
import { Params, useParams } from "react-router-dom";
import { TablesWidget10 } from "../../../../../_metronic/partials/widgets";
import { upsertCurrentTeam, upsertTeams } from "../../../../../Redux/Team";
import { useDispatch } from "react-redux";

const teamDetailsSchema = Yup.object().shape({
  teamName: Yup.string().required().label("Team Name"),
  homeTown: Yup.string().required().label("Home Town"),
  avatar: Yup.string().label("Team Image"),
});

interface TeamParams extends Params {
  id: string;
}

const TeamDetails: React.FC = () => {
  const { id: TeamID } = useParams<TeamParams>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef?.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          updateData({ avatar: e.target.result.toString() });
          setselectedImage(e.target.result.toString());
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const [data, setData] = useState<ITeamDetails>(initialValues);
  const [selectedImage, setselectedImage] = useState<string | null>(
    data ? data?.avatar : ""
  );
  const updateData = (fieldsToUpdate: Partial<ITeamDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate);
    setData(updatedData);
  };
  const [updateTeamInfoF] = useMutation(updateTeamInfo);
  const dispatch = useDispatch();
  useQuery(getTeam, {
    variables: {
      teamID: TeamID,
    },
    onError: () => {},
    onCompleted: ({ getTeam }) => {
      updateData({
        teamName: getTeam.teamName,
        homeTown: getTeam.teamCity,
        avatar: getTeam.Image,
      });
      dispatch(upsertCurrentTeam(getTeam));
    },
  });

  const [loading, setLoading] = useState(false);
  const formik = useFormik<ITeamDetails>({
    initialValues,
    validationSchema: teamDetailsSchema,
    onSubmit: (values) => {
      setLoading(true);
      updateTeamInfoF({
        variables: {
          teamID: TeamID,
          teamName: values.teamName,
          teamCity: values.homeTown,
          Image: values.avatar,
        },
        onCompleted: () => {
          setLoading(false);
        },
        onError: () => {
          setLoading(false);
        },
      });
      setTimeout(() => {
        const updatedData = Object.assign(data, values);
        setData(updatedData);
        setLoading(false);
      }, 1000);
    },
  });

  return (
    <>
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
                      backgroundImage:
                        selectedImage !== ""
                          ? `url(${data.avatar})`
                          : `url(${toAbsoluteUrl("/media/avatars/blank.png")}`,
                    }}
                    onClick={handleClick}
                  >
                    <div
                      className="image-input-wrapper w-125px h-125px"
                      style={{
                        backgroundImage:
                          selectedImage !== ""
                            ? `url(${data.avatar})`
                            : `url(${toAbsoluteUrl(
                                "/media/avatars/blank.png"
                              )}`,
                      }}
                    ></div>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
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
      <TablesWidget10 className="mb-5 mb-xl-8" />
    </>
  );
};

export { TeamDetails };
