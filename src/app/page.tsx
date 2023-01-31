'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import Button from '@/material/Button'
import Icon from '@/material/Icon'
import Surface from '@/material/Surface'
import Switch from '@/material/Switch'

export default function Home() {
  const [enabled, setEnabled] = useState(false)

  const cards = [
    ['bg-primary', 'text-on-primary'],
    ['bg-secondary', 'text-on-secondary'],
    ['bg-tertiary', 'text-on-tertiary'],
    ['bg-error', 'text-on-error'],

    ['bg-on-primary', 'text-primary'],
    ['bg-on-secondary', 'text-secondary'],
    ['bg-on-tertiary', 'text-tertiary'],
    ['bg-on-error', 'text-error'],

    ['bg-primary-container', 'text-on-primary-container'],
    ['bg-secondary-container', 'text-on-secondary-container'],
    ['bg-tertiary-container', 'text-on-tertiary-container'],
    ['bg-error-container', 'text-on-error-container'],

    ['bg-on-primary-container', 'text-primary-container'],
    ['bg-on-secondary-container', 'text-secondary-container'],
    ['bg-on-tertiary-container', 'text-tertiary-container'],
    ['bg-on-error-container', 'text-error-container'],
  ].map(([bg, text]) => (
    <Surface
      className={`elevation-3 hover:elevation-5 mt-4 max-w-md rounded-lg p-4 transition ${bg} ${text}`}
      key={bg}
    >
      {bg}
      <br />
      {text}
    </Surface>
  ))

  return (
    <>
      <div className="m-4">
        <Link href={'/abc123'}>
          <Button>Go to dashboard</Button>
        </Link>
      </div>

      <Surface className="elevation-3 max-w-md rounded-lg p-4" variant>
        <p className="text-4xl">Surface</p>

        <div className="text-secondary">
          <Icon filled size="40">
            home
          </Icon>
          <Icon size="40">map</Icon>
          <Icon size="40">directions_car</Icon>
          <Icon size="40">video_library</Icon>
        </div>

        <div>
          <Switch color="tertiary" checked={enabled} onChange={setEnabled} />
        </div>

        <Button
          color="primary"
          startIcon={<Icon filled>home</Icon>}
          endIcon={<Icon>arrow_forward</Icon>}
        >
          Button
        </Button>
      </Surface>

      {cards}
    </>
  )
}
