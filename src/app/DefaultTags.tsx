export default function DefaultTags({ title }: { title: string }) {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="manage your openpilot experience" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
