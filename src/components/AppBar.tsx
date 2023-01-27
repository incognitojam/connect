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
        'elevation-1 relative inset-x-0 top-0 flex h-20 items-center bg-surface-variant px-8 text-on-surface-variant',
        className,
      )}
    >
      {children}
    </div>
  )
}
