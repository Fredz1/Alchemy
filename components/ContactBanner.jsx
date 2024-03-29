// modules
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
        <Image src={contactPic} layout='fill' objectFit='contain' alt='Hand holding business card'/>
      </div>

      <div className={style.form}>
        
        <h3 >
          Let us make your dream work or if you need a financial planner.
        </h3>
        <div>

          <div className={style.icon}>
            <Image src={mailIcon} layout='fill' objectFit='contain' alt='phone icon'/>
          </div>

          <div>
            <p> Call us on <a href="tel:+27 027 134 9290">076 134 9290</a> </p>
            <p>Between 8:30am and 5pm weekdays and we will gladly assist you.</p>
          </div>

        </div>

        <div>

          <div className={style.icon}>
            <Image src={mailIcon} layout='fill' objectFit='contain' alt='mail icon'/>
          </div>
          
          <div>
            <p> Or email us at <a href="mailto:alchemy@alchemy.co.za?subject=Im%20interested%20in&body=I%20would%20like%20you%20to%20contact%20me.">alchemy@alchemy.co.za</a></p>
            <p>We gladly get back to you within 24 hours</p> 
          </div>

        </div>

        <div>

          <div className={style.icon}>
            <Image src={mailIcon} layout='fill' objectFit='contain' alt='message icon'/>
          </div>
          <p>
            Click <Link href="/contact"><a>here</a></Link> to use our contact form
          </p>
        </div>

      </div>

    </div>
  )
}

export default ContactBanner