import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Trans } from "react-i18next"

const containerStyle: React.CSSProperties = {
  backgroundColor: '#3C4048',
  color: '#EAEAEA',
  fontSize: 18,
  // height: '100vh',
  margin: 0,
  padding: 20,
  textAlign: 'center',
  width: '100vw',
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#3C4048',
  border: 0,
  color: '#EAEAEA',
  fontSize: 18,
  // height: '100vh',
  margin: '0 10px',
  padding: '10px',
  textDecoration: 'underline',
}

const FooterComponent: React.FC  = ({changeLanguageFn}) => {
  return (
    <div style={containerStyle}>
      <div style={{marginBottom:20}}>
        <button style={buttonStyle} onClick={() => changeLanguageFn("es")}>Español</button>
        <button style={buttonStyle} onClick={() => changeLanguageFn("en")}>English</button>
      </div>
      <div>
        09.09.23 &mdash; Lote 3, Camino a Finca San Nicolás.
      </div>
    </div>
  )
}

export default FooterComponent