import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import '../../styles/averageSession.css'
import { formatAverageSessions } from '../../services/formatService'

/**
* Affiche le graphique linéaire de la durée moyenne des sessions d'entraînement
 * @param {Object} data - Données des sessions avec {day: number, sessionLength: number}
 */
function AverageSession({ data }) {
  if (!data) return null

  const formattedData = formatAverageSessions(data)

  // Composant personnalisé pour le tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload || !payload[0]) return null
    return (
      <div className="average-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    )
  }
  // Ajout de la validation des props pour CustomTooltip
CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
  }

  // Gestion de l'assombrissement au survol
  const CustomCursor = ({ points }) => {
    return (
      <rect
        x={points[0].x}
        y={0}
        width={1000} // Largeur suffisante pour couvrir la zone à droite
        height="100%"
        fill="rgba(0, 0, 0, 0.1)"
      />
    )
  }
  // Ajout de la validation des props pour CustomCursor
CustomCursor.propTypes = {
    points: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
      })
    )
  };

  return (
    <div className="average-session">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={263}>
        <LineChart
          data={formattedData}
          margin={{ top: 80, right: 12, bottom: 15, left: 12 }}
        >
          <XAxis 
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: 'rgba(255, 255, 255, 0.6)', 
              fontSize: 12,
              dy: 10
            }}
            padding={{ left: 5, right: 5 }}
            tickMargin={10}
          />
          <YAxis 
            hide={true}
            domain={['dataMin-10', 'dataMax+10']}
          />
          <Tooltip 
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#gradientLine)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'rgba(255,255,255,0.6)',
              strokeWidth: 10,
              r: 4,
            }}
          />
          <defs>
            <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSession 