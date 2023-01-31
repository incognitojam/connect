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
        'elevation-3 flex h-14 min-w-[320px] max-w-[720px] items-center justify-between gap-4 rounded-full bg-surface px-4 text-on-surface',
        className,
      )}
    >
      {leading}
      <span className="w-full">{children}</span>
      {trailing}
    </div>
  )
}
