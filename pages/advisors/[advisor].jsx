// Components
import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import list from '../../public/information/advisors' 

// Style
import style from '../../styles/advisorProfile.module.css'

/* 
  HOOK
*/
const advisor = (props) => {
  const {query: { advisor }} = useRouter()

  const [advisorInfo, setAdvisorInfo] = useState('Loading')
  const [image, setImage] = useState('placeholder')

  useEffect(
    () => {

      const advisorData = list.findIndex(
        el => el.unique === advisor
      )

      if (advisorData != -1) {
        setAdvisorInfo(advisorData)
        setImage(require(`../../public/assets/Advisors/${advisorData.image}`))
      }

    

    }, [advisor]
  )
  
  return (
    <div>

     {/*  <Image src={require(`../../public/assets/Advisors/holder`)} /> */}
    </div>
  )
}

export default advisor