import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

const NAV = [
  { to: "/", label: "Resumen", code: "00" },
  { to: "/grafo", label: "Grafo", code: "01" },
  { to: "/matriz", label: "Matriz", code: "02" },
  { to: "/escenarios", label: "Escenarios", code: "03" },
  { to: "/indicadores", label: "Indicadores", code: "04" },
  { to: "/ia", label: "IA", code: "05" },
  { to: "/pymes", label: "PyMEs", code: "06" },
  { to: "/kanban", label: "Kanban", code: "07" },
  { to: "/predictor", label: "Predictor", code: "08" },
  { to: "/congreso", label: "Congreso", code: "09" },
  { to: "/provincias", label: "Provincias", code: "10" },
  { to: "/sombra", label: "Sombra", code: "11" },
  { to: "/internacional", label: "Internacional", code: "12" },
  { to: "/alianzas", label: "Alianzas", code: "13" },
  { to: "/feed", label: "Feed", code: "14" },
] as const

export function DashboardShell({ children }: { children: ReactNode }) {
  const location = useLocation()
  const path = location.pathname

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border bg-card/40 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto max-w-[1600px] px-4 h-14 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <span className="font-display text-primary text-lg leading-none">▲</span>
            <span className="font-display text-sm tracking-wider uppercase">
              Tablero<span className="text-primary">·</span>Nash
            </span>
          </Link>

          <nav className="flex items-center gap-0.5 ml-auto overflow-x-auto scrollbar-hide">
            {NAV.map((item) => {
              const active =
                item.to === "/" ? path === "/" : path.startsWith(item.to)
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "group flex items-center gap-1.5 px-2 h-9 rounded-md text-xs transition-colors font-display whitespace-nowrap",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent",
                  )}
                >
                  <span className="text-[9px] opacity-60">{item.code}</span>
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-border text-[10px] font-display text-muted-foreground uppercase tracking-wider shrink-0">
            <span className="size-1.5 rounded-full bg-signal-ally animate-pulse" />
            Live
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card/40 mt-12">
        <div className="mx-auto max-w-[1600px] px-6 h-12 flex items-center justify-between text-[11px] font-display text-muted-foreground">
          <span>Datos ilustrativos · Citar fuentes antes de uso público</span>
          <span className="opacity-70">v4.1 · Tablero Nash</span>
        </div>
      </footer>
    </div>
  )
}
