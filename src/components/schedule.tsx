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
      <h2 style={{fontFamily:'Playfair Display', fontSize:50, textAlign: 'center'}}>
        <Trans i18nKey={'scheduleTitle'}>
          Schedule
        </Trans>
      </h2>
      <div>
        <div style={{margin: '20px 0'}}>
          <Trans i18nKey={'scheduleBody'}>
            This is a brief rundown of how we're expecting the weekend to flow so far. Everything may still change, stay tuned for updates!
          </Trans>
        </div>
      </div>
      <div style={eventStyle}>
        <StaticImage src="../images/icons/tree-2.png"
          alt="Tree Icon" width={100}/>
        <div style={eventTitleStyle}>
          <Trans i18nKey={'scheduleCeremonyTitle'}>Ceremony</Trans>
        </div>
        <div style={eventTimeStyle}>3pm - 4pm</div>
        <div>
          <Trans i18nKey={'scheduleCeremonyBody'}>
          Our hearts will unite in a picturesque ceremony, surrounded by the tranquil beauty of a lake and the gentle whispers of trees.
          </Trans>
          </div>
      </div>

      <div style={eventStyle}>
        <StaticImage src="../images/icons/cocktail.png"
          alt="Cocktail Icon" width={140}/>
        <div style={eventTitleStyle}>
          <Trans i18nKey={'scheduleCocktailTitle'}>Drinks & Snack</Trans>
        </div>
        <div style={eventTimeStyle}>4pm - 5pm</div>
        <div>
          <Trans i18nKey={'scheduleCocktailBody'}>Celebrate with drinks & snacks!</Trans>
        </div>
      </div>

      <div style={eventStyle}>
        <StaticImage src="../images/icons/cheers.png"
          alt="Toast Icon" width={100}/>
        <div style={eventTitleStyle}>
          <Trans i18nKey={'scheduleToastTitle'}>Toast</Trans>
        </div>
        <div style={eventTimeStyle}>5pm - 5:30pm</div>
        <div>
          <Trans i18nKey={'scheduleToastBody'}>
          Raise your glasses in celebration as we toast to love, laughter, and a lifetime of cherished memories.
          </Trans>
        </div>
      </div>

      <div style={{...eventStyle, borderBottom: 0}}>
        <StaticImage src="../images/icons/dinner.png"
          alt="Dinner Icon" width={100}/>
        <div style={eventTitleStyle}>
          <Trans i18nKey={'scheduleDinnerTitle'}>Dinner & Dancing</Trans>
        </div>
        <div style={eventTimeStyle}>5:30pm - 9pm</div>
        <div>
          <Trans i18nKey={'scheduleDinnerBody'}>
          Delectable food, irresistible beats; join us for an evening of culinary delights and groovy tunes.
          </Trans>
        </div>
      </div>
    </div>
  )
}

export default ScheduleComponent