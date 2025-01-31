import PropTypes from 'prop-types'
import '../../styles/keyData.css'
import caloriesIcon from '../../assets/calories-icon.png'
import proteinsIcon from '../../assets/protein-icon.png'
import carbsIcon from '../../assets/carbs-icon.png'
import fatIcon from '../../assets/fat-icon.png'

function KeyData({ data }) {
  const items = [
    {
      icon: caloriesIcon,
      value: `${data.calorieCount}kCal`,
      label: 'Calories'
    },
    {
      icon: proteinsIcon,
      value: `${data.proteinCount}g`,
      label: 'Protéines'
    },
    {
      icon: carbsIcon,
      value: `${data.carbohydrateCount}g`,
      label: 'Glucides'
    },
    {
      icon: fatIcon,
      value: `${data.lipidCount}g`,
      label: 'Lipides'
    }
  ]

  return (
    <div className="key-data">
      {items.map((item, index) => (
        <div className="key-data-item" key={index}>
          <img src={item.icon} alt={item.label} className="key-data-icon" />
          <div className="key-data-text">
            <p className="key-data-value">{item.value}</p>
            <p className="key-data-label">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

KeyData.propTypes = {
  data: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired
  }).isRequired
}

export default KeyData 