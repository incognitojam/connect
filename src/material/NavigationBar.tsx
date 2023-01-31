'use client'

import React, { Children, ReactNode, cloneElement, isValidElement } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import Icon, { IconProps } from '@/material/Icon'

export interface NavigationBarItemProps {
  children: ReactNode
  icon: IconProps['children']
  href: string
  selected?: boolean
}

export function NavigationBarItem({
  children,
  icon,
  href,
  selected,
}: NavigationBarItemProps) {
  return (
    <Link
      className={clsx(
        'flex h-20 min-w-[48px] grow basis-0 flex-col items-center justify-center transition',
        selected && 'font-medium text-primary',
      )}
      href={href}
    >
      <Icon
        className="flex transition-all"
        filled={selected}
      >
        {icon}
      </Icon>
      <div className="mt-1 flex font-mono uppercase">{children}</div>
    </Link>
  )
}

export interface NavigationBarProps {
  children: ReactNode | ReactNode[]
}

export default function NavigationBar({ children }: NavigationBarProps) {
  const pathname = usePathname()

  return (
    <div className="pb-safe elevation-2 absolute inset-x-0 bottom-0 flex h-20 flex-row gap-x-2 bg-surface text-on-surface">
      {Children.map(children, (child) => {
        if (!isValidElement<NavigationBarItemProps>(child)) {
          return null
        }

        return cloneElement(child, {
          selected: child.props.href === pathname,
        })
      })}
    </div>
  )
}
