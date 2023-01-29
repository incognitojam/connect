import React, { ReactNode } from 'react'
import clsx from 'clsx'

export interface TopAppBarProps {
  className?: string
  children?: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
}

export default function TopAppBar({
  className,
  children,
  leading,
  trailing,
}: TopAppBarProps) {
  return (
    <div
      className={clsx(
        'inset-x-0 top-0 flex h-16 items-center bg-surface px-4 py-5 text-on-surface',
        className,
      )}
    >
      {leading}
      <div className="text-xl">{children}</div>
      {trailing}
    </div>
  )
}
