// modules
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// style
import style from '../styles/contact.module.css'

// Assets
import facebookIcon from '../public/assets/icons/socialMediaIcons/facebookSocialMediaColor.png'
import linkedInIcon from '../public/assets/icons/socialMediaIcons/linkedinSocialMediaColor.png'

const contact = () => {
  return (
    <div className={style.container}>
      <h2>
        Contact Us
      </h2> 
      <div>
        <h3>
          Office: 
        </h3>
        <p>
          <a href="tel:+27 21 279 1279">021 276 1279</a>
        </p>
      </div>
      <div>
        <h3>
          Email
        </h3>
        <p>
          <a href="mailto:alchemy@alchemy.co.za?subject=Im%20interested%20in&body=I%20would%20like%20you%20to%20contact%20me.">alchemy@alchemy.co.za</a>
        </p>
      </div>

      <div>
        <h3>
          Social Media
        </h3>
        <Link href="https://www.facebook.com/fredwil25/" _blank>
          <a>
            <Image src={facebookIcon}/>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/frederick-williams-b2215730/">
          <a>
            <Image src={linkedInIcon}/>
          </a>
        </Link>
        <Link href="https://www.instagram.com/fredimpossibleyt/">
          <a>
            <Image src={linkedInIcon}/>
          </a>
        </Link>
      </div>

      <div className={style.form}>
        <h3>
          Enter your details
        </h3>
        <input type="text" placeholder='You full name'/>
        <input type="email" placeholder='your@email.com'/>
        <input type="tel" placeholder='555 555 5555'/>
        <input type="textarea" placeholder='Write your message here'/>
        <button type="submit">Submit</button>
      </div>
    </div>
  )
}

export default contact