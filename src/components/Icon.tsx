/* eslint-disable tailwindcss/no-custom-classname */

import React from 'react'

export interface IconProps {
  children: React.ReactNode
  size?: '20' | '24' | '40' | '48'
}

export default function Icon({ children, size }: IconProps) {
  const sizeStyle = `size-${size || '24'}`
  return (
    <span
      className={`material-symbols-outlined align-text-bottom ${sizeStyle}`}
    >
      {children}
    </span>
  )
}
