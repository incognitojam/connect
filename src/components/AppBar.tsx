import React, { ReactNode } from 'react'
import clsx from 'clsx'

export interface AppBarProps {
  children?: ReactNode | ReactNode[]
  className?: string
  relative?: boolean
}

export default function AppBar({ children, className, relative }: AppBarProps) {
  const position = relative ? 'relative' : 'absolute'
  return (
    <div
      className={clsx(
        'inset-x-0 top-0 flex h-20 items-center bg-surface-variant px-8 text-on-surface-variant',
        position,
        className,
      )}
    >
      {children}
    </div>
  )
}
