import PropTypes from 'prop-types'
import '../../styles/layout.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout 