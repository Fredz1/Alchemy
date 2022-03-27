// Page Imports
import HomeLayout from "../layouts/HomeLayout"

// Component imports
import React from 'react'

// Style
import '../styles/globals.css'

/* HOOK */
const MainPage = ( { Component, pageProps } ) => {
  
  return (
    <HomeLayout pageProps>
      <Component {...pageProps} />
    </HomeLayout>
  )
}

export default MainPage