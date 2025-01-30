import PropTypes from 'prop-types'
import '../../styles/welcome.css'

function Welcome({ userData }) { // Reçoit les données via props
  if (!userData) return <div>Chargement...</div>

  return (
    <div className="welcome">
      <h1>Bonjour <span className="highlight">{userData.userInfos.firstName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

Welcome.propTypes = {
  userData: PropTypes.shape({
    userInfos: PropTypes.shape({
      firstName: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default Welcome 