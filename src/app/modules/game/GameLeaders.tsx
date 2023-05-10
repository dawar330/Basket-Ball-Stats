/* eslint-disable jsx-a11y/anchor-is-valid */

import { TablesWidget3 } from "../../../_metronic/partials/widgets";

export function GameLeaders() {
  return (
    <>
      <div className="row g-5 g-xl-8">
        <div className="col-xl-6">
          <TablesWidget3 label="Points" className="card-xl-stretch mb-xl-8" />
        </div>
        <div className="col-xl-6">
          <TablesWidget3 label="Rebounds" className="card-xl-stretch mb-xl-8" />
        </div>
        <div className="col-xl-6">
          <TablesWidget3 label="Assists" className="card-xl-stretch mb-xl-8" />
        </div>
        <div className="col-xl-6">
          <TablesWidget3 label="Blocks" className="card-xl-stretch mb-xl-8" />
        </div>
        {/* <div className="col-xl-6">
          <TablesWidget3
            label="Personal Fouls"
            className="card-xl-stretch mb-xl-8"
          />
        </div>
        <div className="col-xl-6">
          <TablesWidget3
            label="Efficiency"
            className="card-xl-stretch mb-xl-8"
          />
        </div>
        <div className="col-xl-6">
          <TablesWidget3
            label="Usage Percentage"
            className="card-xl-stretch mb-xl-8"
          />
        </div> */}
      </div>
    </>
  );
}
