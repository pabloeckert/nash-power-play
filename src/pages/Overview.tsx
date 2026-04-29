import { Link } from 'react-router-dom'
import { StatCard } from '@/components/stat-card'
import { ACTORS, RELATIONS } from '@/lib/seed-data'

const MODULES = [
  { code: "01", to: "/grafo", title: "Grafo de actores", desc: "Mapa de poder, alianzas y rivalidades entre partidos, líderes, sindicatos, empresas, medios e instituciones.", status: "Disponible" },
  { code: "02", to: "/matriz", title: "Matriz de pagos", desc: "Editor de juegos N×M con cálculo de equilibrios de Nash en estrategias puras y mixtas.", status: "Próximo · Etapa 2" },
  { code: "03", to: "/escenarios", title: "Escenarios", desc: "Simulador what-if: variá parámetros macro y observá cómo se desplazan los equilibrios.", status: "Próximo · Etapa 3" },
  { code: "04", to: "/indicadores", title: "Indicadores y noticias", desc: "KPIs políticos y económicos, feed de noticias con resumen y sentimiento por IA.", status: "Próximo · Etapa 4" },
  { code: "05", to: "/ia", title: "Pensamiento IA", desc: "Consenso de 5 modelos de IA sobre la situación política argentina.", status: "Disponible" },
  { code: "06", to: "/pymes", title: "PyMEs", desc: "Diagnóstico sectorial, indicadores y políticas públicas para el sector PyME.", status: "Disponible" },
  { code: "07", to: "/kanban", title: "Kanban escenarios", desc: "10 escenarios estratégicos organizados en tablero Kanban drag-drop.", status: "Disponible" },
  { code: "08", to: "/predictor", title: "Predictor", desc: "Carga de datos, proyecciones multihorizonte y simulador Nash interactivo.", status: "Disponible" },
  { code: "09", to: "/congreso", title: "Congreso", desc: "Composición de bloques, legislación clave y análisis de poder legislativo.", status: "Disponible" },
  { code: "10", to: "/provincias", title: "Provincias", desc: "24 provincias con gobernadores, alianzas y transferencias federales.", status: "Disponible" },
  { code: "11", to: "/sombra", title: "Actores en la sombra", desc: "Los tapados: operadores judiciales, digitales y económicos sin cargo formal.", status: "Disponible" },
  { code: "12", to: "/internacional", title: "Internacional", desc: "Bloques internacionales y su relación con Argentina.", status: "Disponible" },
  { code: "13", to: "/alianzas", title: "Alianzas", desc: "Mapa de alianzas sólidas, débiles y rotas del oficialismo y oposición.", status: "Disponible" },
  { code: "14", to: "/feed", title: "Feed de fuentes", desc: "Fuentes de análisis, datos y proyecciones de medios y think tanks.", status: "Disponible" },
] as const

export default function OverviewPage() {
  const allies = RELATIONS.filter((r) => r.type === 'ally').length
  const rivals = RELATIONS.filter((r) => r.type === 'rival').length
  const neutral = RELATIONS.filter((r) => r.type === 'neutral').length

  return (
    <>
      <section className="bg-grid border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:py-24">
          <div className="text-[11px] font-display uppercase tracking-[0.3em] text-primary mb-4">
            República Argentina · Análisis estratégico
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            Poder, alianzas y escenarios{' '}
            <span className="text-primary">en equilibrio.</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-base md:text-lg">
            Un tablero analítico que cruza el mapa de actores políticos con
            teoría de juegos. Construido para entender quién juega, con quién, y
            qué pasa cuando cambian las reglas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/grafo"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-md bg-primary text-primary-foreground font-display text-sm hover:bg-primary/90 transition-colors"
            >
              Abrir grafo
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/matriz"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-md border border-border text-foreground font-display text-sm hover:bg-accent transition-colors"
            >
              Ver matriz de pagos
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Actores mapeados" value={ACTORS.length} accent="primary" />
          <StatCard label="Alianzas" value={allies} accent="ally" hint="Vínculos cooperativos" />
          <StatCard label="Rivalidades" value={rivals} accent="rival" hint="Conflictos activos" />
          <StatCard label="Vínculos neutros" value={neutral} accent="neutral" hint="Dialoguistas" />
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-16">
        <h2 className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          Módulos del tablero
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODULES.map((m) => (
            <Link
              key={m.code}
              to={m.to}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-display text-[10px] uppercase tracking-wider text-primary mb-2">
                    Módulo {m.code}
                  </div>
                  <h3 className="font-display text-lg">{m.title}</h3>
                </div>
                <span className="text-[9px] font-display uppercase tracking-wider text-muted-foreground border border-border rounded px-2 py-1 whitespace-nowrap">
                  {m.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{m.desc}</p>
              <div className="mt-4 text-sm text-primary font-display flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Abrir <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
