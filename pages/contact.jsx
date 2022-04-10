// modules
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// style
import style from '../styles/contact.module.css'

// Assets
import facebookIcon from '../public/assets/icons/socialMediaIcons/facebookSocialMediaColor.png'
import linkedInIcon from '../public/assets/icons/socialMediaIcons/linkedinSocialMediaColor.png'

const contact = () => {

  // Input form State
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    let formData = {
      name,
      email,
      phoneNum,
      message
    }

    console.log(formData)
  }

  return (
    <div className={style.container}>
      <div className={style.details}>
        
        <div>
          <h3>
            Office 
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

          <Link href="https://www.facebook.com/alchemy.oldmutual" _blank>
            <a>
              <Image src={facebookIcon}/>
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/frederick-williams-b2215730/">
            <a>
              <Image src={linkedInIcon}/>
            </a>
            
          </Link>


          <Link href="https://www.instagram.com/alchemy.financialservices/">
            <a>
              <Image src={linkedInIcon}/>
            </a>
          </Link>

          
        </div>

        <div>
          <h3>
            <Link href='https://goo.gl/maps/Kr4FfZWMXYNzY5Kz5' _blank>
              <a>
                Directions
              </a>
            </Link>
          </h3>
            <p>
              Unit 3
            </p>
            <p>
              Howard Terraces
            </p>
            <p>
              Rose Innes Way
            </p>
            <p>
              Pinelands
            </p>
          </div>


      </div>
      

      <div className={style.form}>
        <div>
          <h3>
            Enter your details
          </h3> 
        </div>
        <div>
          <input type="text" placeholder='You full name' value={name} onChange={e => setName(e.target.value)}/>
          <input type="email" placeholder='your@email.com' value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="tel" placeholder='555 555 5555' value={phoneNum} onChange={e => setPhoneNum(e.target.value)}/>
        </div>
        <input type="textarea" placeholder='Write your message here' value={message} onChange={e => setMessage(e.target.value)}/>
        
        
        <button type="submit" onClick={() => sendMessage()}>Submit</button>

      </div>

    </div>
  )
}

export default contact