import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const containerStyle: React.CSSProperties = {
  backgroundColor: '#EAEAEA',
  color: '#3C4048',
  fontSize: 18,
  // height: '100vh',
  margin: 0,
  padding: '40px 20px',
  textAlign: 'justify',
  width: '100vw',
}

const eventStyle: React.CSSProperties = {
  borderBottom: '1px solid #3C4048',
  margin: '25px 0',
  padding: '25px 0',
  textAlign:'center',
}

const eventTitleStyle: React.CSSProperties = {
  fontSize: 30,
  marginTop: 10,
}

const eventTimeStyle: React.CSSProperties = {
  fontSize: 20,
  marginBottom: 10,
  fontStyle: 'italic',
}

const ScheduleComponent: React.FC  = () => {
  return (
    <div style={containerStyle}>
      <h2 style={{fontFamily:'Playfair Display', fontSize:50, textAlign: 'center'}}>Schedule</h2>
      <div>
        <div style={{margin: '20px 0'}}>
        This is a brief rundown of how we're expecting the weekend to flow so far. Everything may still change, stay tuned for updates!
        </div>
      </div>
      <div style={eventStyle}>
        <StaticImage src="../images/icons/tree-2.png"
          alt="Tree Icon" width={100}/>
        <div style={eventTitleStyle}>Ceremony</div>
        <div style={eventTimeStyle}>3pm - 4pm</div>
        <div>Our hearts will unite in a picturesque ceremony, surrounded by the tranquil beauty of a lake and the gentle whispers of trees.</div>
      </div>

      <div style={eventStyle}>
        <StaticImage src="../images/icons/cocktail.png"
          alt="Cocktail Icon" width={140}/>
        <div style={eventTitleStyle}>Drinks & Snack</div>
        <div style={eventTimeStyle}>4pm - 5pm</div>
        <div>Celebrate with drinks & snacks!</div>
      </div>

      <div style={eventStyle}>
        <StaticImage src="../images/icons/cheers.png"
          alt="Toast Icon" width={100}/>
        <div style={eventTitleStyle}>Toast</div>
        <div style={eventTimeStyle}>5pm - 5:30pm</div>
        <div>Raise your glasses in celebration as we toast to love, laughter, and a lifetime of cherished memories.</div>
      </div>

      <div style={{...eventStyle, borderBottom: 0}}>
        <StaticImage src="../images/icons/dinner.png"
          alt="Dinner Icon" width={100}/>
        <div style={eventTitleStyle}>Dinner & Dancing</div>
        <div style={eventTimeStyle}>5:30pm - 9pm</div>
        <div>Delectable food, irresistible beats; join us for an evening of culinary delights and groovy tunes.</div>
      </div>
    </div>
  )
}

export default ScheduleComponent