/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";

type Props = {
  className: string;
  label: String;
};

const TablesWidget3: React.FC<Props> = ({ className, label }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label text-primary fw-bold fs-3 mb-1">
            {label}
          </span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body py-3">
        {/* begin::Table container */}
        <div className="d-flex justify-content-between">
          <div className="table-responsive ">
            {/* begin::Table */}
            <table className="table align-middle gs-0 gy-3">
              {/* begin::Table head */}
              <thead>
                <tr>
                  <th className="p-0 min-w-75px text-dark fw-bold text-hover-primary mb-1 fs-5">
                    FLORIDA EAGLES
                  </th>
                  <th className="p-0 min-w-50px"></th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                <tr>
                  <td>
                    <a
                      href="#"
                      className="text-muted text-hover-primary mb-1 fs-6"
                    >
                      #10 Jamie Kaiser Jr
                    </a>
                  </td>
                  <td className="text-end text-muted fw-semibold">2</td>
                </tr>{" "}
                <tr>
                  <td>
                    <a
                      href="#"
                      className="text-muted text-hover-primary mb-1 fs-6"
                    >
                      #10 Jamie Kaiser Jr
                    </a>
                  </td>
                  <td className="text-end text-muted fw-semibold">2</td>
                </tr>{" "}
                <tr>
                  <td>
                    <a
                      href="#"
                      className="text-muted text-hover-primary mb-1 fs-6"
                    >
                      #10 Jamie Kaiser Jr
                    </a>
                  </td>
                  <td className="text-end text-muted fw-semibold">2</td>
                </tr>{" "}
                <tr>
                  <td>
                    <a
                      href="#"
                      className="text-muted text-hover-primary mb-1 fs-6"
                    >
                      #10 Jamie Kaiser Jr
                    </a>
                  </td>
                  <td className="text-end text-muted fw-semibold">2</td>
                </tr>
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>

          <div className="table-responsive">
            {/* begin::Table */}
            <table className="table align-middle gs-0 gy-3">
              {/* begin::Table head */}
              <thead>
                <tr>
                  <th className="p-0 min-w-75px text-dark fw-bold text-hover-primary mb-1 fs-5">
                    FLORIDA EAGLES
                  </th>
                  <th className="p-0 min-w-50px"></th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                <tr>
                  <td>
                    <a
                      href="#"
                      className="text-muted text-hover-primary mb-1 fs-6"
                    >
                      #10 Jamie Kaiser Jr
                    </a>
                  </td>
                  <td className="text-end text-muted fw-semibold">2</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="#"
                      className="text-muted text-hover-primary mb-1 fs-6"
                    >
                      #10 Jamie Kaiser Jr
                    </a>
                  </td>
                  <td className="text-end text-muted fw-semibold">2</td>
                </tr>{" "}
                <tr>
                  <td>
                    <a
                      href="#"
                      className="text-muted text-hover-primary mb-1 fs-6"
                    >
                      #10 Jamie Kaiser Jr
                    </a>
                  </td>
                  <td className="text-end text-muted fw-semibold">2</td>
                </tr>{" "}
                <tr>
                  <td>
                    <a
                      href="#"
                      className="text-muted text-hover-primary mb-1 fs-6"
                    >
                      #10 Jamie Kaiser Jr
                    </a>
                  </td>
                  <td className="text-end text-muted fw-semibold">2</td>
                </tr>
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  );
};

export { TablesWidget3 };
