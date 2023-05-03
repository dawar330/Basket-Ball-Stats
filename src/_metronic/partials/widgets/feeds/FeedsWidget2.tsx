/* eslint-disable jsx-a11y/anchor-is-valid */

import { useQuery } from "@apollo/client";
import { toAbsoluteUrl } from "../../../helpers";
import { getUser } from "../../../../app/modules/auth/core/requests";
import { useState } from "react";

type Props = {
  className: string;
  comment: string;
  userID: string;
  time: string;
};
function timeAgo(timestamp: number) {
  const now = Date.now();
  const difference = now - timestamp;

  // Convert difference to seconds
  const seconds = Math.floor(difference / 1000);
  if (seconds < 60) {
    return seconds + " seconds ago";
  }

  // Convert difference to minutes
  const minutes = Math.floor(difference / 1000 / 60);
  if (minutes < 60) {
    return minutes + " minutes ago";
  }

  // Convert difference to hours
  const hours = Math.floor(difference / 1000 / 60 / 60);
  return hours + " hours ago";
}

const FeedsWidget2: React.FC<Props> = ({
  className,
  userID,
  time,
  comment,
}) => {
  const [userName, setuserName] = useState<string>();
  useQuery(getUser, {
    variables: {
      id: userID,
    },
    onCompleted: ({ getUser }) => {
      setuserName(getUser.fname + " " + getUser.lname);
    },
  });
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
                {userName}
              </a>
              <span className="text-gray-400 fw-semibold">
                {timeAgo(parseInt(time))}
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
          <p className="text-gray-800 fw-normal mb-5">{comment}</p>
          {/* end::Text */}
        </div>
        {/* end::Post */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { FeedsWidget2 };
