import React, { ElementType, ReactNode } from 'react'
import clsx from 'clsx'

export interface TypographyProps {
  className?: string
  children?: ReactNode
  variant?:
    | 'title-lg'
    | 'title-md'
    | 'title-sm'
    | 'label-lg'
    | 'label-md'
    | 'label-sm'
    | 'body-lg'
    | 'body-md'
    | 'body-sm'
  color?:
    | 'on-surface'
    | 'on-surface-variant'
    | 'on-primary'
    | 'on-secondary'
    | 'on-tertiary'
  as?: ElementType
}

export default function Typography({
  className,
  children,
  color = 'on-surface',
  variant = 'body-md',
  as: Component = 'span',
}: TypographyProps) {
  // TODO: letter spacing
  const styles = {
    'title-lg': 'font-sans text-[22px] leading-[28px] font-regular',
    'title-md': 'font-sans text-[16px] leading-[24px] font-medium',
    'title-sm': 'font-sans text-[14px] leading-[20px] font-medium',
    'label-lg': 'font-mono text-[14px] leading-[20px] font-medium',
    'label-md': 'font-mono text-[12px] leading-[16px] font-medium',
    'label-sm': 'font-mono text-[11px] leading-[16px] font-medium',
    'body-lg': 'font-sans text-[16px] leading-[24px] font-regular',
    'body-md': 'font-sans text-[14px] leading-[20px] font-regular',
    'body-sm': 'font-sans text-[12px] leading-[16px] font-regular',
  }[variant]

  const colorStyles = {
    'on-surface': 'text-on-surface',
    'on-surface-variant': 'text-on-surface-variant',
    'on-primary': 'text-on-primary',
    'on-secondary': 'text-on-secondary',
    'on-tertiary': 'text-on-tertiary',
  }[color]

  return (
    <Component className={clsx(styles, colorStyles, className)}>
      {children}
    </Component>
  )
}
