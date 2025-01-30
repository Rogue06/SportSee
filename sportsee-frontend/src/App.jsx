import { useUserData } from './hooks/useUserData'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import './App.css'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Welcome from './components/dashboard/Welcome'
import DailyActivity from './components/charts/DailyActivity'
import AverageSession from './components/charts/AverageSession'
import Performance from './components/charts/Performance'
import Score from './components/charts/Score'
import KeyData from './components/dashboard/KeyData'

// Composant Dashboard séparé pour la clarté
function Dashboard() {
  const { userId } = useParams() // Récupère l'ID depuis l'URL
  const { userData, error, isLoading } = useUserData(parseInt(userId))

  if (error) return <div className="error">{error}</div>
  if (isLoading) return <div>Chargement...</div>

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="main-content">
        <Welcome userData={userData.mainData} />
        <div className="dashboard-container">
          <div className="charts-grid">
            <DailyActivity data={userData.activity} />
            <div className="charts-row">
              <AverageSession data={userData.averageSessions} />
              <Performance data={userData.performance} />
              <Score score={userData.mainData.todayScore || userData.mainData.score} />
            </div>
          </div>
          <KeyData data={userData.mainData.keyData} />
        </div>
      </main>
    </div>
  )
}

// Composant App principal avec les routes
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirection de la racine vers l'utilisateur 12 par défaut */}
        <Route path="/" element={<Navigate to="/user/12" replace />} />
        {/* Route pour chaque utilisateur */}
        <Route path="/user/:userId" element={<Dashboard />} />
        {/* Route pour gérer les URLs invalides */}
        <Route path="*" element={<Navigate to="/user/12" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
