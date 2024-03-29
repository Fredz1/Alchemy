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
            <p>
                Unit 3
              </p>
              <p>
                Howard Terraces
              </p>
              <p>
                Rose Innes Way
              </p>
              <p>
                Pinelands
              </p>
              <p>
                Cape Town
              </p>

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
            <p>
              <Link href='https://www.facebook.com/alchemy.oldmutual' _blank>
                <a>
                  Facebook
                </a>
              </Link>
            </p>
            
            <p>
              <Link href="https://www.instagram.com/alchemy.financialservices/">
                <a>
                  Instagramme
                </a>
              </Link>
            </p>
            
          </div>

          <div className={style.heading}>
            <h4>
              Contact Us
            </h4>
            <p>
              <a href="tel:+27 027 134 9290">076 134 9290</a>
            </p>
            <p>
              <a href="mailto:alchemy@alchemy.co.za?subject=Im%20interested%20in&body=I%20would%20like%20you%20to%20contact%20me.">alchemy@alchemy.co.za</a>
            </p>
          </div>
        </div>

        <div className={style.bottomContainer}>
          <p className={style.copyWrite}>
            &copy; Alchemy Financial Services 2022
          </p>
          <div className={style.franchiseLogo}>
            <a href='www.oldmutual.co.za' _blank='true'>
              <Image 
                src={omFranchiseLogo} 
                quality={75} 
                layout='fill' 
                objectFit='contain'
              />
            </a>
          </div>
        </div>

        {/* Add legal notices */}

      </footer>
      
    
  )
}

export default Footer