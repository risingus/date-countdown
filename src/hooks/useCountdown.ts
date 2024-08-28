'use client'
import { addDays, addHours, addMinutes, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, isValid, parse } from 'date-fns';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'
import { redirect } from 'next/navigation'
import { pageTitle } from '@/utils/consts'


function returnValidDate(date: any) {
  if (!date) return null
  if (!isValid(parse(date, 'dd/MM/yyyy HH:mm:ss', new Date()))) return null
  return parse(date, 'dd/MM/yyyy HH:mm:ss', new Date())
}

function getCountDownValues(date: any) {
  const validDate = returnValidDate(date)
  if (!validDate) {
    document.title = pageTitle
    redirect('./')
    return {
      days: '000',
      hours: '00',
      minutes: '00',
      seconds: '00'
    }
  }
  const now = new Date();
  const days = differenceInDays(validDate, now);
  const hours = differenceInHours(validDate, addDays(now, days));
  const minutes = differenceInMinutes(validDate, addDays(addHours(now, hours), days));
  const seconds = differenceInSeconds(validDate, addDays(addHours(addMinutes(now, minutes), hours), days));

  const daysString = String(days)

  const countdown = {
    days: daysString.length < 3 ? daysString.padStart(3, '0') : daysString,
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0')
  }

  document.title = `${days}d: ${hours}h : ${minutes}m : ${seconds}s `

  return countdown
}

export const useCountdown = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get('date')
  const [countdownTime, setCountDownTime] = useState({
    days: '000',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  const hours0 = Number(countdownTime.hours[0])
  const beforeHours0 = hours0 === 0 ? 1 : (hours0 + 1 === 3 ? 0 : hours0 + 1);

  const hours1 = Number(countdownTime.hours[1])
  const beforeHours1 = hours1 === 0 ? 1 : (hours1 + 1 === 5 ? 0 : hours1 + 1);

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
      setCountDownTime(getCountDownValues(date))
    }, 1000)
    return () => {
      clearInterval(newInterval)
    }
  }, [date])

  return {
    days: countdownTime.days,
    hours: countdownTime.hours,
    minutes: countdownTime.minutes,
    seconds: countdownTime.seconds,
    beforeHours0,
    beforeHours1,
    beforeMinutes0,
    beforeMinutes1,
    beforeSeconds0,
    beforeSeconds1
  }
}