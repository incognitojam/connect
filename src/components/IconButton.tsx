import React from 'react'
import clsx from 'clsx'

import ButtonBase, { ButtonBaseProps } from './ButtonBase'

export interface IconButtonProps extends ButtonBaseProps {
  icon: React.ReactNode
}

export default function IconButton({
  className,
  icon,
  ...rest
}: IconButtonProps) {
  return (
    <ButtonBase className={clsx('aspect-square', className)} {...rest}>
      {icon}
    </ButtonBase>
  )
}
