'use client'

import React, { Children, ReactNode, cloneElement, useState } from 'react'
import clsx from 'clsx'

import ButtonBase, { ButtonBaseProps } from '@/components/ButtonBase'
import Icon, { IconProps } from '@/components/Icon'

export interface NavigationBarItemProps {
  children: ReactNode
  icon: IconProps['children']
  onClick?: ButtonBaseProps['onClick']
  selected?: boolean
}

export function NavigationBarItem({
  children,
  icon,
  onClick,
  selected,
}: NavigationBarItemProps) {
  return (
    <ButtonBase
      className={clsx(
        'flex h-20 min-w-[48px] grow basis-0 flex-col items-center justify-center transition',
        selected && 'font-bold text-primary',
      )}
      onClick={onClick}
      ripple={false}
    >
      <Icon
        className={clsx('flex transition', selected && 'scale-125')}
        filled={selected}
      >
        {icon}
      </Icon>
      <div className="mt-1 flex font-mono uppercase">{children}</div>
    </ButtonBase>
  )
}

export default function NavigationBar(props: {
  children: ReactNode | ReactNode[]
}) {
  const [selected, setSelected] = useState(0)
  const items = Children.toArray(props.children)

  return (
    <div className="pb-safe elevation-2 absolute inset-x-0 bottom-0 flex h-20 flex-row gap-x-2 bg-surface text-on-surface">
      {items.map((item, index) => {
        return cloneElement<NavigationBarItemProps>(
          item as React.ReactElement,
          {
            selected: index === selected,
            onClick: () => setSelected(index),
          },
        )
      })}
    </div>
  )
}
