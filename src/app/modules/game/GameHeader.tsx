/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link, useLocation} from 'react-router-dom'

type Props = {
  Home: string
  Away: string
}

const GameHeader: React.FC<Props> = ({Home, Away}) => {
  const location = useLocation()
  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex justify-content-between flex-sm-nowrap'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
            <div className='me-7 mb-4'>
              <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                <img src={toAbsoluteUrl('/media/teamlogo/teama.jfif')} alt='Metronic' />
                <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-warning rounded-circle border border-4 border-white h-20px w-20px'></div>
              </div>
            </div>

            <div className='flex-grow-1'>
              <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                <div className='d-flex flex-column'>
                  <div className='d-flex align-items-center mb-2'>
                    <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                      {Home}
                    </a>
                  </div>
                </div>
              </div>

              <div className='d-flex flex-wrap flex-stack mt-12'>
                <div className='d-flex flex-column flex-grow-1 pe-8'>
                  <div className='d-flex flex-wrap'>
                    <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                      <div className='d-flex align-items-center'>
                        <div className='fs-2 fw-bolder'>5</div>
                      </div>

                      <div className='fw-bold fs-6 text-gray-400'>Points</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
            <div className=' order-sm-1 order-md-2 mb-4'>
              <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                <div className='position-absolute translate-middle bottom-0  start-0 mb-6 bg-primary rounded-circle border border-4 border-white h-20px w-20px'></div>
                <img src={toAbsoluteUrl('/media/teamlogo/teamb.jfif')} alt='Metronic' />
              </div>
            </div>

            <div className='flex-grow-1 mr-7'>
              <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                <div className='d-flex flex-column'>
                  <div className='d-flex align-items-center mb-2'>
                    <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                      {Away}
                    </a>
                  </div>
                </div>
              </div>

              <div className='d-flex flex-wrap flex-stack mt-12'>
                <div className='d-flex flex-column flex-grow-1 pe-8'>
                  <div className='d-flex flex-wrap'>
                    <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4  mb-3'>
                      <div className='d-flex align-items-center'>
                        <div className='fs-2 fw-bolder'>11</div>
                      </div>

                      <div className='fw-bold fs-6 text-gray-400'>Points</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/game/overview' && 'active')
                }
                to='/game/overview'
                state={{Home, Away}}
              >
                Overview
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/game/gamesheet' && 'active')
                }
                to='/game/gamesheet'
                state={{Home, Away}}
              >
                Game Sheet
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/game/playerstats' && 'active')
                }
                to='/game/playerstats'
                state={{Home, Away}}
              >
                Player Statistics
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/game/comments' && 'active')
                }
                to='/game/comments'
              >
                Comments
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export {GameHeader}
