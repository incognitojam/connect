import React, { ReactNode } from 'react'
import clsx from 'clsx'

export interface BottomSheetProps {
  className?: string
  children?: ReactNode
}

export default function BottomSheet({ className, children }: BottomSheetProps) {
  return (
    <div
      className={clsx(
        'elevation-1 rounded-t-xl bg-surface shadow-xl',
        className,
      )}
    >
      {children}
    </div>
  )
}
