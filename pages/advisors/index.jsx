// Modules
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Style
import style from '../../styles/advisors.module.css'

// Assets
import list from '../../public/information/advisors'
import bannerImage from '../../public/assets/media/team_image.jpg'



// Components
import AdvisorCard from '../../components/AdvisorCard'

// HOOK
const index = () => {
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <div className={style.bannerImage}>
          <Image layout='fill' objectFit='cover' src={bannerImage} />
        </div>
        {/* <p className={style.bannerText}>
          Team
        </p> */}
        
      </div>
      <div className={style.advisorSection}>
        {
          list? 
            list.map(
              el  =>  {
                return(
                  <AdvisorCard details={el} key={el.unique} image={el.image} />
                )
              }
            )
          :
          ' nothing to show'
        }
      </div>
    </div>
  )
}

export default index