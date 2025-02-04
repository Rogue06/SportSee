import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import '../../styles/performance.css'
import { formatPerformance } from '../../services/formatService'

/**
 * Affiche le graphique radar des performances physiques
 * @param {Object} data - Données de performance avec {kind: number, value: number}
 */
function Performance({ data }) {
  if (!data) return null

  const formattedData = formatPerformance(data)

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
        value: PropTypes.number,
        kind: PropTypes.number
      })
    )
  })
}

export default Performance 