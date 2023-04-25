import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";
import { FeedsWidget2 } from "../../../_metronic/partials/widgets";

export function CommentsPage() {
  return (
    <>
      <div className={`card mb-5 mb-xl-8`}>
        {/* begin::Body */}
        <div className="card-body pb-0">
          {/* begin::Reply input */}
          <form className="position-relative mb-6">
            <textarea
              className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
              rows={1}
              placeholder="Add Comment..."
            ></textarea>

            <div className="position-absolute top-0 end-0 me-n5">
              <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                <KTSVG
                  path="/media/icons/duotune/general/gen016.svg"
                  className="svg-icon-muted svg-icon-2hx"
                />
              </span>
            </div>
          </form>
          {/* edit::Reply input */}
        </div>
        {/* end::Body */}
      </div>
      <FeedsWidget2 className="mb-5 mb-xl-8" />
      <FeedsWidget2 className="mb-5 mb-xl-8" />{" "}
      <FeedsWidget2 className="mb-5 mb-xl-8" />{" "}
      <FeedsWidget2 className="mb-5 mb-xl-8" />{" "}
      <FeedsWidget2 className="mb-5 mb-xl-8" />
      <FeedsWidget2 className="mb-5 mb-xl-8" />
      <FeedsWidget2 className="mb-5 mb-xl-8" />{" "}
      <FeedsWidget2 className="mb-5 mb-xl-8" />{" "}
      <FeedsWidget2 className="mb-5 mb-xl-8" />{" "}
      <FeedsWidget2 className="mb-5 mb-xl-8" />
    </>
  );
}
