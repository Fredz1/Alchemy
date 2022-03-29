// Components
import React from 'react'

// Style
import style from '../styles/mainBanner.module.css'

/* 
  HOOK
*/
const MainBanner = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.mainBannerContainer}>

        <p className={style.slogan}>
          The Powers Of Your Dreams
        </p>

      </div>
    </div>
  )
}

export default MainBanner