import { Inter, JetBrains_Mono } from '@next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="light" lang="en">
      <head />
      <body
        className={`bg-surface ${inter.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
