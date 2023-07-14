import moment from 'moment-timezone';

const remainingTime = (targetDate, currentDate, targetTimeZone) => {
  const remainingDays = moment.tz(targetDate, targetTimeZone)
    .diff(currentDate, 'days');
  const remainingHours = moment.tz(targetDate, targetTimeZone)
    .subtract(remainingDays, 'days')
    .diff(currentDate, 'hours');
  const remainingMinutes = moment.tz(targetDate, targetTimeZone)
    .subtract(remainingDays, 'days')
    .subtract(remainingHours, 'hours')
    .diff(currentDate, 'minutes');
  const remainingSeconds = moment.tz(targetDate, targetTimeZone)
    .subtract(remainingDays, 'days')
    .subtract(remainingHours, 'hours')
    .subtract(remainingMinutes, 'minutes')
    .diff(currentDate, 'seconds')
  return { remainingDays, remainingHours, remainingMinutes, remainingSeconds };
}

export default remainingTime;