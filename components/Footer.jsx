// style
import style from '../styles/footer.module.css'

// components
import Image from 'next/image'
import Link from 'next/link'

// Assets
import logo from '../public/assets/media/alchemyLogo.png'
import omFranchiseLogo from '../public/assets/media/afd_om_logo.png'

// HOOK
const Footer = () => {
  return (
    
      <footer className={style.container} >
        <div className={style.topContainer}>

          <div className={style.alchemyLogo}>
            <Image src={logo} quality={50} layout='fill' objectFit='contain'/>
          </div>

          <div className={style.heading}>
            <h4>
              Visit Us
            </h4>

            <Link href='https://goo.gl/maps/Kr4FfZWMXYNzY5Kz5' _blank>
              <a>
                <h4>Directions</h4>
              </a>
            </Link>

          </div>

          <div className={style.heading}>
            <h4>
              Services
            </h4>
            <p>Retirement Planning</p>
            <p>Insurance</p>
            <p>Life Insurance</p>
          </div>

          <div className={style.heading}>
            <h4>
              Social Media
            </h4>
            <p>Facebook</p>
            <p>Instagramme</p>
            <p>Twitter</p>
          </div>

          <div className={style.heading}>
            <h4>
              Contact Us
            </h4>
            <p>
              076 134 9290
            </p>
            <p>
              alchemy@alchemy.co.za
            </p>
          </div>
        </div>

        <div className={style.bottomContainer}>
          <p>
            &copy; Alchemy Financial Services 2022
          </p>
          <div className={style.franchiseLogo}>
            <Image src={omFranchiseLogo} quality={75} layout='fill' objectFit='contain'/>
          </div>
        </div>

      </footer>
      
    
  )
}

export default Footer