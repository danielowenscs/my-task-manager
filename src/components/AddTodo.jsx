import { useState } from 'react'
import { db, auth } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function AddTodo() {
  const [text, setText] = useState('')

  const handleAddTodo = async (e) => {
    e.preventDefault()
    const user = auth.currentUser
    if (!user || !text.trim()) return

    await addDoc(collection(db, 'todos'), {
      text: text.trim(),
      completed: false,
      userId: user.uid,
      createdAt: new Date()
    })

    setText('')
  }

  if (!auth.currentUser) return null

  return (
    <form onSubmit={handleAddTodo} className="todo-add-form">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-add-btn">
        Add
      </button>
    </form>
  )
}
