'use client'
import { MouseBlob } from '@/components/mouse-blob'
import { ReactNode } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div style={{ zIndex: 2 }}>
        {children}
      </div>
      <footer className={styles['footer']}>
        <Link href='https://www.linkedin.com/in/gustavo-lima-gonçalves-de-oliveira-44b425b1' target='blank'>
          <span>Coded</span>
          <span>with</span>
          <span>❤️</span>
          <span>by</span>
          <span>Gus</span>
        </Link>
      </footer>
      <MouseBlob />
    </>
  )
}
