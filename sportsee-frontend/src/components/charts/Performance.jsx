import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import '../../styles/performance.css'

/**
 * Composant affichant le graphique radar des performances
 * @param {Object} data - Données de performance de l'utilisateur
 */
function Performance({ data }) {
  if (!data) return null

  // Traduction des kinds en français dans l'ordre de la maquette
  const kindMapping = {
    1: 'Intensité',
    2: 'Vitesse',
    3: 'Force',
    4: 'Endurance',
    5: 'Energie',
    6: 'Cardio'
  }

  // Formatage des données pour le graphique
  const formattedData = data.data
    .map(item => ({
      value: item.value,
      kind: kindMapping[item.kind]
    }))

  return (
    <div className="performance">
      <ResponsiveContainer width="100%" height={263}>
        <RadarChart 
          data={formattedData}
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          outerRadius={90}
          startAngle={-150}
          endAngle={210}
        >
          <PolarGrid 
            radialLines={false}
            strokeWidth={1}
            stroke="#FFFFFF"
            gridType="polygon"
          />
          <PolarAngleAxis 
            dataKey="kind" 
            tick={{ 
              fill: 'white',
              fontSize: 12,
              dy: 3,
              dx: 0,
              textAnchor: 'middle'
            }}
            tickLine={false}
            radius={150}
          />
          <Radar
            name="Performance"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
            stroke="transparent"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

Performance.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired
      })
    ).isRequired
  }).isRequired
}

export default Performance 