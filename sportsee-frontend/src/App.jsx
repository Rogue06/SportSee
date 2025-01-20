import './App.css'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="main-content">
        {/* Ici viendra le contenu principal */}
      </main>
    </div>
  )
}

export default App
