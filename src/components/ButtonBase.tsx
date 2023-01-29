'use client'

import React, { MouseEvent, ReactNode, useMemo } from 'react'
import clsx from 'clsx'

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode | ReactNode[]
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  ripple?: boolean
}

const handleClick = (onClick: ButtonBaseProps['onClick']) => {
  return (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()

    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - rect.left - radius}px`
    circle.style.top = `${e.clientY - rect.top - radius}px`
    circle.classList.add(
      'absolute',
      'animate-[ripple_600ms_linear]',
      'rounded-full',
      'scale-50',
      'bg-[rgba(255,255,255,0.35)]',
    )

    const ripple = button.getElementsByClassName('animate-ripple')[0]
    if (ripple) {
      ripple.remove()
    }

    button.appendChild(circle)

    setTimeout(() => {
      circle.remove()
    }, 550)

    onClick && onClick(e)
  }
}

export default function ButtonBase({
  className,
  children,
  onClick,
  ripple = true,
  ...rest
}: ButtonBaseProps) {
  const onClickHandler = useMemo(
    () => (ripple ? handleClick(onClick) : onClick),
    [ripple, onClick],
  )
  return (
    <button
      className={clsx(`relative overflow-hidden`, className)}
      onClick={onClickHandler}
      {...rest}
    >
      {children}
    </button>
  )
}
