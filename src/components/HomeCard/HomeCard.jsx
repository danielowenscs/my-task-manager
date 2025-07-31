import styles from './HomeCard.module.css'

export default function HomeCard({ title, link = '#', image }) {
  return (
    <div className={styles.card}>
      <div className={styles.textSection}>
        <h3 className={styles.title}>
          <span className={styles.highlight}>{title}</span>
        </h3>
        <a href={link} className={styles.link}>Learn more</a>
      </div>
      <div className={styles.imageSection}>
        <img src={image} alt={title} className={styles.image} />
      </div>
    </div>
  )
}
