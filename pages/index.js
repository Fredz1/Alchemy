// Modules
import React from 'react'
import Head from 'next/head'
// Components
import MainBanner from '../components/MainBanner'
import Solutions from '../components/Solutions'
import ContactBanner from '../components/ContactBanner'
//import TopMediaBar from '../components/TopMediaBar'

/* 
  HOOK
*/
const index = () => {
  return (
    <div>
      <>
        <Head>
          <title>
            Alchemy Financial Services
          </title>
          <meta name='description' content='Alchemy Financial Services, Investment Insurance Life cover advisors.'/>
        </Head>
      </>
      <MainBanner />
      <Solutions />
      <ContactBanner />
    </div>
  )
}

export default index