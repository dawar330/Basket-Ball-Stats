/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";

type Props = {
  className: string;
};

const ListsWidget5: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`card  ${className}`}
      style={{
        overflow: "scroll",
        height: "500px",
      }}
    >
      {/* begin::Header */}
      <div className="card-header align-items-center border-0 mt-4">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bold mb-2 text-dark">Latest Plays</span>
          {/* <span className='text-muted fw-semibold fs-7'>890,344 Sales</span> */}
        </h3>
        <div className="card-toolbar">
          {/* begin::Menu */}
          {/* <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 /> */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-5" style={{ filter: "blur(5px)" }}>
        {/* begin::Timeline */}
        <div className="timeline-label">
          {/* begin::Item */}
          <div className="timeline-item">
            {/* begin::Label */}
            <div className="timeline-label fw-bold text-gray-800 fs-6 d-flex-column justify-content-center">
              <div>21:03</div>
              <div>2ND</div>
            </div>

            {/* end::Label */}
            {/* begin::Badge */}
            <div className="timeline-badge">
              <i className="fa fa-genderless text-warning fs-1"></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className="timeline-content fw-semibold text-gray-800 ps-3">
              00 Blue Cain FOUL
              <span className="text-primary"> (1 PF)</span>.
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className="timeline-item">
            {/* begin::Label */}
            <div className="timeline-label fw-bold text-gray-800 fs-6 d-flex-column justify-content-center">
              <div>20:53</div>
              <div>2ND</div>
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className="timeline-badge">
              <i className="fa fa-genderless text-primary fs-1"></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className="timeline-content fw-semibold text-gray-800 ps-3">
              05 Vyctorius Miller DEF. REBOUND
              <span className="text-primary"> (1 Reb, 1 Def)</span>.
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className="timeline-item">
            {/* begin::Label */}
            <div className="timeline-label fw-bold text-gray-800 fs-6 d-flex-column justify-content-center">
              <div>21:03</div>
              <div>2ND</div>
            </div>

            {/* end::Label */}
            {/* begin::Badge */}
            <div className="timeline-badge">
              <i className="fa fa-genderless text-warning fs-1"></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className="timeline-content fw-semibold text-gray-800 ps-3">
              00 Blue Cain FOUL
              <span className="text-primary"> (1 PF)</span>.
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className="timeline-item">
            {/* begin::Label */}
            <div className="timeline-label fw-bold text-gray-800 fs-6 d-flex-column justify-content-center">
              <div>20:53</div>
              <div>2ND</div>
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className="timeline-badge">
              <i className="fa fa-genderless text-primary fs-1"></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className="timeline-content fw-semibold text-gray-800 ps-3">
              05 Vyctorius Miller DEF. REBOUND
              <span className="text-primary"> (1 Reb, 1 Def)</span>.
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className="timeline-item">
            {/* begin::Label */}
            <div className="timeline-label fw-bold text-gray-800 fs-6 d-flex-column justify-content-center">
              <div>21:03</div>
              <div>2ND</div>
            </div>

            {/* end::Label */}
            {/* begin::Badge */}
            <div className="timeline-badge">
              <i className="fa fa-genderless text-warning fs-1"></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className="timeline-content fw-semibold text-gray-800 ps-3">
              00 Blue Cain FOUL
              <span className="text-primary"> (1 PF)</span>.
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className="timeline-item">
            {/* begin::Label */}
            <div className="timeline-label fw-bold text-gray-800 fs-6 d-flex-column justify-content-center">
              <div>20:53</div>
              <div>2ND</div>
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className="timeline-badge">
              <i className="fa fa-genderless text-primary fs-1"></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className="timeline-content fw-semibold text-gray-800 ps-3">
              05 Vyctorius Miller DEF. REBOUND
              <span className="text-primary"> (1 Reb, 1 Def)</span>.
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className="timeline-item">
            {/* begin::Label */}
            <div className="timeline-label fw-bold text-gray-800 fs-6 d-flex-column justify-content-center">
              <div>21:03</div>
              <div>2ND</div>
            </div>

            {/* end::Label */}
            {/* begin::Badge */}
            <div className="timeline-badge">
              <i className="fa fa-genderless text-warning fs-1"></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className="timeline-content fw-semibold text-gray-800 ps-3">
              00 Blue Cain FOUL
              <span className="text-primary"> (1 PF)</span>.
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
        </div>
        {/* end::Timeline */}
      </div>
      {/* end: Card Body */}
    </div>
  );
};

export { ListsWidget5 };
