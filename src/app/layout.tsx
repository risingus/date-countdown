export const metadata = {
  title: 'date countdown',
  description: 'Generated risin-gus with ❣️',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
