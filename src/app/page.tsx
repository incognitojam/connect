'use client'

import React, { useState } from 'react'

import Button from '@/material/Button'
import Switch from '@/material/Switch'
import Surface from '@/material/Surface'
import Link from 'next/link'

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
      <Link href={'/abc123'}>
        <Button>Go to dashboard</Button>
      </Link>

      <div className="elevation-2 mx-auto flex max-w-md items-center space-x-4 rounded-xl bg-white p-6">
        <div className="shrink-0">
          <img className="h-12 w-12" src="/vercel.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
          <Button>Click me</Button>
          <Button color="secondary">Click me</Button>
          <Button color="tertiary">Click me</Button>
          <Switch color="tertiary" checked={enabled} onChange={setEnabled}>
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>

      {cards}
    </>
  )
}
