// modules
import Link from 'next/link'



const AdvisorContactCard = (props) => {

  return (

    <div>
      {
        Object.keys(props.value)[0]
      }
      <br />
      {
        Object.keys(props.value)[0] == 'LinkedIn' ?
          <Link href={Object.values(props.value)[0]}>
            <a>
              Visit
            </a>
          </Link>
          : 
          Object.keys(props.value)[0] == 'Email' ?
            <a href={`mailto:${Object.values(props.value)[0]}`}>
              {Object.values(props.value)[0]}
            </a>
          : 
          Object.keys(props.value)[0] == 'Phone' ?
            <a href={`tel:${Object.values(props.value)[0]}`}>
              0{Object.values(props.value)[0]}
            </a>
          :
          Object.keys(props.value)[0] == 'WhatsApp' ?
            <a href={`https://wa.me/+270${Object.values(props.value)[0]}`}>
              0{Object.values(props.value)[0]}
            </a>
          :
          Object.values(props.value)[0]
      }
    </div>
  )
}
/* <a href="mailto:alchemy@alchemy.co.za?subject=Im%20interested%20in&body=I%20would%20like%20you%20to%20contact%20me.">alchemy@alchemy.co.za</a> */
/* <a href="tel:+27 027 134 9290">076 134 9290</a> */
export default AdvisorContactCard