/* eslint-disable tailwindcss/no-custom-classname */

import React from 'react'
import clsx from 'clsx'

export interface IconProps {
  className?: string
  children: React.ReactNode
  size?: '20' | '24' | '40' | '48'
}

export default function Icon({ className, children, size }: IconProps) {
  // defined in globals.css
  const sizeStyle = `size-${size || '24'}`
  return (
    <span
      className={clsx(
        'material-symbols-outlined',
        'align-text-bottom',
        sizeStyle,
        className,
      )}
    >
      {children}
    </span>
  )
}
