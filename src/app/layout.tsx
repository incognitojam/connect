import React from 'react'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="light" lang="en">
      <head>
        <title key="title">connect</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="manage your openpilot experience" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0..1,0&display=block"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter&family=JetBrains+Mono&display=swap"
        />
      </head>
      <body className="bg-background text-on-background">{children}</body>
    </html>
  )
}
