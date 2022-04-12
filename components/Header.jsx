// style
import style from '../styles/header.module.css'

// modules
import Image from 'next/image'
import Link from 'next/link'

// components
import NavLinks from './NavLinks'

// assets
import logo from '../public/assets/media/alchemyFS.png'

/* 
  Assets
*/
const Header = () => {

  return (
    
      <div className={style.wrapper}>
    <div className={style.headerContainer}>
      <div >
        <Link href='/' >
          <a>
            <Image src={logo} quality={10} className={style.logoImage} priority/>
          </a>
        </Link>
      </div>
      <NavLinks />
    </div>
    </div>
  )
}

export default Header