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
        <StaticImage src="../images/icons/couple.png"
          alt="RSVP Closed Icon" width={120}/>
      </div>
      <h2 style={{fontFamily:'Playfair Display', fontSize:50, textAlign: 'center'}}>
        <Trans i18nKey={'rsvpClosedTitle'}>
        Thank you for confirming your attendance!
        </Trans>
      </h2>
      <div>
        <div style={{margin: '20px 0'}}>
          <Trans i18nKey={'rsvpClosedBody1'}>
          We extend our heartfelt thanks to those who have confirmed their attendance to our wedding. Your love and support mean the world to us, and we can't wait to share this special day with each one of you.
          </Trans>
        </div>
      </div>
      <div>
        <div style={{margin: '20px 0'}}>
          <Trans i18nKey={'rsvpClosedBody2'}>
          In the coming days, we will send you an email to ensure you have all the necessary details to join us for this memorable occasion.
          </Trans>
        </div>
      </div>
      <div>
        <div style={{margin: '40px 0 20px', fontStyle: 'italic', textAlign: 'center'}}>
          <Trans i18nKey={'rsvpClosedDeadline'}>
          Please remember that the last day to confirm your attendance was August 16th.
          </Trans>
        </div>
      </div>
    </div>
  )
}

export default RsvpComponent