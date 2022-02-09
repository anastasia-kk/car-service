/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/details'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Car Details'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/history'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Service History'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/schedule'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Service Schedule'
        fontIcon='bi-layers'
      />
    </>
  )
}
