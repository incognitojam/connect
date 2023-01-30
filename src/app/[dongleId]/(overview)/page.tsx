import React from 'react'

import IconButton from '@/material/IconButton'
import Search from '@/material/Search'

export default function Dashboard({
  params: { dongleId },
}: {
  params: { dongleId: string }
}) {
  return (
    <div className="p-4">
      <Search
        className="my-2"
        leading={<IconButton>menu</IconButton>}
        trailing={<IconButton>search</IconButton>}
      >
        <input
          className="h-full w-full bg-surface text-on-surface outline-none"
          placeholder="where do you want to go?"
        />
      </Search>
      <h2 className="text-sm">{dongleId}</h2>
    </div>
  )
}
