'use client'
import { MouseBlob } from '@/components/mouse-blob'
import { ReactNode } from 'react'
import { ConfigProvider, theme as antTheme } from 'antd';
import { Particlesview } from '@/components/particlesview';
import styles from './styles.module.scss'
import Link from 'next/link';

// & > footer {
//   margin-top: auto;
//   bottom: 0;
//   position: absolute;
//   padding-bottom: 1rem;
// }

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: antTheme.darkAlgorithm,
        cssVar: true,
        token: {
          colorPrimary: 'rgb(255, 1, 158)',
          colorLink: 'rgb(255, 1, 158)',
          colorTextPlaceholder: 'white',
        }
      }}
    >
      <div style={{ zIndex: 2 }}>
        {children}
      </div>
      <footer className={styles['footer']}>
        <Link href='https://www.google.com' target='blank'>Coded with ❤️ by Gus</Link>
      </footer>
      <MouseBlob />
      <Particlesview />
    </ConfigProvider>
  )
}