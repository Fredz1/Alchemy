// style
import style from '../styles/navLinks.module.css'

// Modules
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// Assets
import burgerMenu from '../public/assets/media/Hamburger_icon.png'

const NavLinks = () => {
  const [showMenu, setshowMenu] = useState(false)

  return (
    <div className={style.navLinks}>

      <div className={style.bugerIcon}>
        <Image src={burgerMenu} onClick={() => setshowMenu(!showMenu)}/>
      </div>

      <div className={showMenu? style.linksShow : style.linksHidden}>

        <Link href='/' >
          <a aria-label='home'>Home</a>
        </Link>

        <Link href='/aboutus' >
          <a aria-label='About Us'>About</a>
        </Link>

        <Link href='/culture' >
          <a aria-label='Culture'>Culture</a>
        </Link>

        <Link href='/advisors' >
          <a aria-label='The Advisors'>Advisors</a>
        </Link>

        <Link href='/contact' >
          <a aria-label='contact'>Contact</a>
        </Link>
        
      </div>

    </div>
  )
}

export default NavLinks