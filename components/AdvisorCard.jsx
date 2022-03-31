// Modules
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Style
import style from '../styles/advisorCard.module.css'


/* 
  HOOK
*/
const AdvisorCard = ({details, image}) => {

  return (
    <div className={style.container}>
      <div className={style.image}>
        <Image src={require(`../public/assets/Advisors/${image}`)} layout='fill'  objectFit='contain'/>
      </div>
      <div className={style.info}>
        {details.name} {details.surname}
      </div>
      <Link href={`/advisors/${details.unique}`}>
        <a>Profile</a>
      </Link>
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