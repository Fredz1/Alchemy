// Modules
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Style
import style from '../styles/advisorCard.module.css'
import placeholder from '../public/assets/Advisors/placeholder.png'


/* 
  HOOK
*/
const AdvisorCard = ({details, image}) => {



  const Router = useRouter()

  return (
    <div 
      className={style.container} 
      onClick={() => Router.push(`advisors/${details.unique}`)}
    >

      <div className={style.image}>
        <Image 
          src={require(`../public/assets/Advisors/${image}` || placeholder)} 
          layout='fill'  
          objectFit='contain'
        />
      </div>

      <div className={style.info}>
        {details.name} {details.surname}
      </div>
    </div>
  )
}

export default AdvisorCard