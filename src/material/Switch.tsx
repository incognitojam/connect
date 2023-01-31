import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { Switch as HeadlessSwitch } from '@headlessui/react'

export interface SwitchProps {
  className?: string
  color?: 'primary' | 'secondary' | 'tertiary'
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export default function Switch({
  className,
  color = 'primary',
  checked,
  onChange,
}: SwitchProps) {
  const bg = checked
    ? {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
      }[color]
    : 'bg-surface-variant'
  const handle = checked
    ? {
        primary: 'bg-on-primary',
        secondary: 'bg-on-secondary',
        tertiary: 'bg-on-tertiary',
      }[color]
    : 'bg-outline'
  const outline = checked ? 'outline-transparent' : 'outline-outline'

  return (
    <HeadlessSwitch
      className={clsx(
        bg,
        outline,
        `relative inline-flex h-8 w-[56px] items-center rounded-full pl-1 outline outline-2 outline-offset-[-2px] transition`,
        className,
      )}
      checked={checked}
      onChange={onChange}
    >
      <span
        className={clsx(
          'inline-block h-4 w-4 rounded-full transition',
          checked ? 'translate-x-7 scale-150' : 'translate-x-1 scale-100',
          handle,
        )}
      />
    </HeadlessSwitch>
  )
}
