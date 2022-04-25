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
              Message
            </a>
          :
          Object.values(props.value)[0]
      }
    </div>
  )
}

export default AdvisorContactCard