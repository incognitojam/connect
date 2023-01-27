'use client'

import React from 'react'
import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // navigation drawer on left is 256px wide
  // hidden by main content
  // revealed by swiping

  const [styles, api] = useSpring({ x: 0 }, [])
  const { x } = styles

  const bind = useDrag(({ last, movement: [mx], memo = x.get(), velocity }) => {
    if (last) {
      const projection = (startVelocity: number) =>
        (startVelocity * 0.998) / (1 - 0.998)

      console.log(velocity, projection(velocity[0]), memo + mx + projection(velocity[0]))

      const projectedEndpoint = memo + mx + projection(velocity[0])
      const open = projectedEndpoint > 32
      api.start({ x: open ? 256 : 0 })
      return memo
    }

    api.set({ x: Math.min(256, Math.max(0, memo + mx)) })
    return memo
  })

  return (
    <>
      <nav>
        <div className="absolute inset-y-0 left-0 mt-20 w-64 bg-surface-variant text-on-surface-variant">
          hello
        </div>
      </nav>

      <animated.main
        {...bind()}
        className="relative h-screen flex-1 overflow-y-auto bg-background"
        style={styles}
      >
        {children}
      </animated.main>
    </>
  )
}
