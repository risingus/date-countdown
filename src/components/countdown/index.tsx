import './styles.scss'
import { CardCounter } from '../card-counter'
import { useCountContext } from '@/context/count-countext-provider'
import { useEffect, useState } from 'react'
import { isValid } from 'date-fns'


function isValidDate(date: any) {
  if (!date) false;
  if (!isValid(new Date(date))) return false
  return true;
}

function formatTimeLeft(timeLeft: number) {
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
  return {
    days: String(daysLeft),
    hours: String(hoursLeft).padStart(2, '0'),
    minutes: String(minutesLeft).padStart(2, '0'),
    seconds: String(secondsLeft).padStart(2, '0')
  }
}

function getTimeLeft(date: Date) {
  const nowInMili = new Date().getTime()
  const timeLeft = new Date(date).getTime() - nowInMili
  return timeLeft
}

export const CountDown = () => {
  const { date } = useCountContext()
  const [countdownTime, setCountDownTime] = useState({
    days: '0',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  const minutes0 = Number(countdownTime.minutes[0])
  const beforeMinutes0 = minutes0 === 0 ? 6 : (minutes0 + 1 === 7 ? 0 : minutes0 + 1);

  const minutes1 = Number(countdownTime.minutes[1])
  const beforeMinutes1 = minutes1 === 0 ? 1 : (minutes1 + 1 === 10 ? 0 : minutes1 + 1);

  const seconds0 = Number(countdownTime.seconds[0])
  const beforeSeconds0 = seconds0 === 0 ? 1 : (seconds0 + 1 === 10 ? 0 : seconds0 + 1);

  const seconds1 = Number(countdownTime.seconds[1])
  const beforeSeconds1 = seconds1 === 0 ? 1 : (seconds1 + 1 === 10 ? 0 : seconds1 + 1);

  useEffect(() => {
    let newInterval: number;
    newInterval = window.setInterval(() => {
      const isValid = isValidDate(date)
      if (!date || !isValid) {
        document.title = 'date countdown'
        return
      }
      const timeLeft = getTimeLeft(date)
      const timeLeftFormated = formatTimeLeft(timeLeft)
      document.title = `${timeLeftFormated.days}d : ${timeLeftFormated.minutes}m : ${timeLeftFormated.seconds}s `
      setCountDownTime(timeLeftFormated)
    }, 1000)

    return () => {
      clearInterval(newInterval)
    }
  }, [date])

  return (
    <main className="container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          {
            countdownTime.days.length > 1
              ? Array.from({ length: countdownTime.days.length }, (_, index) => countdownTime.days[index]).map((item) => {
                const beforeDay = Number(item) === 0 ? 1 : (Number(item) + 1 === 10 ? 0 : Number(item) + 1);
                return <CardCounter count={Number(item)} key={item} before={beforeDay} />
              })
              : <CardCounter count={Number(countdownTime.days)} />
          }
        </div>
        <span>
          days
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          <CardCounter count={Number(countdownTime.minutes[0])} before={beforeMinutes0} />
          <CardCounter count={Number(countdownTime.minutes[1])} before={beforeMinutes1} />
        </div>
        <span>
          minutes
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          <CardCounter count={Number(countdownTime.seconds[0])} before={beforeSeconds0} />
          <CardCounter count={Number(countdownTime.seconds[1])} before={beforeSeconds1} />
        </div>
        <span>
          seconds
        </span>
      </div>
    </main>

  )
}