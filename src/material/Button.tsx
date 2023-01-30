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
        `h-[40px] rounded-full py-1 font-mono text-[16px] uppercase contrast-100 transition hover:shadow-lg hover:contrast-115 inline-flex justify-center items-center gap-2`,
        bg,
        hoverBg,
        padding,
        text,
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {startIcon && <span>{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span>{endIcon}</span>}
    </ButtonBase>
  )
}
