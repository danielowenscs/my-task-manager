import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import styles from './TodoItem.module.css'

export default function TodoItem({ todo }) {
  if (!todo || !todo.text) return null

  const handleToggle = async () => {
    const todoRef = doc(db, 'todos', todo.id)
    await updateDoc(todoRef, { completed: !todo.completed })
  }

  const handleDelete = async () => {
    const todoRef = doc(db, 'todos', todo.id)
    await deleteDoc(todoRef)
  }

  return (
    <div className={styles.card}>
      <div
        onClick={handleToggle}
        className={`${styles.title} ${todo.completed ? styles.completed : ''}`}
      >
        {todo.text}
      </div>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        ✕
      </button>
    </div>
  )
}