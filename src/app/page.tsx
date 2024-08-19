'use client'
import { CountDown } from '@/components/countdown';
import { CountContextProvider } from '@/context/count-countext-provider';

export default function Home() {
  return (
    <CountContextProvider>
      <CountDown />
    </CountContextProvider>
  )
}
