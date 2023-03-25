/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {Card2} from '../../../_metronic/partials/content/cards/Card2'
import {PlayerStatsTable} from '../../../_metronic/partials/widgets/tables/PlayerStatsTable'
import {IconUserModel} from '../profile/ProfileModels'

type Props = {
  className: string
  Home: string
  Away: string
}

const PlayerStats: React.FC<Props> = ({className, Home, Away}) => {
  const [TeamCheckBox, setTeamCheckBox] = useState(false)
  const [SelectedPlayer, setSelectedPlayer] = useState('')
  const users1: Array<IconUserModel> = [
    {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
    {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
    {name: 'Susan Redwood', initials: 'S', color: 'primary'},
  ]
  return (
    <>
      {SelectedPlayer == '' ? (
        <>
          {/* begin::Header */}
          <div className='d-flex flex-wrap flex-stack mb-6'>
            <h3 className='fw-bolder my-2'>
              Team
              <span className='fs-6 text-gray-400 fw-bold mx-2'>{!TeamCheckBox ? Home : Away}</span>
            </h3>

            <div className='d-flex flex-wrap my-2'>
              <div className='d-flex w-100 justify-content-center'>
                {' '}
                <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                  <label
                    className={`form-check-label fs-3  me-4 ${
                      !TeamCheckBox ? 'fw-bold text-primary' : ' text-muted'
                    }`}
                  >
                    {Home}
                  </label>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='notifications'
                    onChange={(e) => {
                      setTeamCheckBox(e.target.checked)
                    }}
                    defaultChecked={false}
                  />
                  <label
                    className={`form-check-label fs-3  ms-4 ${
                      TeamCheckBox ? 'fw-bold text-primary' : ' text-muted'
                    }`}
                  >
                    {Away}
                  </label>
                </div>
              </div>
              {/* <div className='me-4'>
            <select
              name='status'
              data-control='select2'
              data-hide-search='true'
              className='form-select form-select-sm form-select-white w-125px'
              defaultValue='Active'
            >
              <option value='Active'>Active</option>
              <option value='Approved'>In Progress</option>
              <option value='Declined'>To Do</option>
              <option value='In Progress'>Completed</option>
            </select>
          </div> */}
            </div>
          </div>

          {/* end::Header */}
          {/* begin::Body */}

          <div className='row g-6 g-xl-9'>
            <div className='col-md-6 col-xl-4'>
              <Card2
                icon='\media\icons\duotune\general\james.png'
                badgeColor='primary'
                status='In Progress'
                statusColor='primary'
                title='JAMES'
                description='CRM App application to HR efficiency'
                date='November 10, 2021'
                budget='$284,900.00'
                progress={50}
                users={users1}
                setSelectedPlayer={setSelectedPlayer}
              />
            </div>
          </div>
          {/* begin::Body */}
        </>
      ) : (
        <PlayerStatsTable setSelectedPlayer={setSelectedPlayer} className='mb-5 mb-xl-8' />
      )}
    </>
  )
}

export {PlayerStats}
