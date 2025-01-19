import '../../styles/sidebar.css';
import meditation from '../../assets/meditation.svg';
import swimming from '../../assets/swimming.svg';
import cycling from '../../assets/cycling.svg';
import bodybuilding from '../../assets/bodybuilding.svg';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="nav">
        <a href="#" className="nav-icon">
          <img src={meditation} alt="Méditation" />
        </a>
        <a href="#" className="nav-icon">
          <img src={swimming} alt="Natation" />
        </a>
        <a href="#" className="nav-icon">
          <img src={cycling} alt="Vélo" />
        </a>
        <a href="#" className="nav-icon">
          <img src={bodybuilding} alt="Musculation" />
        </a>
      </nav>
      <p className="copyright">Copyright, SportSee 2020</p>
    </aside>
  );
}

export default Sidebar;