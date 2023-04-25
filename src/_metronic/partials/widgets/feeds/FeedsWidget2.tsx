/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";

type Props = {
  className: string;
};

const FeedsWidget2: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className="card-body pb-0">
        {/* begin::Header */}
        <div className="d-flex align-items-center mb-5">
          {/* begin::User */}
          <div className="d-flex align-items-center flex-grow-1">
            {/* begin::Avatar */}
            <div className="symbol symbol-45px me-5">
              <img src={toAbsoluteUrl("/media/avatars/300-23.jpg")} alt="" />
            </div>
            {/* end::Avatar */}

            {/* begin::Info */}
            <div className="d-flex flex-column">
              <a
                href="#"
                className="text-gray-800 text-hover-primary fs-6 fw-bold"
              >
                Nick Logan
              </a>

              <span className="text-gray-400 fw-semibold">
                PHP, SQLite, Artisan CLI
              </span>
            </div>
            {/* end::Info */}
          </div>
          {/* end::User */}
        </div>
        {/* end::Header */}

        {/* begin::Post */}
        <div className="mb-5">
          {/* begin::Text */}
          <p className="text-gray-800 fw-normal mb-5">
            Outlines keep you honest. They stop you from indulging in poorly
            thought-out metaphors about driving and keep you focused on the
            overall structure of your post
          </p>
          {/* end::Text */}
        </div>
        {/* end::Post */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { FeedsWidget2 };
