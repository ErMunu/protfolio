import React from 'react'
import Head from 'next/head'
import { Admin, AppSettings } from 'react-bricks'

const AdminAppSettings: React.FC = () => {
  return (
    <Admin>
      <Head>
        <title>Master Muntazir | App Settings</title>
      </Head>
      <AppSettings />
    </Admin>
  )
}

export default AdminAppSettings
