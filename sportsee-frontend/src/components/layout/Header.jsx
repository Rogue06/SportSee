import '../../styles/header.css'
import logo from '../../assets/logo_header.png'

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="SportSee" />
      </div>
      <nav className="header-nav">
        <a href="#" className="nav-link">Accueil</a>
        <a href="#" className="nav-link">Profil</a>
        <a href="#" className="nav-link">Réglage</a>
        <a href="#" className="nav-link">Communauté</a>
      </nav>
    </header>
  )
}

export default Header 