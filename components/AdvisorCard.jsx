// Modules
import React from 'react'
import Image from 'next/image'
import { useRouter,  } from 'next/router'
import { useEffect, useState } from 'react'

// Style
import style from '../styles/advisorCard.module.css'
import placeholder from '../public/assets/Advisors/placeholder.png'


/* 
  HOOK
*/
const AdvisorCard = ( { details } ) => {

  const [imageSrc, setImageSrc] = useState(placeholder)

  const Router = useRouter()

  
  useEffect(() => {
    if(details.attributes.ProfileImage.data){
      /* console.log(details) */
      setImageSrc(
        `https://cms.fredmadethis.co.za${details.attributes.ProfileImage.data.attributes.formats.thumbnail.url}`
      )
    }

  }, [details]);


  return (
    <div 
      className={style.container} 
      onClick={() => Router.push(`advisors/${details.id}`)}
    >

      <div className={style.image}>
        <Image 
          src={imageSrc} 
          layout='fill'  
          objectFit='contain'
        />
      </div>

      <div className={style.info}>
        {details.attributes.name} {details.attributes.surname}
      </div>
    </div>
  )
}

export default AdvisorCard