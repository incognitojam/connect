'use client'

import React, { useState } from 'react'

import Icon from '@/material/Icon'
import IconButton from '@/material/IconButton'
import List, { ListItem, ListItemContent } from '@/material/List'
import Search from '@/material/Search'
import Switch from '@/material/Switch'

export default function Dashboard({
  params: { dongleId },
}: {
  params: { dongleId: string }
}) {
  const [expanded, setExpanded] = useState(true)

  const result = (
    <List className="pb-2">
      <ListItem leading={<Icon filled>star</Icon>}>
        <ListItemContent headline="Result 1" subhead="This is a subhead" />
      </ListItem>
      <ListItem leading={<Icon filled>store</Icon>}>
        <ListItemContent headline="Result 2" subhead="This is a subhead" />
      </ListItem>
      <ListItem leading={<Icon filled>local_bar</Icon>}>
        <ListItemContent headline="Result 3" subhead="This is a subhead" />
      </ListItem>
    </List>
  )

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
