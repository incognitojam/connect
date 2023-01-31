import React from 'react'
import clsx from 'clsx'

import ButtonBase, { ButtonBaseProps } from './ButtonBase'
import Icon, { IconProps } from '@/material/Icon'

export interface IconButtonProps extends ButtonBaseProps {
  children: string
  filled?: IconProps['filled']
  size?: IconProps['size']
}

export default function IconButton({
  className,
  children,
  filled,
  size = '24',
  ...rest
}: IconButtonProps) {
  const buttonSize = {
    '20': 'min-w-[28px] min-h-[28px]',
    '24': 'min-w-[32px] min-h-[32px]',
    '40': 'min-w-[48px] min-h-[48px]',
    '48': 'min-w-[56px] min-h-[56px]',
  }[size]
  return (
    <ButtonBase
      className={clsx(
        'inline-flex items-center justify-center rounded-full before:absolute before:inset-0 before:rounded-full before:bg-on-surface before:opacity-0 before:transition before:hover:opacity-20',
        buttonSize,
        className,
      )}
      {...rest}
    >
      <Icon filled={filled} size={size}>
        {children}
      </Icon>
    </ButtonBase>
  )
}
