import React, { ReactNode } from 'react'

export interface NavigationRailProps {
  className?: string
  children?: ReactNode | ReactNode[]
}

export default function NavigationRail({
  className,
  children,
}: NavigationRailProps) {
  return <div className={className}>{children}</div>
}
