export default function MatrizPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 py-16">
      <div className="font-display text-[10px] uppercase tracking-[0.3em] text-primary">Módulo 02</div>
      <h1 className="font-display text-3xl md:text-5xl mt-2">Matriz de pagos</h1>
      <p className="text-muted-foreground mt-4 max-w-2xl">
        Editor de juegos N×M con solver de equilibrios de Nash, plantillas aplicadas a Argentina y visualización de mejores respuestas.
      </p>
      <div className="mt-8 inline-flex items-center gap-3 border border-border rounded-md px-4 py-3 bg-card">
        <span className="size-2 rounded-full bg-signal-warn animate-pulse" />
        <span className="font-display text-sm">En desarrollo · Etapa 2</span>
      </div>
    </div>
  )
}
