import * as React from "react"
import useClock from "../utils/use-clock"
import useSiteMetadata from "../utils/use-site-metadata"
import remainingTime from "../utils/remaining-time"
import CountNumber from "./count-number"
import { useTranslation, Trans } from "react-i18next";

const containerStyle: React.CSSProperties = {
  backgroundColor: '#000',
  color: '#FFF',
  fontSize: 22,
  // height: '20vh',
  margin: 0,
  padding: '30px',
  textAlign: 'center',
  width: '100vw',
}

const CountdownComponent: React.FC  = () => {
  const { raw: currentDate, onTimezone: currentDateTz } = useClock();
  const { weddingDate, weddingTimeZone } = useSiteMetadata();
  // const isOver = currentDate.isAfter(weddingDate);
  const { t } = useTranslation();
  const { 
    remainingDays, 
    remainingHours, 
    remainingMinutes, 
    remainingSeconds 
  } = remainingTime(weddingDate, currentDateTz(), weddingTimeZone);

  return (
    <div style={containerStyle}>
      <div>
        <Trans i18nKey="countdownTitle">
          We are counting every second!
        </Trans>
      </div>
      <div style={{display:'flex'}}>
        {<CountNumber 
          value={remainingDays.toString().padStart(2,'0')}
          label={t('days')}
        />}
        {<CountNumber 
          value={remainingHours.toString().padStart(2,'0')}
          label={t('hours')}
        />}
        {<CountNumber 
          value={remainingMinutes.toString().padStart(2,'0')}
          label={t('minutes')}
        />}
        {<CountNumber 
          value={remainingSeconds.toString().padStart(2,'0')}
          label={t('seconds')}
        />}
      </div>
    </div>
  )
}

export default CountdownComponent