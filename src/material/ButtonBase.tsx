'use client'

import React, { MouseEvent, ReactNode, useRef, useState } from 'react'
import clsx from 'clsx'
import Ripple, { RippleEffect, RippleStyle } from './Ripple'

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode | ReactNode[]
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  ripple?: boolean
}

export default function ButtonBase({
  className,
  children,
  onClick,
  ripple = true,
  ...rest
}: ButtonBaseProps) {
  const button = useRef<HTMLButtonElement | null>(null)
  const [ripples, setRipples] = useState<RippleEffect[]>([])
  const [nextRippleId, setNextRippleId] = useState<number>(0)

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (ripple && button.current) {
      const rect = button.current.getBoundingClientRect()
      const width = button.current.clientWidth || 0
      const height = button.current.clientHeight || 0
      const diameter = Math.max(width, height)
      const radius = diameter / 2
      const rippleStyle: RippleStyle = {
        height: diameter,
        width: diameter,
        top: e.clientY - rect.top - radius,
        left: e.clientX - rect.left - radius,
      }
      setRipples((curr) => [
        ...curr,
        { id: nextRippleId, timestamp: e.timeStamp, style: rippleStyle },
      ])
      setNextRippleId((curr) => curr + 1)
      onClick && onClick(e)
    } else {
      onClick && onClick(e)
    }
  }

  const removeRipple = (id: number) => {
    const ripplesNew = ripples.filter((item) => item.id !== id)
    setRipples(ripplesNew)
  }

  return (
    <button
      className={clsx(`relative overflow-hidden`, className)}
      onClick={onClickHandler}
      ref={button}
      {...rest}
    >
      {children}
      {ripples.map((ripple) => {
        return (
          <Ripple
            key={`${ripple.timestamp}-${ripple.id}`}
            id={ripple.id}
            className="absolute scale-50 animate-ripple rounded-full bg-[rgba(255,255,255,0.35)]"
            style={ripple.style}
            terminate={removeRipple}
          />
        )
      })}
    </button>
  )
}
