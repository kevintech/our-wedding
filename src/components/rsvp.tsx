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

const formStyle: React.CSSProperties = {
  fontSize: 20,
  margin: '20px 0',
  textAlign: 'center',
}

const formFieldStyle: React.CSSProperties = {
  margin: '10px 0'
}

const textInputStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 20,
  margin: '5px 0',
  padding: 5,
  width: '100%',
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#3C4048',
  border: 0,
  // borderRadius: 100,
  color: '#EAEAEA',
  fontSize: 24,
  letterSpacing: 4,
  margin: '10px 0',
  padding: '8px 50px',
}

const RsvpComponent: React.FC  = () => {
  return (
    <div style={containerStyle}>
      <div style={{textAlign:'center'}}>
        <StaticImage src="../images/icons/rsvp.png"
          alt="RSVP Icon" width={120}/>
      </div>
      <h2 style={{fontFamily:'Playfair Display', fontSize:50, textAlign: 'center'}}>Will you attend to our special day?</h2>
      <div>
        <div style={formStyle}>
          <form name="contact" method="POST" data-netlify="true">
            <div style={formFieldStyle}>
              <label style={{fontWeight:'bold'}}>Your Name*
                <input type="text" name="name" style={textInputStyle} required />
              </label>
            </div>
            <div style={formFieldStyle}>
              <label style={{fontWeight:'bold'}}>Your Email
                <input type="email" name="email" style={textInputStyle} />
              </label>
            </div>
            <div style={formFieldStyle}>
              <label style={{fontWeight:'bold'}}>Will you attend?*</label>
              <label style={{display:'block', margin:'5px 0'}}>
                <input type="radio" name="attending" id="yes" value="Y"/>Yes, I will be there
              </label>
              <label style={{display:'block', margin:'5px 0'}}>
                <input type="radio" name="attending" id="no" value="N"/> Sorry, I can't come
              </label>
            </div>
            <div style={formFieldStyle}>
              <label style={{fontWeight:'bold'}}>Meal preference
              <select name="meal" style={textInputStyle}>
                <option value="Anything">I eat anything</option>
                <option value="Beef">Beef</option>
                <option value="Salmon">Salmon</option>
              </select></label>
            </div>
            <div style={formFieldStyle}>
              <label style={{fontWeight:'bold'}}>Message:
                <textarea name="message" rows={5} style={textInputStyle}></textarea>
              </label>
            </div>
            <div style={formFieldStyle}>
              <button type="submit" style={buttonStyle}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RsvpComponent