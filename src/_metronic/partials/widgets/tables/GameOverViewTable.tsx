/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  Home: string
  Away: string
  className: string
}

const GameOverViewTable: React.FC<Props> = ({className, Home, Away}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Game Statistics</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold fs-30 text-muted'>
                <th className='min-w-50px '></th>
                <th className='min-w-100 text-primary' style={{textAlign: 'center'}} colSpan={4}>
                  QUARTER
                </th>

                <th className='min-w-20px '></th>
              </tr>
              <tr className='fw-bold text-muted'>
                <th className='min-w-50px text-primary'>Team</th>
                <th className='min-w-40px text-end'>1</th>
                <th className='min-w-20px text-end'>2</th>
                <th className='min-w-20px text-end'>3</th>
                <th className='min-w-20px text-end'>4</th>
                <th className='min-w-20px text-end text-primary'>Total</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>{Home}</div>
                  </div>
                </td>
                <td>
                  <div className='text-end text-muted'>
                    <div className='d-flex justify-content-start flex-column'>2</div>
                  </div>
                </td>
                <td>
                  <div className='text-end text-muted'>
                    <div className='d-flex justify-content-start flex-column'>-</div>
                  </div>
                </td>
                <td>
                  <div className='text-end text-muted'>
                    <div className='d-flex justify-content-start flex-column'>-</div>
                  </div>
                </td>
                <td>
                  <div className='text-end text-muted'>
                    <div className='d-flex justify-content-start flex-column'>3</div>
                  </div>
                </td>
                <td>
                  <div className='text-end'>
                    <div className='d-flex justify-content-start flex-column'>5</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>{Away}</div>
                  </div>
                </td>
                <td>
                  <div className='text-end text-muted'>
                    <div className='d-flex justify-content-start flex-column'>3</div>
                  </div>
                </td>
                <td>
                  <div className='text-end text-muted'>
                    <div className='d-flex justify-content-start flex-column'>3</div>
                  </div>
                </td>
                <td>
                  <div className='text-end text-muted'>
                    <div className='d-flex justify-content-start flex-column'>2</div>
                  </div>
                </td>
                <td>
                  <div className='text-end text-muted'>
                    <div className='d-flex justify-content-start flex-column'>3</div>
                  </div>
                </td>
                <td>
                  <div className='text-end '>
                    <div className='d-flex justify-content-start flex-column'>11</div>
                  </div>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {GameOverViewTable}
