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
    '20': 'w-[28px] h-[28px]',
    '24': 'w-[32px] h-[32px]',
    '40': 'w-[48px] h-[48px]',
    '48': 'w-[56px] h-[56px]',
  }[size || '24']
  return (
    <ButtonBase className={clsx(buttonSize, className)} {...rest}>
      <Icon size={size}>{children}</Icon>
    </ButtonBase>
  )
}
