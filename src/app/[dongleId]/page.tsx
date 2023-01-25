import React from 'react'
import Surface from '@/components/Surface'

export default function Dashboard() {
  return (
    <>
      <h1 className="text-6xl">Dashboard</h1>

      <p className="text-2xl">Inter</p>

      <p className="text-2xl">JetBrains Mono</p>

      <Surface className="elevation-3 max-w-md rounded-lg p-4" variant>
        <p className="text-4xl">Surface</p>
      </Surface>

      <p>lorem ipsum</p>
    </>
  )
}
