import * as React from "react"
import Video01 from "../video/landing.mp4"
import { Trans } from "react-i18next";

const containerStyle: React.CSSProperties = {
  backgroundColor: '#000',
  height: '100vh',
  margin: 0,
  padding: '0',
  width: '100vw',
}

const videoStyle: React.CSSProperties = {
  height:'100%',
  objectFit: 'cover',
  opacity: '0.65',
  width: '100%',
}

const overlayStyle: React.CSSProperties = {
  // color: 'white',
  height: '100%',
  padding: '200px 40px',
  position: 'absolute',
  verticalAlign: 'middle',
  top: '0px',
  width: '100%',
}

const headingTextStyle: React.CSSProperties = {
  color: '#FFF',
  fontFamily: 'Playfair Display',
  fontSize: 80,
  margin: 0,
  textAlign: 'center',
  textShadow: '4px 4px 8px rgba(0,0,0,0.4)'
}

const WelcomeComponent: React.FC  = () => {
  return (
    <header style={containerStyle}>
      <video controls={false} autoPlay playsInline muted loop style={videoStyle}>
        <source src={Video01} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div style={overlayStyle}>
        <h1 style={{...headingTextStyle, textAlign: 'start'}}>Ligia</h1>
        <h3 style={{...headingTextStyle, fontSize:40}}>&</h3>
        <h2 style={{...headingTextStyle, textAlign: 'end'}}>Kevin</h2>
        <h3 style={{color: '#EAEAEA', fontSize: 20, fontWeight: 'normal', margin: 10, textAlign: 'center'}}  >
          <Trans i18nKey="welcomeDate">
            Saturday, September 9, 2023
          </Trans>
        </h3>
      </div>
    </header>
  )
}

export default WelcomeComponent