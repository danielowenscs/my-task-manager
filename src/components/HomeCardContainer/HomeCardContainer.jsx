import styles from './HomeCardContainer.module.css'
import AnalyticsCard from '../AnalyticsCard/AnalyticsCard'

export default function HomeCardContainer() {
  const cards = [
    { title: 'Analytics and Tracking' },
    { title: 'Analytics and Tracking' }
  ]

  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <AnalyticsCard key={index} title={card.title} />
      ))}
    </div>
  )
}
