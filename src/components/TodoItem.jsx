import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'

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
    <div className="todo-item">
      <div
        onClick={handleToggle}
        className={`todo-text ${todo.completed ? 'completed' : ''}`}
      >
        {todo.text}
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        ✕
      </button>
    </div>
  )
}
