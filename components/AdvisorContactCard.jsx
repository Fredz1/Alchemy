// modules
import Link from 'next/link'



const Header = ( {info} ) => {

console.log(info)

  return (

    <div>
      {
        Object.keys(info)
      }<br />
      {
        Object.keys(info) == 'LinkedIn' ?
          <Link href={Object.values(info)}><a>Go to</a></Link>
          : 
          Object.values(info)
      }
    </div>
  )
}

export default Header