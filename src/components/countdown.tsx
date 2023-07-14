import * as React from "react"
import useClock from "../utils/use-clock"
import useSiteMetadata from "../utils/use-site-metadata"
import remainingTime from "../utils/remaining-time"
import CountNumber from "./count-number"

const containerStyle: React.CSSProperties = {
  backgroundColor: '#000',
  color: '#FFF',
  fontSize: 22,
  height: '20vh',
  margin: 0,
  padding: '25px',
  textAlign: 'center',
  width: '100vw',
}

const CountdownComponent: React.FC  = () => {
  const { raw: currentDate } = useClock();
  const { weddingDate, weddingTimeZone } = useSiteMetadata();
  const isOver = currentDate.isAfter(weddingDate);
  const { 
    remainingDays, 
    remainingHours, 
    remainingMinutes, 
    remainingSeconds 
  } = remainingTime(weddingDate, currentDate, weddingTimeZone);

  return (
    <div style={containerStyle}>
      <div>We are counting every second!</div>
      <div style={{display:'flex'}}>
        {<CountNumber 
          value={remainingDays.toString().padStart(2,'0')}
          label={'Days'}
        />}
        {<CountNumber 
          value={remainingHours.toString().padStart(2,'0')}
          label={'Hours'}
        />}
        {<CountNumber 
          value={remainingMinutes.toString().padStart(2,'0')}
          label={'Minutes'}
        />}
        {<CountNumber 
          value={remainingSeconds.toString().padStart(2,'0')}
          label={'Seconds'}
        />}
      </div>
    </div>
  )
}

export default CountdownComponent