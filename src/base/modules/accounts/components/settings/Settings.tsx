import React from 'react'
import {ProfileDetails} from './cards/ProfileDetails'
import {ConnectedAccounts} from './cards/ConnectedAccounts'
import {EmailPreferences} from './cards/EmailPreferences'
import {Notifications} from './cards/Notifications'

export function Settings() {
  return (
    <>
      <ProfileDetails />
      <ConnectedAccounts />
      <EmailPreferences />
      <Notifications />
    </>
  )
}
