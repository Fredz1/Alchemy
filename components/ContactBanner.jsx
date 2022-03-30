// modules
import React from 'react'
import Image from 'next/image'

// styles
import style from '../styles/contactBanner.module.css'

// Assets
import contactPic from '../public/assets/media/contactimage.jpg'
import mailIcon from '../public/assets/icons/Mail-64.png'

/* 
  HOOK
*/
const ContactBanner = () => {
  return (
    <div className={style.container}>

      <div className={style.image}>
        <Image src={contactPic} layout='fill' objectFit='contain' />
      </div>

      <div className={style.form}>
        {/* Name, Surname, message, email, telephone, number */}
        <h3 >
          Let us make your dream work or if you need a financial planner.
        </h3>
        <div >

          {/* <div className={style.icon}>
            <Image src={mailIcon} layout='fill' objectFit='contain' />
          </div> */}

          <p>
            Call us on 076 134 9290
          </p>
          <p>between 8:30am and 5pm weekdays</p>

        </div>

        <div>

          {/* <div className={style.icon}>
            <Image src={mailIcon} layout='fill' objectFit='contain' />
          </div> */}
          
          <p>
            Or email us at <a href="mailto:alchemy@alchemy.co.za?subject=Im%20interested%20in&body=I%20would%20like%20you%20to%20contact%20me.">alchemy@alchemy.co.za</a>  and will get back to you within 24 hours
          </p>

        </div>

      </div>

    </div>
  )
}

export default ContactBanner