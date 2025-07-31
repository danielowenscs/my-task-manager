import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import styles from './TodoItem.module.css'

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

  return (
    <div 
      className={`${styles.card} ${todo.completed ? styles.completed : ''}`} 
      onClick={handleToggle}
    >
      <span className={styles.text}>{todo.text}</span>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        ✕
      </button>
    </div>
  )
}