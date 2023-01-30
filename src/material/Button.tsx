import React, { ReactNode } from 'react'
import clsx from 'clsx'

import ButtonBase, { ButtonBaseProps } from './ButtonBase'

export interface ButtonProps extends ButtonBaseProps {
  color?: 'primary' | 'secondary' | 'tertiary'
  startIcon?: ReactNode
  endIcon?: ReactNode
}

export default function Button({
  className,
  color,
  children,
  onClick,
  startIcon,
  endIcon,
  ...rest
}: ButtonProps) {
  color = color || 'primary'

  const bg = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color]

  const hoverBg = {
    primary: 'hover:bg-primary-hover',
    secondary: 'hover:bg-secondary-hover',
    tertiary: 'hover:bg-tertiary-hover',
  }[color]

  const text = {
    primary: 'text-on-primary',
    secondary: 'text-on-secondary',
    tertiary: 'text-on-tertiary',
  }[color]

  const padding = `${startIcon ? 'pl-4' : 'pl-6'} ${endIcon ? 'pr-4' : 'pr-6'}`

  return (
    <ButtonBase
      className={clsx(
        `inline-flex h-[40px] items-center justify-center gap-2 rounded-full py-1 font-mono text-[16px] uppercase contrast-100 transition hover:shadow-lg hover:contrast-115`,
        bg,
        hoverBg,
        padding,
        text,
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </ButtonBase>
  )
}
