import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Welcome from './components/dashboard/Welcome'
import DailyActivity from './components/dashboard/DailyActivity'
import AverageSession from './components/dashboard/AverageSession'
import { getUserData } from './services/userService'

function App() {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData(12)
        setUserData(data)
      } catch (err) {
        setError('Erreur lors du chargement des données')
      }
    }
    fetchData()
  }, [])

  if (error) return <div className="error">{error}</div>
  if (!userData) return <div>Chargement...</div>

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="main-content">
        <Welcome userData={userData.mainData} />
        <div className="charts-grid">
          <DailyActivity data={userData.activity} />
          <div className="charts-row">
            <AverageSession data={userData.averageSessions} />
            {/* Les autres graphiques viendront ici */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
