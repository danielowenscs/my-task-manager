import { format, isSameMonth, isSameDay } from 'date-fns'
import styles from './CalendarCell.module.css'

export default function CalendarCell({ day, monthStart, today, onClick }) {
  return (
    <div
      className={`${styles.cell} 
        ${!isSameMonth(day, monthStart) ? styles.outside : ''} 
        ${isSameDay(day, today) ? styles.today : ''}`}
      onClick={() => onClick(day)}
    >
      <div className={styles.date}>{format(day, 'd')}</div>
    </div>
  )
}
