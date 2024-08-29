'use client'
import { useEffect } from "react"
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const { replace } = useRouter();

  useEffect(() => {
    replace('/')
  })

  return null
}