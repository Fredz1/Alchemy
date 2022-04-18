// modules
import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

// components
import AdvisorContactCard from '../../components/AdvisorContactCard'

// Style
import style from '../../styles/advisorProfile.module.css'

// Assets
import placeholder from '../../public/assets/Advisors/placeholder.png'

/* 
  HOOK
*/
const advisor = (props) => {

  return (
    <div className={style.container}>
      <div className={style.left}>

        <div className={style.image}>
          <Image 
            src={
              props.image.data ?
                `https://cms.fredmadethis.co.za${props.image.data.attributes.url}`
                :
                placeholder
            } 
            layout='fill' 
            objectFit='contain'
          />
        </div>

        {/* Contact numbers */}
        <div className={style.contact}>
          {
            props.contact ? 
              props.contact.map(
                (el, index) => {
                  return(
                    <div key={index}>
                      <AdvisorContactCard value={el} />
                    </div>
                  )
                }
              )
              :
              <div>
                Please contact: 021 276 1279
              </div>
          }
        </div>
      </div>

      {/* Name Surname About */}
      <div className={style.right}>
        <div>
          <h3>
            {props.name} {props.surname}
          </h3>
          <h5>
            {props.Role}
          </h5>
        </div>
        <div>
          <h5>
            About 
          </h5>
          <div>
            {
              props.about ?
                <ReactMarkdown children={props.about}/>
                :
                <>Nothing here</>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {

  const {data} = await axios.get(
    'https://cms.fredmadethis.co.za/api/advisors?populate=*'
  )

  const paths = data.data.map(
    el => {
      return (
        {
          params : 
            {
              advisor: JSON.stringify(el.id)
            }
            
        }
      )
    }
  )

  return{
    paths : [
      ...paths
    ],
    fallback: false
  }
}



export const getStaticProps = async ( { params } ) => {
  const advisor = await axios.get(
    `https://cms.fredmadethis.co.za/api/advisors/${params.advisor}?populate=*`
  )

  // console.log(advisor.data.data.attributes.ProfileImage.data.attributes.url)
  // console.log(advisor.data.data)

  const buildInfo = {
    "name": advisor.data.data.attributes.name ?? 'empty',
    "surname": advisor.data.data.attributes.surname ?? 'empty',
    "about": advisor.data.data.attributes.About ?? 'empty',
    "image": advisor.data.data.attributes.ProfileImage ?? advisor.data.data.attributes.ProfileImage.data.attributes.url,
    "Role" : advisor.data.data.attributes.Role ?? "empty",
    "contact" : [
      {"Email": advisor.data.data.attributes.Email ?? 'empty'},
      {"Phone": advisor.data.data.attributes.cellNumber ?? 'empty'},
      {"LinkedIn": advisor.data.data.attributes.LinkedIn ?? 'empty'},
      {"WhatsApp" : advisor.data.data.attributes.cellNumber ?? 'empty'}
    ]
  }

  return{
    props:
      buildInfo
  }
}


export default advisor