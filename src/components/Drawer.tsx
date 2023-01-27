import React, { ReactNode } from 'react'

export interface DrawerProps {
  children: ReactNode | ReactNode[]
}

export default function Drawer({ children }: DrawerProps) {
  return <div>{children}</div>
}
