'use client'

import { useState } from 'react'
import { Inter } from '@next/font/google'
import { Switch, Tab } from '@headlessui/react'

import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [enabled, setEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const pages = [
    'Navigation',
    'Timeline',
    'Clips',
  ]

  return (
    <>
      <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
        <div className="shrink-0">
          <img className="h-12 w-12" src="/vercel.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
          <Button>Click me</Button>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full transition`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>

      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="space-x-2">
          {pages.map((page, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `py-2 px-4 text-sm font-medium ${
                  selected ? 'text-blue-600' : 'text-gray-500'
                } border border-blue-600 rounded-md`
              }
            >
              {page}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </>
  )
}
