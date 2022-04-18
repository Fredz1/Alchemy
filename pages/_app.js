// Page Imports
import HomeLayout from "../layouts/HomeLayout"

// modules imports
import React from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { GTM_ID, pageview } from '../util/gtm'
import { useEffect } from 'react'

// Style
import '../styles/globals.css'

/* HOOK */
const MainPage = ( { Component, pageProps } ) => {

  const router = useRouter()

  // detect route change
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])
  
  return (
    

      <HomeLayout pageProps>
        <>
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', '${GTM_ID}');
              `,
            }}
          />
        </>
        <Component {...pageProps} />
      </HomeLayout>
    
  )
}

export default MainPage