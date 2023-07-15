import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const containerStyle: React.CSSProperties = {
  backgroundColor: '#000',
  color: '#FFF',
  display: 'grid',
  fontSize: 18,
  // height: '100vh',
  margin: 0,
  padding: 0,
  textAlign: 'center',
  width: '100vw',
}

const titleStyle: React.CSSProperties = {
  fontFamily:'Playfair Display',
  fontSize:44,
  lineHeight:1,
  marginTop: '0.25em',
  textAlign: 'center',
  textShadow: '4px 4px 8px rgba(0,0,0,0.4)'
}

const SaveTheDateComponent: React.FC  = () => {
  return (
    <div style={containerStyle}>
      <StaticImage src="../images/bokeh03.jpg"
        alt="Casa del Alma" placeholder="blurred" layout="fullWidth"
        style={{gridArea: '1/1', opacity: 0.5}} />

      <div style={{
          // By using the same grid area for both, they are stacked on top of each other
          display: "grid",
          gridArea: "1/1",
          padding: '100px 20px',
          position: "relative",
        }}>
        <div>Save the Date</div>
        <h2 style={titleStyle}>Celebreate love with us</h2>
        <div style={{marginTop:30, textAlign:'center'}}>
          <div style={{fontSize:25, margin:5}}>September 09, 2023. &mdash; 3pm</div>
          <div style={{margin:5}}>Villa Bokeh, Antigua Guatemala</div>
          <div style={{margin:5}}>Lote 3, Camino a Finca San Nicolás.</div>
        </div>
        <div style={{marginTop:80}}>
          Embrace the magic of Antigua Guatemala as we celebrate love together. Join us in this enchanting city for a joyous occasion filled with unforgettable moments. Let's create cherished memories in this remarkable destination.
        </div>
      </div>
    </div>
  )
}

export default SaveTheDateComponent