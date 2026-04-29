export default function IndicadoresPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 py-16">
      <div className="font-display text-[10px] uppercase tracking-[0.3em] text-primary">Módulo 04</div>
      <h1 className="font-display text-3xl md:text-5xl mt-2">Indicadores y noticias</h1>
      <p className="text-muted-foreground mt-4 max-w-2xl">
        KPIs políticos y económicos en tiempo casi-real, con feed de noticias y resumen automático por IA.
      </p>
      <div className="mt-8 inline-flex items-center gap-3 border border-border rounded-md px-4 py-3 bg-card">
        <span className="size-2 rounded-full bg-signal-warn animate-pulse" />
        <span className="font-display text-sm">En desarrollo · Etapa 4</span>
      </div>
    </div>
  )
}
