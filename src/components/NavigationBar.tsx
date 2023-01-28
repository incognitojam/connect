import React, { Children, ReactNode } from 'react'

import ButtonBase from '@/components/ButtonBase'
import Icon from '@/components/Icon'

export function NavigationBarItem(props: {
  children: ReactNode
  icon?: string
}) {
  const icon = props.icon || 'add'

  return (
    <ButtonBase className="flex h-20 min-w-[48px] grow basis-0 flex-col items-center justify-center">
      <Icon className="flex">{icon}</Icon>
      <div className="flex">{props.children}</div>
    </ButtonBase>
  )
}

export default function NavigationBar(props: {
  children: ReactNode | ReactNode[]
}) {
  const items = Children.toArray(props.children)

  return (
    <div className="absolute inset-x-0 bottom-0 flex h-20 flex-row gap-x-2 bg-black text-on-surface">
      {items}
    </div>
  )
}
