import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const containerStyle: React.CSSProperties = {
  backgroundColor: '#B2B2B2',
  color: '#3C4048',
  fontSize: 18,
  // height: '100vh',
  margin: 0,
  padding: '40px 20px',
  textAlign: 'justify',
  width: '100vw',
}

const RegistryComponent: React.FC  = () => {
  return (
    <div style={containerStyle}>
      <div style={{textAlign:'center'}}>
        <StaticImage src="../images/icons/registry.png"
          alt="Casa del Alma" width={120}/>
      </div>
      <h2 style={{fontFamily:'Playfair Display', fontSize:50, textAlign: 'center'}}>Registry</h2>
      <div>
        <div style={{margin: '20px 0'}}>
          We’re lucky enough to have nearly everything we need for our home already. If you want to help making our honeymoon unforgettable, you can contribute using the link to the right.
        </div>
      </div>
    </div>
  )
}

export default RegistryComponent