import PropTypes from 'prop-types'
import '../styles/dashboard.css'
import KeyData from './KeyData'
import DailyActivity from '../charts/DailyActivity'
import AverageSession from '../charts/AverageSession'
import Performance from '../charts/Performance'
import Score from '../charts/Score'
import { useUserData } from '../../hooks/useUserData'

function Dashboard({ userId }) {
  const { userData, error, isLoading } = useUserData(userId)

  if (isLoading) return <div>Chargement...</div>
  if (error) return <div>Erreur : {error}</div>
  if (!userData || !userData.keyData) return <div>Aucune donnée trouvée</div>

  const keyData = userData.keyData || {}

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Bonjour <span className="name">{userData.userInfos.firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👋</p>
      </div>
      
      <div className="dashboard-content">
        <div className="charts-container">
          <DailyActivity data={userData.activity} />
          <div className="charts-row">
            <AverageSession data={userData.averageSession} />
            <Performance data={userData.performance} />
            <Score score={userData.score || userData.todayScore} />
          </div>
        </div>

        <KeyData 
          calorieCount={keyData.calorieCount || 0}
          proteinCount={keyData.proteinCount || 0}
          carbohydrateCount={keyData.carbohydrateCount || 0}
          lipidCount={keyData.lipidCount || 0}
        />
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  userId: PropTypes.string.isRequired
}

export default Dashboard 