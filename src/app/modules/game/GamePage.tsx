import React, {useEffect, useState} from 'react'
import {Navigate, Route, Routes, Outlet, useLocation} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {GameTable} from '../../../_metronic/partials/widgets/tables/GameTable'
import {Settings} from '../accounts/components/settings/Settings'
import {GameOverview} from './components/GameOverview'
import {GameHeader} from './GameHeader'
import {PlayerStats} from './PlayerStats'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Account',
    path: '/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

type LocationState = {
  Home: string
  Away: string
}

const GamePage: React.FC = () => {
  const [Home, setHome] = useState('')
  const [Away, setAway] = useState('')
  const location = useLocation()
  useEffect(() => {
    let {Home, Away} = location.state as LocationState
    setHome(Home)
    setAway(Away)
  }, [location])
  return (
    <Routes>
      <Route
        element={
          <>
            <GameHeader Home={Home} Away={Away} />
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
              <GameOverview Home={Home} Away={Away} />
            </>
          }
        />
        <Route
          path='gamesheet'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Game Sheet</PageTitle>
              <GameTable className='mb-5 mb-xl-8' Home={Home} Away={Away} />
            </>
          }
        />
        <Route
          path='playerstats'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Player Statistics</PageTitle>
              <PlayerStats className='mb-5 mb-xl-8' Home={Home} Away={Away} />
            </>
          }
        />
        <Route
          path='comments'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Comments</PageTitle>
              <GameOverview Home={'Home'} Away={'Away'} />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/account/overview' />} />
      </Route>
    </Routes>
  )
}

export default GamePage
