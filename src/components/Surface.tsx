import React, { ReactNode } from 'react'
import classNames from 'classnames'

export interface SurfaceProps {
  className?: string
  children?: ReactNode | ReactNode[]
}

export default function Surface({ className, children }: SurfaceProps) {
  return (
    <div className={classNames('bg-surface text-on-surface', className)}>
      {children}
    </div>
  )
}
