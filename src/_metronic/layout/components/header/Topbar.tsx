/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG} from '../../../helpers'
import {ThemeModeSwitcher} from '../../../partials'

const Topbar: FC = () => (
  <div className='d-flex flex-shrink-0'>
    {/* begin::Invite user */}

    {/* end::Invite user */}

    {/* begin::Create app */}

    {/* end::Create app */}

    {/* begin::Theme mode */}
    <div className='d-flex align-items-center  ms-3'>
      <ThemeModeSwitcher toggleBtnClass=' flex-center bg-body btn-color-gray-600 btn-active-color-primary h-40px' />
    </div>
    {/* end::Theme mode */}

    {/* CHAT */}
  </div>
)

export {Topbar}
