// Modules
import React from 'react'
import Image from 'next/image'

// Style
import style from '../styles/advisorCard.module.css'

// Asetts

// HOOK
const AdvisorCard = ({details, image}) => {

  return (
    <div className={style.container}>
      <div className={style.image}>
        <Image src={require(`../public/assets/Advisors/${image}`)} layout='fill'  objectFit='contain'/>
      </div>
      <div className={style.info}>
        {details.name} {details.surname}
      </div>
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