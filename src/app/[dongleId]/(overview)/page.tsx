'use client'

import React, { useState } from 'react'

import IconButton from '@/material/IconButton'
import Search from '@/material/Search'
import Switch from '@/material/Switch'

export default function Dashboard({
  params: { dongleId },
}: {
  params: { dongleId: string }
}) {
  const [expanded, setExpanded] = useState(false)

  const result = <div>Hello!</div>

  return (
    <div className="p-4">
      <h2 className="text-sm">{dongleId}</h2>

      <Switch
        color="primary"
        checked={expanded}
        onChange={setExpanded}
        className="my-2"
      />

      <Search
        className="my-2 max-w-[360px]"
        leading={<IconButton>search</IconButton>}
        expanded={expanded}
        result={result}
      >
        <input
          className="h-full w-full bg-surface text-on-surface outline-none"
          placeholder="where do you want to go?"
        />
      </Search>
    </div>
  )
}
