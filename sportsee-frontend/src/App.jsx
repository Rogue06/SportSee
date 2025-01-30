import { useUserData } from './hooks/useUserData'
import './App.css'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Welcome from './components/dashboard/Welcome'
import DailyActivity from './components/charts/DailyActivity'
import AverageSession from './components/charts/AverageSession'
import Performance from './components/charts/Performance'
import Score from './components/charts/Score'
import KeyData from './components/dashboard/KeyData'

function App() {
  const { userData, error, isLoading } = useUserData(12)

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

export default App
