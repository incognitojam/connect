import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="light" lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
