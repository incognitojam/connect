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
    <html
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      data-theme="dark"
      lang="en"
    >
      <head />
      <body className="bg-background text-on-background">{children}</body>
    </html>
  )
}
