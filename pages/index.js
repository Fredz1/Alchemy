// Modules
import React from 'react'
import ContactBanner from '../components/ContactBanner'

// Components
import MainBanner from '../components/MainBanner'
import Solutions from '../components/Solutions'

/* 
  HOOK
*/
const index = () => {
  return (
    <div>
      <MainBanner />
      <Solutions />
      <ContactBanner />
    </div>
  )
}

export default index