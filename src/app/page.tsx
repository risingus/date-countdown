'use client'
import { CountDown } from '@/components/countdown';
import { CountContextProvider } from '@/context/count-countext-provider';
import './global.styles.scss'
import { MouseBlob } from '@/components/mouse-blob';

export default function Home() {
  return (
    <CountContextProvider>
      <MouseBlob />
      <CountDown />
    </CountContextProvider>
  )
}
