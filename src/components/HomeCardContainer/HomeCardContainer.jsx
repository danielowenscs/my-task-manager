import styles from './HomeCardContainer.module.css'
import HomeCard from '../HomeCard/HomeCard'
import dataImage from '../../assets/images/data-image.png'

export default function HomeCardContainer() {
  const cards = [
    { title: 'Analytics and Tracking', image: dataImage },
    { title: 'Analytics and Tracking', image: dataImage },
    { title: 'Analytics and Tracking', image: dataImage },
    { title: 'Analytics and Tracking', image: dataImage }
  ]

  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <HomeCard 
          key={index} 
          title={card.title} 
          image={card.image} 
          link="#" 
        />
      ))}
    </div>
  )
}
