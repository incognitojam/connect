import React, { ReactNode } from 'react'
import clsx from 'clsx'

export interface SearchProps {
  className?: string
  children?: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
}

export default function Search({
  className,
  children,
  leading,
  trailing,
}: SearchProps) {
  return (
    <div
      className={clsx(
        'elevation-3 flex h-14 min-w-[320px] max-w-[720px] items-center justify-between rounded-full bg-surface px-4 text-on-surface',
        className,
      )}
    >
      {leading && <div className="mr-4">{leading}</div>}
      <div className="w-full">{children}</div>
      {trailing && <div className="ml-4">{trailing}</div>}
    </div>
  )
}
