export default function EscenariosPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 py-16">
      <div className="font-display text-[10px] uppercase tracking-[0.3em] text-primary">Módulo 03</div>
      <h1 className="font-display text-3xl md:text-5xl mt-2">Escenarios</h1>
      <p className="text-muted-foreground mt-4 max-w-2xl">
        Simulador what-if. Ajustá inflación, popularidad, fragmentación legislativa y otros parámetros, y observá cómo se desplazan los equilibrios del juego.
      </p>
      <div className="mt-8 inline-flex items-center gap-3 border border-border rounded-md px-4 py-3 bg-card">
        <span className="size-2 rounded-full bg-signal-warn animate-pulse" />
        <span className="font-display text-sm">En desarrollo · Etapa 3</span>
      </div>
    </div>
  )
}
