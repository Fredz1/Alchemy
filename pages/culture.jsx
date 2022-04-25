// style
import style from '../styles/culture.module.css'

// modules
import axios from 'axios'
import Image from 'next/image'
import Head from 'next/head'

/**
 * HOOK
 */
const culture = (props) => {

  return (
    <>
      
      <Head>
        <title>
          Alchemy Culture            
        </title>
      </Head>
      
      <div className={style.container}>

        

        {/* <div className={style.banner}>

        </div> */}
        {/* Image Area */}
        
          {
            props.imageData.map(
              el => {
                return (
                  <div key={el.hash} className={style.image}>
                    <Image 
                      src={`https://cms.fredmadethis.co.za${el.url}`} 
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                )
              }
            )
          }
        
      </div>
    </>
  )
}

export const getStaticProps = async ( { params } ) => {
  const cultureImages = await axios.get(
    `https://cms.fredmadethis.co.za/api/cultures?populate=*`
  )

  // console.log(cultureImages.data.data[0].attributes.alchemyCulture.data)

  const imageData = []

  cultureImages.data.data[0].attributes.alchemyCulture.data.map(
    el => {
      let data = {
        name: el.attributes.name,
        hash: el.attributes.hash,
        url: el.attributes.url
      }
      console.log(data)
      imageData.push(data)
    }
  )

  


    return{
      props:
        {"imageData" : imageData}
    }
  }

export default culture