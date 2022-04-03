// Components
import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import list from '../../public/information/advisors.json' 

// Style
import style from '../../styles/advisorProfile.module.css'

// Assets
import placeholder from '../../public/assets/Advisors/holder.jpg'

/* 
  HOOK
*/
const advisor = () => {

  // get Route
  const {query: { advisor }} = useRouter()

  const [advisorInfo, setAdvisorInfo] = useState('Loading')
  const [image, setImage] = useState(placeholder)

  // Set adivor information on load
  useEffect(
    () => {

      const advisorData = list.findIndex(
        el => el.unique === advisor
      )

      if (advisorData != -1) {
        setAdvisorInfo(list[advisorData])
        setImage(require(`../../public/assets/Advisors/${list[advisorData].image}`))
      }
      
    },
    [advisor]
  )
  

  return (
    <div className={style.container}>
      <div className={style.left}>

        <div className={style.image}>
          <Image src={image} layout='fill' objectFit='contain' placeholder='blur'/>
        </div>

        {/* Contact number */}
        <div>
          {
            advisorInfo && advisorInfo.contactInfo ? 
              advisorInfo.contactInfo.map(
                (el, index) => {
                  return(
                    <div key={index}>
                      {Object.keys(el)}: {Object.values(el)}
                    </div>
                  )
                }
              ):
              <div>
                Please contact: 021 276 1279
              </div>
          }
        </div>
      </div>

      <div className={style.right}>
        {/* About section */}
        <div>
          <h3>
            About 
          </h3>
          <p>
            {
              advisorInfo && advisorInfo.about ?
                Object.values(advisorInfo.about)
                :
                <>Nothing here</>
            }
          </p>
        </div>

        {/* Achievements */}
        <div>
          <h3>
            Achievments
          </h3>
          <p>
            {
              advisorInfo && advisorInfo.awards ?
                advisorInfo.awards.map(
                  (el, index) => {
                    return(
                      <div>
                        {el}
                      </div>
                    )
                  }
                )
                :
                <>Watch this space</>
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default advisor