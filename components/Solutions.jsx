// Modules
import React from 'react'
import Image from 'next/image'

// Style
import style from '../styles/solutions.module.css'

// Assets
import sign from '../public/assets/media/solutionImage.jpg'

const Solutions = () => {
  return (
    <div className={style.container}>
      <div className={style.offering}>
        <div>
          <h3>
            Save and Invest
          </h3>
          {/* <div className={style.image}>
            <Image src={sign} layout='fill' objectFit='contain'/>
          </div> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere veritatis optio ullam, architecto enim voluptatibus corporis perspiciatis ipsa maiores non ea dolores temporibus dolor!
          </p>
        </div>
        <div>
          <h3>
            Pre-Retirement
          </h3>
          {/* <div className={style.image}>
            <Image src={sign} layout='fill' objectFit='contain'/>
          </div> */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae repellendus porro voluptates delectus aliquam nulla sed! Voluptatibus ducimus consequuntur inventore doloremque expedita odio temporibus.
          </p>
        </div>
        <div>
          <h3>
            Life Cover
          </h3>
          {/* <div className={style.image}>
            <Image src={sign} layout='fill' objectFit='contain'/>
          </div> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloremque maxime aut recusandae adipisci cupiditate earum ad unde. Ipsum, magni? Ex voluptate suscipit voluptas? Laudantium!
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Solutions