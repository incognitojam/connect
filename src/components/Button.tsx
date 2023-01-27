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

  const text = {
    primary: 'text-on-primary',
    secondary: 'text-on-secondary',
    tertiary: 'text-on-tertiary',
  }[color]

  const padding = `${startIcon ? 'pl-4' : 'pl-6'} ${endIcon ? 'pr-4' : 'pr-6'}`

  return (
    <ButtonBase
      className={clsx(
        `py-1 font-mono uppercase shadow-sm transition hover:shadow-lg`,
        bg,
        padding,
        text,
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      <span className="align-[1px]">{children}</span>
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </ButtonBase>
  )
}
