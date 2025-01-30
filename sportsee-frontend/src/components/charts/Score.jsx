import PropTypes from 'prop-types'
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'
import '../../styles/score.css'

/**
 * Composant affichant le score de l'utilisateur sous forme de PieChart
 * @param {Object} data - Score de l'utilisateur
 */
function Score({ score }) {
  const scorePercentage = score * 100
  const data = [
    { value: scorePercentage },
    { value: 100 - scorePercentage }
  ]

  return (
    <div className="score">
      <h2>Score</h2>
      <div className="score-background"></div>
      <ResponsiveContainer width="100%" height={263}>
        <PieChart>
          <Pie
            data={data} 
            dataKey="value" 
            innerRadius={80} 
            outerRadius={90}
            startAngle={90} 
            endAngle={450}
            cornerRadius={10} // Ajout du rayon arrondi
          >
            <Cell fill="#FF0000" />
            <Cell fill="transparent" />
          </Pie>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="score-text"
          >
            <tspan x="50%" dy="-10" className="score-value">{`${scorePercentage}%`}</tspan> 
            <tspan x="50%" dy="20" className="score-label">de votre</tspan>
            <tspan x="50%" dy="20" className="score-label">objectif</tspan>
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.number.isRequired
}

export default Score 