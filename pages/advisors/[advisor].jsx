// Components
import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import list from '../../public/information/advisors.json' 

// Style
import style from '../../styles/advisorProfile.module.css'

/* 
  HOOK
*/
const advisor = () => {

  const {query: { advisor }} = useRouter()

  const [advisorInfo, setAdvisorInfo] = useState('Loading')
  const [image, setImage] = useState('/../../public/assets/Advisors/holder.jpg')

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
    <div>

      <Image src={image || 'http://localhost:3000/public/information/holder.jpg'} width={50} height={50}/>
    </div>
  )
}

export default advisor