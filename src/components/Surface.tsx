import React, { ReactNode } from 'react'
import classNames from 'classnames'

export interface SurfaceProps {
  className?: string
  children?: ReactNode | ReactNode[]
  variant?: boolean
}

export default function Surface({ className, children, variant }: SurfaceProps) {
  const bg = variant ? 'bg-surface-variant' : 'bg-surface'
  const text = variant ? 'text-on-surface-variant' : 'text-on-surface'
  return <div className={classNames(bg, text, className)}>{children}</div>
}
