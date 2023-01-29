import React, { ReactNode } from 'react'
import { Switch as HeadlessSwitch } from '@headlessui/react'

export interface SwitchProps {
  color?: 'primary' | 'secondary' | 'tertiary'
  checked?: boolean
  onChange?: (checked: boolean) => void
  children?: ReactNode | ReactNode[]
}

export default function Switch({
  color,
  checked,
  onChange,
  children,
}: SwitchProps) {
  color = color || 'primary'

  const bg = checked
    ? {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
      }[color]
    : 'bg-gray-200'

  return (
    <HeadlessSwitch
      checked={checked}
      onChange={onChange}
      className={`${bg} relative inline-flex h-6 w-11 items-center rounded-full transition`}
    >
      {children}
    </HeadlessSwitch>
  )
}
