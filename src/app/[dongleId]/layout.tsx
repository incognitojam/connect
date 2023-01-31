'use client'

import React from 'react'
import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import NavigationBar, { NavigationBarItem } from '@/material/NavigationBar'
import Typography from '@/material/Typography'
import useWindowDimensions from '@/hooks/dimensions'

export default function DashboardLayout({
  children,
  params: { dongleId },
}: {
  children: React.ReactNode
  params: { dongleId: string }
}) {
  const [contentStyles, contentRef] = useSpring({ x: 0 }, [])
  const [drawerStyles, drawerRef] = useSpring({ x: -16, opacity: 0 }, [])

  const { width } = useWindowDimensions()

  // noinspection JSVoidFunctionReturnValueUsed
  const bind = useDrag(
    ({
      last,
      movement: [mx],
      memo = contentStyles.x.get(),
      direction,
      velocity,
    }) => {
      if (last) {
        const projection = (startVelocity: number) =>
          (startVelocity * 0.998) / (1 - 0.998)

        const velocityX = velocity[0] * direction[0]
        const projectedEndpoint = memo + mx + projection(velocityX)
        const open = projectedEndpoint > 96
        contentRef.start({ x: open ? width : 0 })
        drawerRef.start({ x: open ? 0 : -16, opacity: open ? 1 : 0 })
        return memo
      }

      const x = Math.min(width, Math.max(0, memo + mx))

      // translate content
      contentRef.set({ x })

      // animate drawer
      const pct = x / width
      drawerRef.set({
        x: -16 + 16 * pct,
        opacity: pct,
      })
      return memo
    },
  )

  return (
    <div className="h-full overflow-x-hidden">
      <nav>
        <animated.div
          {...bind()}
          className="absolute inset-y-0 left-0 w-screen touch-pan-y overflow-y-auto overscroll-y-contain bg-surface px-1 text-on-surface-variant"
          style={drawerStyles}
        >
          <Typography className="my-2" as="h1" variant="headline-md">
            comma connect
          </Typography>

          {[...Array(50)].map((_, i) => (
            <p key={i}>Item {i}</p>
          ))}
        </animated.div>
      </nav>

      <animated.main
        className="h-full flex-1 overflow-y-auto bg-background transition-colors"
        style={contentStyles}
      >
        <div className="relative h-full touch-none" {...bind()}>
          {children}
        </div>

        <NavigationBar>
          <NavigationBarItem icon="map" href={`/${dongleId}`}>
            Overview
          </NavigationBarItem>
          <NavigationBarItem icon="route" href={`/${dongleId}/timeline`}>
            Timeline
          </NavigationBarItem>
          <NavigationBarItem icon="video_library" href={`/${dongleId}/clips`}>
            Clips
          </NavigationBarItem>
        </NavigationBar>
      </animated.main>
    </div>
  )
}
