import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Trans } from "react-i18next"

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
      <h2 style={{fontFamily:'Playfair Display', fontSize:50, textAlign: 'center'}}>
        <Trans i18nKey={'rsvpTitle'}>
        Will you attend to our special day?
        </Trans>
      </h2>
      <div>
        <div style={formStyle}>
          <form method="get" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div style={formFieldStyle}>
              <label style={{fontWeight:'bold'}}>
                <Trans i18nKey={'rsvpNameLabel'}>
                  Your Name*
                </Trans>
                <input type="text" name="name" style={textInputStyle} required />
              </label>
            </div>
            <div style={formFieldStyle}>
              <label style={{fontWeight:'bold'}}>
                <Trans i18nKey={'rsvpEmailLabel'}>
                  Your Email
                </Trans>
                <input type="email" name="email" style={textInputStyle} />
              </label>
            </div>
            <div style={formFieldStyle}>
              <label style={{fontWeight:'bold'}}>
                <Trans i18nKey={'rsvpResponseLabel'}>
                  Will you attend?*
                </Trans>
              </label>
              <label style={{display:'block', margin:'5px 0'}}>
                <input type="radio" name="attending" id="yes" value="Y"/>
                <Trans i18nKey={'rsvpResponseYes'}>
                  Yes, I will be there
                </Trans>
              </label>
              <label style={{display:'block', margin:'5px 0'}}>
                <input type="radio" name="attending" id="no" value="N"/>
                <Trans i18nKey={'rsvpResponseNo'}>
                  Sorry, I can't come
                </Trans>
              </label>
            </div>
            <div style={formFieldStyle}>
              <label style={{fontWeight:'bold'}}>
              <Trans i18nKey={'rsvpMealLabel'}>
                Meal preference
              </Trans>
              <select name="meal" style={textInputStyle}>
                {/* <option value="Anything">
                  <Trans i18nKey={'rsvpMeal1'}>I eat anything</Trans>
                </option> */}
                <option value="Beef">
                  <Trans i18nKey={'rsvpMeal2'}>Beef</Trans>
                </option>
                <option value="Salmon">
                  <Trans i18nKey={'rsvpMeal3'}>Salmon</Trans>
                </option>
              </select></label>
            </div>
            <div style={formFieldStyle}>
              <label style={{fontWeight:'bold'}}>
                <Trans i18nKey={'rsvpMessageLabel'}>Message</Trans>
                <textarea name="message" rows={5} style={textInputStyle}></textarea>
              </label>
            </div>
            <div style={formFieldStyle}>
              <button type="submit" style={buttonStyle}>
                <Trans i18nKey={'rsvpSubmitButton'}>Send</Trans>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RsvpComponent