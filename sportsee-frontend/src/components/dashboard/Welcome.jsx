import { useState, useEffect } from 'react'
import { getUserData } from '../../services/userService'
import '../../styles/welcome.css'

function Welcome() {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Pour l'instant on utilise l'ID 12 en dur, plus tard on le récupérera via les props ou le routing
        const data = await getUserData(12)
        // On accède maintenant à mainData qui contient les informations utilisateur
        setUserData(data.mainData)
      } catch (err) {
        setError('Impossible de récupérer les données utilisateur')
      }
    }

    fetchUserData()
  }, [])

  if (error) return <div className="error">{error}</div>
  if (!userData) return <div>Chargement...</div>

  return (
    <div className="welcome">
      <h1>Bonjour <span className="highlight">{userData.userInfos.firstName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Welcome 