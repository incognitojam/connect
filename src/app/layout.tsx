import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="dark" lang="en">
      <head>
        <title key="title">connect</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="manage your openpilot experience" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter&family=JetBrains+Mono&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0"
        />
      </head>
      <body className="bg-background text-on-background">{children}</body>
    </html>
  )
}
