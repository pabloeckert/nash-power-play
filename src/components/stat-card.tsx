import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function StatCard({
  label,
  value,
  hint,
  accent,
  className,
  children,
}: {
  label: string
  value: ReactNode
  hint?: ReactNode
  accent?: 'primary' | 'ally' | 'rival' | 'warn' | 'neutral'
  className?: string
  children?: ReactNode
}) {
  const accentMap: Record<string, string> = {
    primary: 'before:bg-primary',
    ally: 'before:bg-signal-ally',
    rival: 'before:bg-signal-rival',
    warn: 'before:bg-signal-warn',
    neutral: 'before:bg-signal-neutral',
  }
  return (
    <div
      className={cn(
        'relative bg-card border border-border rounded-lg p-4 overflow-hidden',
        'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px]',
        accent && accentMap[accent],
        className,
      )}
    >
      <div className="text-[10px] font-display uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-1.5 font-display text-2xl text-foreground leading-tight">
        {value}
      </div>
      {hint && (
        <div className="mt-1 text-xs text-muted-foreground">{hint}</div>
      )}
      {children}
    </div>
  )
}
