import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Trans } from "react-i18next"

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
          alt="Registry Icon" width={120}/>
      </div>
      <h2 style={{fontFamily:'Playfair Display', fontSize:50, textAlign: 'center'}}>
        <Trans i18nKey={'registryTitle'}>
          Registry
        </Trans>
      </h2>
      <div>
        <div style={{margin: '20px 0'}}>
          <Trans i18nKey={'registryBody'}>
          We’re lucky enough to have nearly everything we need for our home already. If you want to help making our honeymoon unforgettable, you can contribute using the information below.
          </Trans>
        </div>
        <div style={{textAlign: 'center'}}>
          <StaticImage src="../images/watashi.png"
            alt="Registry Information" />
        </div>
      </div>
    </div>
  )
}

export default RegistryComponent