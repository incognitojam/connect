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
    '20': 'w-[28px] h-[28px]',
    '24': 'w-[32px] h-[32px]',
    '40': 'w-[48px] h-[48px]',
    '48': 'w-[56px] h-[56px]',
  }[size]
  return (
    <ButtonBase
      className={clsx(
        'inline-flex items-center justify-center rounded-full before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 before:transition before:hover:opacity-20',
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
