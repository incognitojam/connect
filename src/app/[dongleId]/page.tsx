'use client'

import React from 'react'
import Surface from '@/components/Surface'
import Head from 'next/head'
import Button from '@/components/Button'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title key="title">dashboard - connect</title>
      </Head>

      <h1 className="text-6xl">Dashboard</h1>

      <p className="text-2xl">Inter</p>

      <p className="font-mono text-2xl">JetBrains Mono</p>

      <Surface className="elevation-3 max-w-md rounded-lg p-4" variant>
        <p className="text-4xl">Surface</p>

        <Button color="primary">Button</Button>
      </Surface>

      <p>lorem ipsum</p>
    </>
  )
}
