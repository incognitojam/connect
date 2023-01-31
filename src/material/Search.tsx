import React, { ReactNode } from 'react'
import clsx from 'clsx'

export interface SearchProps {
  className?: string
  children?: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
  expanded?: boolean
  result?: ReactNode
}

export default function Search({
  className,
  children,
  leading,
  trailing,
  expanded,
  result,
}: SearchProps) {
  return (
    <div
      className={clsx(
        'elevation-3 min-w-[320px] max-w-[720px] rounded-xl bg-surface text-on-surface transition',
        className,
      )}
    >
      <div className="flex h-14 items-center justify-between gap-4 px-4">
        {leading}
        <span className="w-full">{children}</span>
        {trailing}
      </div>

      {expanded && result}
    </div>
  )
}
