import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { Switch as HeadlessSwitch } from '@headlessui/react'

export interface SwitchProps {
  className?: string
  color?: 'primary' | 'secondary' | 'tertiary'
  checked?: boolean
  onChange?: (checked: boolean) => void
  children?: ReactNode | ReactNode[]
}

export default function Switch({
  className,
  color = 'primary',
  checked,
  onChange,
  children,
}: SwitchProps) {
  const bg = checked
    ? {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
      }[color]
    : 'bg-gray-200'

  return (
    <HeadlessSwitch
      className={clsx(
        `${bg} relative inline-flex h-6 w-11 items-center rounded-full transition`,
        className,
      )}
      checked={checked}
      onChange={onChange}
    >
      {children}
    </HeadlessSwitch>
  )
}
