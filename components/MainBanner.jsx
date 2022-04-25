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
      <div className={style.mainBannerContainer} priority="true" />
    </div>
  )
}

export default MainBanner