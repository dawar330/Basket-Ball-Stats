import React, { FC } from "react";
import { toAbsoluteUrl } from "../../../../../../_metronic/helpers";

const CreateTeamStep2: FC = () => {
  return (
    <div className="w-100">
      <div className="pb-10 pb-lg-15">
        <h2 className="fw-bolder text-dark">Team Image</h2>

        <div className="text-gray-400 fw-bold fs-6">Upload a Team Image</div>
      </div>

      <div className="row mb-6">
        <label className="col-lg-4 col-form-label fw-bold fs-6">
          Team Image
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
                backgroundImage: `url(${toAbsoluteUrl(
                  "/media/avatars/blank.png"
                )})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CreateTeamStep2 };
