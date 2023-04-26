/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

type Props = {
  className: string;
  Home: string;
  Away: string;
};

const ListsWidget3: React.FC<Props> = ({ className, Home, Away }) => {
  return (
    <div
      className={`card  ${className}`}
      style={{
        overflow: "scroll",
        height: "500px",
      }}
    >
      {/* begin::Header */}
      <div className="card-header border-0">
        <h3 className="card-title fw-bold text-dark">Scoring Plays</h3>
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
      <div className="card-body pt-2">
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          <div className="d-flex me-3">
            <span>08:42</span>
          </div>

          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-primary me-5"></span>
          {/* end::Bullet */}

          {/* begin::Description */}
          <div className="flex-grow-1">
            <span className="text-gray-800 text-hover-primary fw-bold fs-6">
              03 Bryson Tucker FT GOOD (3 Pt)
            </span>
            <div className="d-flex">
              <span
                className="badge badge-light-warning  text-muted fw-semibold d-block"
                style={{ fontSize: "1rem" }}
              >
                FT
              </span>
            </div>
          </div>
          {/* end::Description */}
          <div className="d-flex flex-column g-5">
            <div className="d-flex mb-2 justify-content-around">
              <span
                className="badge badge-warning fw-bold me-2 "
                style={{ fontSize: "1rem" }}
              >
                {Home.slice(0, 3).toUpperCase()}
              </span>
              <span
                className="badge badge-primary fw-bold "
                style={{ fontSize: "1rem" }}
              >
                {Away.slice(0, 3).toUpperCase()}
              </span>
            </div>
            <div className="d-flex justify-content-around text-muted fw-semibold">
              <span className="">5</span>
              <span className="">11</span>
            </div>
          </div>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          <div className="d-flex me-3">
            <span>08:40</span>
          </div>
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-warning me-5"></span>
          {/* end::Bullet */}

          {/* begin::Description */}
          <div className="flex-grow-1">
            <span className="text-gray-800 text-hover-primary fw-bold fs-6">
              10 Jamie Kaiser Jr 3PTR GOOD (3 Pt); 04 Jacoi Hutchinson Assist (1
              Asst)
            </span>
            <div className="d-flex">
              <span
                className="badge badge-light-warning  text-muted fw-semibold d-block"
                style={{ fontSize: "1rem" }}
              >
                3PTR
              </span>
            </div>
          </div>
          {/* end::Description */}
          <div className="d-flex flex-column g-5">
            <div className="d-flex mb-2 justify-content-around">
              <span
                className="badge badge-warning fw-bold me-2 "
                style={{ fontSize: "1rem" }}
              >
                {Home.slice(0, 3).toUpperCase()}
              </span>
              <span
                className="badge badge-primary fw-bold "
                style={{ fontSize: "1rem" }}
              >
                {Away.slice(0, 3).toUpperCase()}
              </span>
            </div>
            <div className="d-flex justify-content-around text-muted fw-semibold">
              <span className="">5</span>
              <span className="">8</span>
            </div>
          </div>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          <div className="d-flex me-3">
            <span>08:38</span>
          </div>
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-primary me-5"></span>
          {/* end::Bullet */}

          {/* begin::Description */}
          <div className="flex-grow-1">
            <span className="text-gray-800 text-hover-primary fw-bold fs-6">
              03 Bryson Tucker JUMPER GOOD (2 Pt)
            </span>
            <div className="d-flex">
              <span
                className="badge badge-light-warning  text-muted fw-semibold d-block"
                style={{ fontSize: "1rem" }}
              >
                JUMPER
              </span>
            </div>
          </div>
          {/* end::Description */}
          <div className="d-flex flex-column g-5">
            <div className="d-flex mb-2 justify-content-around">
              <span
                className="badge badge-warning fw-bold me-2 "
                style={{ fontSize: "1rem" }}
              >
                {Home.slice(0, 3).toUpperCase()}
              </span>
              <span
                className="badge badge-primary fw-bold "
                style={{ fontSize: "1rem" }}
              >
                {Away.slice(0, 3).toUpperCase()}
              </span>
            </div>
            <div className="d-flex justify-content-around text-muted fw-semibold">
              <span className="">2</span>
              <span className="">8</span>
            </div>
          </div>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          <div className="d-flex me-3">
            <span>08:37</span>
          </div>
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-primary me-5"></span>
          {/* end::Bullet */}

          {/* begin::Description */}
          <div className="flex-grow-1">
            <span className="text-gray-800 text-hover-primary fw-bold fs-6">
              03 Bryson Tucker FT GOOD (3 Pt)
            </span>
            <div className="d-flex">
              <span
                className="badge badge-light-warning  text-muted fw-semibold d-block"
                style={{ fontSize: "1rem" }}
              >
                FT
              </span>
            </div>
          </div>
          {/* end::Description */}
          <div className="d-flex flex-column g-5">
            <div className="d-flex mb-2 justify-content-around">
              <span
                className="badge badge-warning fw-bold me-2 "
                style={{ fontSize: "1rem" }}
              >
                {Home.slice(0, 3).toUpperCase()}
              </span>
              <span
                className="badge badge-primary fw-bold "
                style={{ fontSize: "1rem" }}
              >
                {Away.slice(0, 3).toUpperCase()}
              </span>
            </div>
            <div className="d-flex justify-content-around text-muted fw-semibold">
              <span className="">2</span>
              <span className="">6</span>
            </div>
          </div>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          <div className="d-flex me-3">
            <span>08:34</span>
          </div>
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-primary me-5"></span>
          {/* end::Bullet */}

          {/* begin::Description */}
          <div className="flex-grow-1">
            <span className="text-gray-800 text-hover-primary fw-bold fs-6">
              11 Khani Rooths DUNK GOOD (2 Pt); 05 Amier Ali Assist (1 Asst)
            </span>
            <div className="d-flex">
              <span
                className="badge badge-light-warning  text-muted fw-semibold d-block"
                style={{ fontSize: "1rem" }}
              >
                DUNK
              </span>
            </div>
          </div>
          {/* end::Description */}
          <div className="d-flex flex-column g-5">
            <div className="d-flex mb-2 justify-content-around">
              <span
                className="badge badge-warning fw-bold me-2 "
                style={{ fontSize: "1rem" }}
              >
                {Home.slice(0, 3).toUpperCase()}
              </span>
              <span
                className="badge badge-primary fw-bold "
                style={{ fontSize: "1rem" }}
              >
                {Away.slice(0, 3).toUpperCase()}
              </span>
            </div>
            <div className="d-flex justify-content-around text-muted fw-semibold">
              <span className="">2</span>
              <span className="">3</span>
            </div>
          </div>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          <div className="d-flex me-3">
            <span>08:30</span>
          </div>
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-primary me-5"></span>
          {/* end::Bullet */}

          {/* begin::Description */}
          <div className="flex-grow-1">
            <span className="text-gray-800 text-hover-primary fw-bold fs-6">
              04 Marcus Allen FT GOOD (1 Pt)
            </span>
            <div className="d-flex">
              <span
                className="badge badge-light-warning  text-muted fw-semibold d-block"
                style={{ fontSize: "1rem" }}
              >
                FT
              </span>
            </div>
          </div>
          {/* end::Description */}
          <div className="d-flex flex-column g-5">
            <div className="d-flex mb-2 justify-content-around">
              <span
                className="badge badge-warning fw-bold me-2 "
                style={{ fontSize: "1rem" }}
              >
                {Home.slice(0, 3).toUpperCase()}
              </span>
              <span
                className="badge badge-primary fw-bold "
                style={{ fontSize: "1rem" }}
              >
                {Away.slice(0, 3).toUpperCase()}
              </span>
            </div>
            <div className="d-flex justify-content-around text-muted fw-semibold">
              <span className="">2</span>
              <span className="">1</span>
            </div>
          </div>
        </div>
        {/* end:Item */}

        {/* begin::Item */}
        <div className="d-flex align-items-center ">
          <div className="d-flex me-3">
            <span>08:25</span>
          </div>
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-warning me-5"></span>
          {/* end::Bullet */}

          {/* begin::Description */}
          <div className="flex-grow-1">
            <span className="text-gray-800 text-hover-primary fw-bold fs-6">
              04 Jacoi Hutchinson LAYUP GOOD (2 Pt)
            </span>
            <div className="d-flex">
              <span
                className="badge badge-light-warning  text-muted fw-semibold d-block"
                style={{ fontSize: "1rem" }}
              >
                LAYUP
              </span>
            </div>
          </div>
          {/* end::Description */}
          <div className="d-flex flex-column g-5">
            <div className="d-flex mb-2 justify-content-around">
              <span
                className="badge badge-warning fw-bold me-2 "
                style={{ fontSize: "1rem" }}
              >
                {Home.slice(0, 3).toUpperCase()}
              </span>
              <span
                className="badge badge-primary fw-bold "
                style={{ fontSize: "1rem" }}
              >
                {Away.slice(0, 3).toUpperCase()}
              </span>
            </div>
            <div className="d-flex justify-content-around text-muted fw-semibold">
              <span className="">2</span>
              <span className="">0</span>
            </div>
          </div>
        </div>
        {/* end:Item */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidget3 };
