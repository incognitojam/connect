import React, { MouseEvent, ReactNode } from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode | ReactNode[]
}

export default function Button({ children, onClick, ...rest }: ButtonProps) {
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
      'bg-[rgba(255,255,255,0.5)]'
    )

    const ripple = button.getElementsByClassName('animate-ripple')[0]
    if (ripple) {
      ripple.remove()
    }

    button.appendChild(circle)

    setTimeout(() => {
      circle.remove()
    }, 550)

    onClick && onClick(e);
  }

  return (
    <button
      className="relative overflow-hidden rounded-md bg-blue-600 px-4 py-2 text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  )
}
