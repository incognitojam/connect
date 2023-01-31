import React, { ReactNode } from 'react'
import clsx from 'clsx'

import Typography from '@/material/Typography'

export interface ListProps {
  className?: string
  children: ReactNode
}

export default function List({ className, children }: ListProps) {
  return (
    <div className={clsx('flex flex-col gap-2', className)}>{children}</div>
  )
}

export interface ListItemProps {
  children: ReactNode
  variant?: '1-line' | '2-line' | '3-line'
  leading?: ReactNode
  trailing?: ReactNode
}

// TODO: guess variant from content
export function ListItem({
  children,
  variant = '1-line',
  leading,
  trailing,
}: ListItemProps) {
  const height = {
    '1-line': 'h-14',
    '2-line': 'h-20',
    '3-line': 'h-28',
  }[variant]
  return (
    <div
      className={clsx(
        'elevation-0 ml-4 mr-6 flex items-center gap-4 rounded-none bg-surface text-on-surface',
        height,
      )}
    >
      {leading}
      {children}
      {trailing}
    </div>
  )
}

export interface ListItemContentProps {
  headline: string
  subhead?: string
}

export function ListItemContent({ headline, subhead }: ListItemContentProps) {
  return (
    <div>
      <Typography color="on-surface" variant="body-lg" as="div">
        {headline}
      </Typography>
      {subhead && (
        <Typography color="on-surface-variant" variant="body-md" as="div">
          {subhead}
        </Typography>
      )}
    </div>
  )
}
