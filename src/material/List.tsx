import React, { ReactNode } from 'react'

export interface ListProps {
  children: ReactNode | ReactNode[]
}

export default function List({ children }: ListProps) {
  return <div>{children}</div>
}

export interface ListItemProps {
  children: ReactNode | ReactNode[]
}

List.ListItem = function ListItem({ children }: ListItemProps) {
  return <div>{children}</div>
}

List.ListItemAvatar = function ListItemAvatar({ children }: ListItemProps) {
  return <div>{children}</div>
}
