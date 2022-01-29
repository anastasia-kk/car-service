/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from 'base/layout/core'
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
} from 'base/partials/widgets'
import {useAuth} from 'context/AuthContext'
import {Navigate} from 'react-router-dom'
import {AsideMenuMain} from 'base/layout/components/aside/AsideMenuMain'
import {MasterLayout} from 'base/layout/MasterLayout'
import {Calendar} from '../../components/Calendar';

const DashboardPage: FC = () => (
  <MasterLayout>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
      </div>
      <div className='col-xxl-4'>
        <ListsWidget5 className='card-xxl-stretch' />
      </div>
      <div className='col-xxl-4'>
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
        {/* partials/widgets/lists/_widget-4', 'class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5' */}
      </div>
    </div>
    {/* end::Row */}

    <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-4'>
      </div>
      <div className='col-xxl-8'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div>
    </div>

    <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-4'>
      </div>
      <div className='col-xxl-8'>
        <Calendar className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div>
    </div>
  </MasterLayout>
)

export const Dashboard: FC = () => {
  const intl = useIntl()
  const {isLoggedIn} = useAuth()
  return (
    <>
      {!isLoggedIn && (
        <Navigate to="/login" replace={true} />
      )}
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
      <AsideMenuMain />
     </>
  )
}

