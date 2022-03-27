// Modules
import React from 'react'
import Link from 'next/link'

// Style
import style from '../../styles/advisors.module.css'

// Assets
import list from '../../public/information/advisors'

// Components
import AdvisorCard from '../../components/AdvisorCard'

// HOOK
const index = () => {
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <p className={style.bannerText}>
          Meet Our Advisors
        </p>
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