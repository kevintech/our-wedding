import * as React from "react"
import Video01 from "../images/v01x.mp4"

const containerStyle = {
  backgroundColor: '#000',
  height: '100vh',
  margin: 0,
  padding: '0',
  width: '100vw',
}

const videoStyle = {
  height:'100%',
  objectFit: 'cover',
  opacity: '0.4',
  width: '100%',
}

const overlayStyle: React.CSSProperties = {
  // color: 'white',
  height: '100%',
  padding: '50px 10px',
  position: 'absolute',
  verticalAlign: 'middle',
  top: '0px',
  width: '100%',
}

const headingTextStyle: React.CSSProperties = {
  color: '#919191',
  fontFamily: 'Nothing You Could Do',
  fontSize: 70,
  margin: 5,
  textAlign: 'center',
}

const HeaderComponent: React.FC  = () => {
  return (
    <header style={containerStyle}>
      <video autoPlay={true} controls={false} muted loop style={videoStyle}>
        <source src={Video01} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div style={overlayStyle}>
        <h1 style={{...headingTextStyle, color: '#EA5455', textAlign: 'start'}}>Ligia Negro</h1>
        <h3 style={{...headingTextStyle, fontSize:40}}>&</h3>
        <h2 style={{...headingTextStyle, textAlign: 'end'}}>Kevin Herrarte</h2>
        <h3 style={{color: '#919191', fontSize: 20, fontWeight: 'normal', margin: 5}}  >Saturday, 09 September 2023</h3>
      </div>
    </header>
  )
}

export default HeaderComponent