import { Layout } from '@/layout'
import { pageTitle } from '@/utils/consts'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import './global.styles.scss'

export const metadata = {
  title: pageTitle,
  description: 'Created by risin-gus with ❣️',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body>
        <Layout>
          <AntdRegistry>
            {children}
          </AntdRegistry>
        </Layout>
      </body>
    </html>
  )
}
