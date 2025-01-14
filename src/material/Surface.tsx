import React, { ReactNode } from 'react'
import clsx from 'clsx'

export interface SurfaceProps {
  className?: string
  children?: ReactNode | ReactNode[]
  variant?: boolean
}

export default function Surface({
  className,
  children,
  variant,
}: SurfaceProps) {
  const bg = variant ? 'bg-surface-variant' : ''
  const text = variant ? 'text-on-surface-variant' : ''
  return <div className={clsx(bg, text, className)}>{children}</div>
}
