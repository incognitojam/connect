import React from 'react'
import clsx from 'clsx'

import ButtonBase, { ButtonBaseProps } from './ButtonBase'
import Icon, { IconProps } from '@/components/Icon'

export interface IconButtonProps extends ButtonBaseProps {
  children: string
  size: IconProps['size']
}

export default function IconButton({
  className,
  children,
  size,
  ...rest
}: IconButtonProps) {
  const buttonSize = {
    '20': 'h-8 w-8',
    '24': 'h-10 w-10',
    '40': 'h-12 w-12',
    '48': 'h-14 w-14',
  }[size || '24']
  return (
    <ButtonBase className={clsx(buttonSize, className)} {...rest}>
      <Icon size={size}>{children}</Icon>
    </ButtonBase>
  )
}
