import React, { ReactNode } from 'react'
import clsx from 'clsx'

export interface AppBarProps {
  children?: ReactNode | ReactNode[]
  className?: string
}

export default function AppBar({ children, className }: AppBarProps) {
  return (
    <div
      className={clsx(
        'bg-surface-variant',
        'text-on-surface-variant',
        'flex',
        'items-center',
        'relative',
        'top-0',
        'left-0',
        'right-0',
        'elevation-1',
        'h-20',
        'px-8',
        className,
      )}
    >
      {children}
    </div>
  )
}
