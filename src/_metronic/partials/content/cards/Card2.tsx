/* eslint-disable jsx-a11y/anchor-is-valid */
import {Dispatch, FC, SetStateAction} from 'react'
import {Link} from 'react-router-dom'
import {IconUserModel} from '../../../../app/modules/profile/ProfileModels'
import {UsersList} from '../../../../app/modules/profile/components/UsersList'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  icon: string
  badgeColor: string
  status: string
  statusColor: string
  title: string
  description: string
  date: string
  budget: string
  progress: number
  users?: Array<IconUserModel>
  setSelectedPlayer: Dispatch<SetStateAction<string>>
}

const Card2: FC<Props> = ({
  icon,
  setSelectedPlayer,
  badgeColor,
  status,
  statusColor,
  title,
  description,
  date,
  budget,
  progress,
  users = undefined,
}) => {
  return (
    <div
      className='card border border-2 border-primary border-hover'
      onClick={() => setSelectedPlayer(title)}
    >
      <img src={toAbsoluteUrl(icon)} alt='card2' className='card-img-top' />

      <div className='card-body p-9'>
        <div className='d-flex justify-content-between fs-3 fw-bolder text-dark  mb-7'>
          <div>{title} </div>
          <div className='fs-6 fw-light align-self-center text-primary '>Position</div>
        </div>

        <div className='d-flex flex-wrap mb-5 justify-content-between'>
          <div className=' min-w-90px py-3  mb-3'>
            <div className='text-center fs-3 text-gray-800 fw-bolder'>27</div>
            <div className=' text-center fs-7 fw-bold text-primary '>MINUTES</div>
          </div>
          <div className=' min-w-90px py-3  mb-3'>
            <div className='text-center fs-3 text-gray-800 fw-bolder'>27</div>
            <div className='text-center text-primary fs-7 fw-bold text-primary '>POINTS</div>
          </div>
          <div className=' min-w-90px py-3  mb-3'>
            <div className='text-center fs-3 text-gray-800 fw-bolder'>27</div>
            <div className='text-center text-primary fs-7 fw-bold text-primary '>FG%</div>
          </div>
        </div>
        <div className='d-flex flex-wrap mb-5 justify-content-between'>
          <div className=' min-w-90px py-3  mb-3'>
            <div className='text-center fs-3 text-gray-800 fw-bolder'>27</div>
            <div className='text-center text-primary fs-7 fw-bold text-primary '>REBOUNDS</div>
          </div>
          <div className=' min-w-90px py-3  mb-3'>
            <div className='text-center fs-3 text-gray-800 fw-bolder'>27</div>
            <div className='text-center text-primary  fs-7 fw-bold text-primary '>ASSISTS</div>
          </div>
          <div className=' min-w-90px py-3  mb-3'>
            <div className='text-center fs-3 text-gray-800 fw-bolder'>27</div>
            <div className='text-center text-primary fs-7 fw-bold text-primary '>STEALS</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Card2}
