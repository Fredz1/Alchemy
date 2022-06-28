// style
import style from '../styles/navLinks.module.css'

// Modules
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Assets
import burgerMenu from '../public/assets/media/Hamburger_icon.png'


//HOOK
const NavLinks = () => {

  const [showMenu, setshowMenu] = useState(false)

  const { query } = useRouter()

  useEffect(() => {
    setshowMenu(false)
    
  }, [query]);

  return (
    <div className={style.navLinks}>

      <div className={style.bugerIcon}>
        <Image src={burgerMenu} onClick={() => setshowMenu(!showMenu)}/>
      </div>

      <div className={showMenu? style.linksShow : style.linksHidden}>

        <Link href='/' onClick={() => setshowMenu(!showMenu)}>
          <a aria-label='home'>Home</a>
        </Link>

        <Link href='/aboutus' onClick={() => setshowMenu(!showMenu)} >
          <a aria-label='About Us'>About Us</a>
        </Link>

        <Link href='/culture' onClick={() => setshowMenu(!showMenu)}>
          <a aria-label='Culture'>Culture</a>
        </Link>

        <Link href='/advisors' onClick={() => setshowMenu(!showMenu)}>
          <a aria-label='The Advisors'>Advisors</a>
        </Link>

        <Link href='/contact' onClick={() => setshowMenu(!showMenu)}>
          <a aria-label='contact'>Message Us</a>
        </Link>
        
      </div>

    </div>
  )
}

export default NavLinks