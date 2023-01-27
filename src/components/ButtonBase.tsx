'use client'

import React, { MouseEvent, ReactNode } from 'react'
import clsx from 'clsx'

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode | ReactNode[]
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function ButtonBase({
  className,
  children,
  onClick,
  ...rest
}: ButtonBaseProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget

    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`
    circle.classList.add(
      'absolute',
      'animate-[ripple_600ms_linear]',
      'rounded-full',
      'scale-50',
      'bg-[rgba(255,255,255,0.5)]',
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

  return (
    <button
      className={clsx(
        `relative h-[40px] overflow-hidden rounded-full text-[16px]`,
        className,
      )}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  )
}
