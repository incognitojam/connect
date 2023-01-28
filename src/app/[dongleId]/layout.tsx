'use client'

import React from 'react'
import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import AppBar from '@/components/AppBar'
import NavigationBar, { NavigationBarItem } from '@/components/NavigationBar'

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

  const bind = useDrag(
    ({ last, movement: [mx], memo = x.get(), direction, velocity }) => {
      if (last) {
        const projection = (startVelocity: number) =>
          (startVelocity * 0.998) / (1 - 0.998)

        const velocityX = velocity[0] * direction[0]
        const projectedX = projection(velocityX)
        console.log({
          velocityX,
          projectedX,
          result: memo + mx + projectedX,
        })

        const projectedEndpoint = memo + mx + projection(velocityX)
        const open = projectedEndpoint > 96
        api.start({ x: open ? 256 : 0 })
        return memo
      }

      api.set({ x: Math.min(256, Math.max(0, memo + mx)) })
      return memo
    },
  )

  return (
    <div className="overflow-x-hidden">
      <nav>
        <div
          {...bind()}
          className="absolute inset-y-0 left-0 w-64 touch-pan-y overflow-y-auto bg-surface-variant text-on-surface-variant"
        >
          <AppBar relative>
            <h1 className="text-[24px] font-bold">comma connect</h1>
          </AppBar>

          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
          <p>Item 4</p>
          <p>Item 5</p>
          <p>Item 6</p>

          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
          <p>Item 4</p>
          <p>Item 5</p>
          <p>Item 6</p>

          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
          <p>Item 4</p>
          <p>Item 5</p>
          <p>Item 6</p>

          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
          <p>Item 4</p>
          <p>Item 5</p>
          <p>Item 6</p>

          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
          <p>Item 4</p>
          <p>Item 5</p>
          <p>Item 6</p>

          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
          <p>Item 4</p>
          <p>Item 5</p>
          <p>Item 6</p>
        </div>
      </nav>

      <animated.main
        {...bind()}
        className="relative h-screen flex-1 touch-none overflow-y-auto bg-background"
        style={styles}
      >
        {children}

        <NavigationBar>
          <NavigationBarItem>Map</NavigationBarItem>
          <NavigationBarItem>Timeline</NavigationBarItem>
          <NavigationBarItem>Clips</NavigationBarItem>
        </NavigationBar>
      </animated.main>
    </div>
  )
}
