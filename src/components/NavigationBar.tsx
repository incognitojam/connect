'use client'

import React, { Children, ReactNode, cloneElement, useState } from 'react'

import ButtonBase from '@/components/ButtonBase'
import Icon from '@/components/Icon'

export interface NavigationBarItemProps {
  children: ReactNode
  icon?: string
  selected?: boolean
}

export function NavigationBarItem({
  children,
  icon = 'home',
  selected,
}: NavigationBarItemProps) {
  return (
    <ButtonBase className="flex h-20 min-w-[48px] grow basis-0 flex-col items-center justify-center">
      <Icon className="flex" filled={selected}>
        {icon}
      </Icon>
      <div className="flex font-mono uppercase">{children}</div>
    </ButtonBase>
  )
}

export default function NavigationBar(props: {
  children: ReactNode | ReactNode[]
}) {
  const [selected, setSelected] = useState(0)
  const items = Children.toArray(props.children)

  return (
    <div className="absolute inset-x-0 bottom-0 flex h-20 flex-row gap-x-2 bg-black text-on-surface">
      {items.map((item, index) => {
        return cloneElement<NavigationBarItemProps>(
          item as React.ReactElement,
          {
            selected: index === selected,
          },
        )
      })}
    </div>
  )
}
