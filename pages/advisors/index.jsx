// Modules
import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import Head from 'next/head'

// Style
import style from '../../styles/advisors.module.css'

// Assets
import bannerImage from '../../public/assets/media/team_image.jpg'

// Components
import AdvisorCard from '../../components/AdvisorCard'

/*
* HOOK
*/
const index = ({franchisePrinciple, advisors, supportStaff}) => {

  return (
    <div className={style.container}>
      <>
        <Head>
          <title>
            Alchemy Team
          </title>
        </Head>
      </>
      <div className={style.banner}>
        <div className={style.bannerImage}>
          <Image layout='fill' objectFit='cover' src={bannerImage} />
        </div>

      </div>
      <div className={style.advisorSectionBlock}>

        <h2>
          Franchise Principle
        </h2>

        <div className={style.advisorSection}>
          {
            franchisePrinciple? 
              franchisePrinciple.map(
                el  =>  {
                  return(
                    <AdvisorCard details={el} key={el.id} />
                  )
                }
              )
            :
            ' nothing to show'
          }
        </div>
        
      </div>
      

      <div>

        <h2>
          Advisors
        </h2>

        <div className={style.advisorSection}>
          {
            advisors? 
              advisors.map(
                el => {
                  return(
                    <AdvisorCard details={el} key={el.id} />
                  )
                }
              )
              :
              ' nothing to show'
          }
        </div>

      </div>

      <div>

        <h2>
          Support Staff
        </h2>

        <div className={style.advisorSection}>
          {
            supportStaff? 
              supportStaff.map(
                el  =>  {
                  return(
                    <AdvisorCard details={el} key={el.id} />
                  )
                }
              )
            :
            'nothing to show'
          }
        </div>

      </div>

    </div>
  )
}



export const getStaticProps = async () => {
  const response = await axios.get(
    'https://cms.fredmadethis.co.za/api/advisors?populate=*'
  )

  const franchisePrincipleFilter = []
  const advisorsfilter = []
  const supportStaffFilter = []

  if(response.data.data){
    response.data.data.forEach(
      el => {
        el.attributes.Role == 'Franchise Principle' ? franchisePrincipleFilter.push(el) :
        el.attributes.Role == 'Advisor' ? advisorsfilter.push(el) : 
        el.attributes.Role == 'Assistant' ?  supportStaffFilter.push(el) : 
        el.attributes.Role == 'Staff' ? supportStaffFilter.push(el) :
        console.log('No Role')
      }
    )
  }

  return {
    props:{
      "franchisePrinciple" : franchisePrincipleFilter,
      "advisors" : advisorsfilter,
      "supportStaff" : supportStaffFilter
    }
  }
}

export default index