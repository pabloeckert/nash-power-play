import { useState } from 'react'
import { ActorGraph } from '@/components/actor-graph'
import { ACTOR_KIND_LABELS, type ActorKind } from '@/lib/seed-data'
import { cn } from '@/lib/utils'

const ALL_KINDS: ActorKind[] = ['leader', 'party', 'institution', 'union', 'business', 'media']

export default function GrafoPage() {
  const [kinds, setKinds] = useState<Set<ActorKind>>(new Set(ALL_KINDS))
  const [rel, setRel] = useState<'all' | 'ally' | 'rival' | 'neutral'>('all')

  const toggle = (k: ActorKind) => {
    setKinds((prev) => {
      const next = new Set(prev)
      if (next.has(k)) next.delete(k)
      else next.add(k)
      return next.size === 0 ? new Set(ALL_KINDS) : next
    })
  }

  return (
    <div className="mx-auto max-w-[1600px] px-6 py-8">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
        <div>
          <div className="font-display text-[10px] uppercase tracking-[0.3em] text-primary">Módulo 01</div>
          <h1 className="font-display text-3xl mt-1">Grafo de actores</h1>
          <p className="text-muted-foreground text-sm mt-1 max-w-2xl">
            Click en un nodo para aislar sus vínculos. Filtrá por tipo de actor o tipo de relación.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {ALL_KINDS.map((k) => {
          const active = kinds.has(k)
          return (
            <button
              key={k}
              onClick={() => toggle(k)}
              className={cn(
                'px-3 h-8 rounded-md border text-xs font-display transition-colors',
                active
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:text-foreground',
              )}
            >
              {ACTOR_KIND_LABELS[k]}
            </button>
          )
        })}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {(['all', 'ally', 'rival', 'neutral'] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRel(r)}
            className={cn(
              'px-3 h-8 rounded-md border text-xs font-display transition-colors capitalize',
              rel === r
                ? 'border-foreground text-foreground'
                : 'border-border text-muted-foreground hover:text-foreground',
              r === 'ally' && rel === r && 'border-signal-ally text-signal-ally',
              r === 'rival' && rel === r && 'border-signal-rival text-signal-rival',
            )}
          >
            {r === 'all' ? 'Todas las relaciones' : r === 'ally' ? 'Alianzas' : r === 'rival' ? 'Rivalidades' : 'Neutras'}
          </button>
        ))}
      </div>

      <div className="h-[72vh] bg-card border border-border rounded-lg overflow-hidden">
        <ActorGraph filterKinds={kinds} filterRelation={rel} />
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground font-display">
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-signal-ally" /> Alianza
        </span>
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-signal-rival" /> Rivalidad
        </span>
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-signal-neutral" /> Neutro
        </span>
      </div>
    </div>
  )
}
