// Modules
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Style
import style from '../styles/advisorCard.module.css'


/* 
  HOOK
*/
const AdvisorCard = ({details, image}) => {



  const Router = useRouter()

  return (
    <div className={style.container}>

      <div className={style.image}>
        <Image 
          src={require(`../public/assets/Advisors/${image}`)} 
          layout='fill'  
          objectFit='contain'
        />
      </div>

      <div className={style.info}>
        {details.name} {details.surname}
      </div>

      <div className={style.info}>
        {details.position}
      </div>

      <button onClick={() => Router.push(`advisors/${details.unique}`)}>
        Profile
      </button>
    </div>
  )
}

export default AdvisorCard

/* 
{
    "unique": "SAmerica",
    "name": "Seraj",
    "surname": "America",
    "image": "serajHeadShot.png",
    "years": 20,
    "car": "Mercedes S-Class",
    "position": "Senior Advisor",
    "number": 555555555
}
*/