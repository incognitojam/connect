import React, { ElementType, ReactNode } from 'react'
import clsx from 'clsx'

export interface TypographyProps {
  className?: string
  children?: ReactNode
  variant?:
    | 'display-lg'
    | 'display-md'
    | 'display-sm'
    | 'headline-lg'
    | 'headline-md'
    | 'headline-sm'
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
    'display-lg': 'font-sans text-[57px] leading-[64px] font-regular',
    'display-md': 'font-sans text-[45px] leading-[52px] font-regular',
    'display-sm': 'font-sans text-[36px] leading-[44px] font-regular',
    'headline-lg': 'font-sans text-[32px] leading-[40px] font-regular',
    'headline-md': 'font-sans text-[28px] leading-[36px] font-regular',
    'headline-sm': 'font-sans text-[24px] leading-[32px] font-regular',
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
