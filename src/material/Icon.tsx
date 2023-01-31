/* eslint-disable tailwindcss/no-custom-classname */

import React from 'react'
import clsx from 'clsx'

export interface IconProps {
  className?: string
  children: string
  filled?: boolean
  size?: '20' | '24' | '40' | '48'
}

export default function Icon({ className, children, filled, size }: IconProps) {
  // defined in globals.css
  const sizeStyle = `size-${size || '24'}`
  const filledStyle = filled ? 'icon-filled' : 'icon-outline'
  return (
    <span
      className={clsx(
        'material-symbols-outlined flex',
        filledStyle,
        sizeStyle,
        className,
      )}
    >
      {children}
    </span>
  )
}
