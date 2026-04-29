import { Routes, Route } from 'react-router-dom'
import { DashboardShell } from './components/dashboard-shell'
import OverviewPage from './pages/Overview'
import GrafoPage from './pages/Grafo'
import MatrizPage from './pages/Matriz'
import EscenariosPage from './pages/Escenarios'
import IndicadoresPage from './pages/Indicadores'
import IAPage from './pages/IA'
import PymesPage from './pages/Pymes'
import KanbanPage from './pages/Kanban'
import PredictorPage from './pages/Predictor'
import CongresoPage from './pages/Congreso'
import ProvinciasPage from './pages/Provincias'
import SombraPage from './pages/Sombra'
import InternacionalPage from './pages/Internacional'
import AlianzasPage from './pages/Alianzas'
import FeedPage from './pages/Feed'

function App() {
  return (
    <DashboardShell>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/grafo" element={<GrafoPage />} />
        <Route path="/matriz" element={<MatrizPage />} />
        <Route path="/escenarios" element={<EscenariosPage />} />
        <Route path="/indicadores" element={<IndicadoresPage />} />
        <Route path="/ia" element={<IAPage />} />
        <Route path="/pymes" element={<PymesPage />} />
        <Route path="/kanban" element={<KanbanPage />} />
        <Route path="/predictor" element={<PredictorPage />} />
        <Route path="/congreso" element={<CongresoPage />} />
        <Route path="/provincias" element={<ProvinciasPage />} />
        <Route path="/sombra" element={<SombraPage />} />
        <Route path="/internacional" element={<InternacionalPage />} />
        <Route path="/alianzas" element={<AlianzasPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </DashboardShell>
  )
}

export default App
