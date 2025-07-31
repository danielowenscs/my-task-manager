import styles from './AnalyticsCard.module.css'
import dataImage from '../../assets/images/data-image.png'

export default function AnalyticsCard({ title }) {
  return (
    <div className={styles.card}>
      <div className={styles.textSection}>
        <h3 className={styles.title}>
          <span className={styles.highlight}>{title}Your Analytics</span>
        </h3>
        <a href="#" className={styles.link}>Learn more</a>
      </div>
      <div className={styles.imageSection}>
        <img src={dataImage} alt="Analytics" className={styles.image} />
      </div>
    </div>
  )
}
