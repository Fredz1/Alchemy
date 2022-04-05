// modules
import React from 'react'
import Image from 'next/image'


// Style
import style from '../styles/aboutus.module.css'

// Assets
import ceoImage from '../public/assets/media/ceo_image.jpg'

const aboutus = () => {


  return (
    <div className={style.container}>
      <div className={style.bannerImage}>
        <Image src={ceoImage} layout='fill' objectFit='cover' quality={50}/>
      </div>



      <div>
        <h3>
          About Us
        </h3>
        <p>
          Alchemy Financial Services came into exitance in 2010 with the very clear intension of creating a space for advisors to learn and grow as financial coaches, business owners and contributing members of society.  The concept of “work-life balance” is one of our guiding mantras.  For advisors to give appropriate advice they themselves need an environment to learn and to receive guidance.  Alchemy Financial Services is that place where ‘Alchemy’ is achieved every day - “Where we turn Lead into Gold.”
        </p>

        <p>
          I have developed a process known as the ‘Alchemy formula’ that is used as a guideline for advice, constancy and structure. This formula is not only contributing to the success of our advice team but also ensures that our customers consistently receive the best financial advice possible.   
        </p>

        <p>
          As the Franchise Principle my primary focus is investing in my relationship with the team, motivating and guiding our team to achieve balance as human beings and thus ensuring that this translates to our customers in receiving the best possible advice and support. 
        </p>

        <p>
          Alchemy is a family, and our immovable values are, integrity, respect and discipline. 
        </p>

        <p>
          As for me, I manage my daily activities with one thing in mind, and that is Humanity.
        </p>
      </div>

    </div>
  )
}

export default aboutus