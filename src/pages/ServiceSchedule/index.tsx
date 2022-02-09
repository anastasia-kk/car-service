import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from 'base/layout/core'
import {useAuth} from 'context/AuthContext'
import {Navigate} from 'react-router-dom'
import {MasterLayout} from 'base/layout/MasterLayout'
import {Calendar} from 'components/Calendar'

export const ServiceSchedule: FC = () => {
  const intl = useIntl()
  const {isLoggedIn} = useAuth()
  return (
    <>
      {!isLoggedIn && (
        <Navigate to="/login" replace={true} />
      )}
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <MasterLayout>
        <div className='col-xxl-12'>
            <Calendar className='card-xxl-stretch mb-5 mb-xxl-8' />
        </div>
      </MasterLayout>
    </>
  )
}

