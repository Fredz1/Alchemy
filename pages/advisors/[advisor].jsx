// Components
import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import list from '../../public/information/advisors' 


const advisor = () => {
  const {query: { advisor }} = useRouter()

  const [advisorInfo, setAdvisorInfo] = useState('Loading')

  useEffect(() => {
    const advisor = list.findIndex(
      el => el.unique === advisor
    )
    if (advisor != -1) setAdvisorInfo(advisor)
  }, [advisor])



  return (
    <div>
      
    </div>
  )
}

export default advisor