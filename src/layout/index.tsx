'use client'
import { MouseBlob } from '@/components/mouse-blob'
import { ReactNode } from 'react'
import { ConfigProvider, theme as antTheme } from 'antd';

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
      <div style={{ zIndex: 2, }}>
        {children}
      </div>
      <MouseBlob />
    </ConfigProvider>
  )
}