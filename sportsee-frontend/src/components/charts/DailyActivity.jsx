import PropTypes from 'prop-types' 
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import '../../styles/dailyActivity.css'

/**
 * Composant affichant le graphique d'activité quotidienne
 * @param {Object} data - Données d'activité de l'utilisateur
 */
function DailyActivity({ data }) {
  if (!data) return null

  // Formatage simple des données avec index de 1 à 10
  const formattedData = data.sessions.map((session, index) => ({
    ...session,
    day: index + 1 // Utilisation directe de l'index comme jour
  }))

  // Composant simple pour le tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload) return null
    
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    )
  }

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
  }

  return (
    <div className="daily-activity">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart 
          data={formattedData}
          barGap={8}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} 
          />
          <XAxis 
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: 14 }}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis 
            yAxisId="kilogram"
            orientation="right"
            domain={[75, 85]} // Valeurs fixes pour plus de clarté
            tickCount={3} // Nombre de graduations 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14 }}
          />
          <YAxis 
            yAxisId="calories"
            orientation="left"
            domain={[0, 500]}
            hide={true}
          />
          <Tooltip 
            content={<CustomTooltip />}
            cursor={{ 
              fill: '#C4C4C4',  // Couleur du rectangle
              opacity: 0.5,     // Opacité
              // ou pour le supprimer complètement :
              // fill: 'transparent'
            }} 
          />
          <Legend 
            verticalAlign="top"
            align="right"
            height={50}
            iconType="circle" // Utilisation directe des points au lieu d'un composant personnalisé
            iconSize={8}
          />
          <Bar 
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
            name="Poids (kg)"
          />
          <Bar 
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
            name="Calories brûlées (kCal)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

// Modification de la validation des props
DailyActivity.propTypes = {
  data: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired
      })
    ).isRequired
  }).isRequired
}

export default DailyActivity 