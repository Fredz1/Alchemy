import React from 'react';

//styles
import style from '../styles/topMediaBar.module.css'

//Modules
import Image from 'next/image'

//Media
import facebookIcon from '../public/assets/icons/socialMediaIcons/facebookSocialMediaColor.png'
import instagramIcon from '../public/assets/icons/socialMediaIcons/instagramIcon.png'

const TopMediaBar = () => {
  return (
    <div className={style.container}>
      <div className={style.socialMediaIcon}>
        <Image src={facebookIcon} alt="FacebookIcon" layout='fill' objectFit='contain' quality={60}/>
      </div>
      <div className={style.socialMediaIcon}>
        <Image src={instagramIcon} alt="instagramIcon" layout='fill' objectFit='contain' quality={60}/>
      </div>
    </div>
  )
}

export default TopMediaBar
