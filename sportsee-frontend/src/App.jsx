import './App.css'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Welcome from './components/dashboard/Welcome'

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="main-content">
        <Welcome />
        {/* Les autres composants du dashboard viendront ici */}
      </main>
    </div>
  )
}

export default App
