import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import styles from './TodoItem.module.css'
import { format } from 'date-fns'

export default function TodoItem({ todo }) {
  if (!todo || !todo.text) return null

  const handleToggle = async () => {
    const todoRef = doc(db, 'todos', todo.id)
    await updateDoc(todoRef, { completed: !todo.completed })
  }

  const handleDelete = async (e) => {
    e.stopPropagation()
    const todoRef = doc(db, 'todos', todo.id)
    await deleteDoc(todoRef)
  }

  const formattedDate = todo.dueDate ? format(todo.dueDate.toDate ? todo.dueDate.toDate() : todo.dueDate, 'MM/dd/yyyy') : ''

  return (
    <div 
      className={`${styles.card} ${todo.completed ? styles.completed : ''}`} 
      onClick={handleToggle}
    >
      <span className={styles.text}>{todo.text}</span>
      <div className={styles.rightSection}>
        {formattedDate && <span className={styles.date}>{formattedDate}</span>}
        <button className={styles.deleteBtn} onClick={handleDelete}>
          ✕
        </button>
      </div>
    </div>
  )
}
