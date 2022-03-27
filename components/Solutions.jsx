// Modules
import React from 'react'
import Image from 'next/image'

// Style
import style from '../styles/solutions.module.css'

// Assets
import sign from '../public/assets/media/solutionImage.jpg'

const Solutions = () => {
  return (
    <div className={style.container}>
      <div className={style.offering}>
        <div>
          <h3>
            Save and Invest
          </h3>
          <div className={style.image}>
            <Image src={sign} layout='fill' objectFit='contain'/>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, nihil. Deserunt officiis obcaecati sed sapiente facere nemo nisi deleniti odit, modi cumque incidunt recusandae dolores doloremque porro tempora excepturi impedit.
          </p>
        </div>
        <div>
          <h3>
            Pre-Retirement
          </h3>
          <div className={style.image}>
            <Image src={sign} layout='fill' objectFit='contain'/>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ducimus eum officiis sunt culpa voluptatem fugit repudiandae id aliquam nulla, excepturi minima placeat architecto doloribus autem voluptatibus sint accusamus commodi?
          </p>
        </div>
        <div>
          <h3>
            Post-Retirement
          </h3>
          <div className={style.image}>
            <Image src={sign} layout='fill' objectFit='contain'/>
          </div>
          <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam rerum autem cupiditate reiciendis ratione corporis voluptatem fugiat adipisci sed qui architecto, sit nisi recusandae ducimus rem quasi maxime! Ipsam, nisi?
          </p>
        </div>
        <div>
          <h3>
            Life Cover
          </h3>
          <div className={style.image}>
            <Image src={sign} layout='fill' objectFit='contain'/>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repudiandae veniam, fugit quo fugiat delectus deleniti quod vero, nesciunt recusandae facere, possimus earum expedita qui nisi sequi voluptatum blanditiis commodi.
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Solutions