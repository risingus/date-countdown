'use client'
import { MouseBlob } from '@/components/mouse-blob'
import { ReactNode } from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Particlesview } from '@/components/particlesview';
import styles from './styles.module.scss'
import Link from 'next/link';

const materialDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(255, 1, 158)',
    },
  },
});

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeProvider theme={materialDarkTheme}>
      <div style={{ zIndex: 2 }}>
        {children}
      </div>
      <footer className={styles['footer']}>
        <Link href='https://www.linkedin.com/in/gustavo-lima-gonçalves-de-oliveira-44b425b1' target='blank'>Coded with ❤️ by Gus</Link>
      </footer>
      <MouseBlob />
      <Particlesview />
    </MuiThemeProvider>
  )
}