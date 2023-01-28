'use client'

import React, { useState } from 'react'

import AppBar from '@/components/AppBar'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import IconButton from '@/components/IconButton'
import Surface from '@/components/Surface'

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-6xl">Dashboard</h1>

      <p className="text-2xl">Inter</p>
      <p className="font-mono text-2xl">JetBrains Mono</p>

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

        <Button
          color="primary"
          startIcon={<Icon filled>home</Icon>}
          endIcon={<Icon>arrow_forward</Icon>}
        >
          Button
        </Button>
      </Surface>
    </div>
  )
}
