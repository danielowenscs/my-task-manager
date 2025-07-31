import { useState, useRef } from 'react'
import { db, auth } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import styles from './AddTodo.module.css'

export default function AddTodo() {
  const [text, setText] = useState('')
  const [dueDate, setDueDate] = useState('')
  const dateInputRef = useRef(null)

  const handleAddTodo = async (e) => {
    e.preventDefault()
    const user = auth.currentUser
    if (!user || !text.trim() || !dueDate) return

    await addDoc(collection(db, 'todos'), {
      text: text.trim(),
      completed: false,
      userId: user.uid,
      dueDate: new Date(dueDate),
      createdAt: new Date()
    })

    setText('')
    setDueDate('')
  }

  const openDatePicker = () => {
    if (dateInputRef.current && dateInputRef.current.showPicker) {
      dateInputRef.current.showPicker()
    } else {
      dateInputRef.current.focus()
    }
  }

  if (!auth.currentUser) return null

  return (
    <form onSubmit={handleAddTodo} className={styles.form}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
      />
      <div className={styles.dateWrapper} onClick={openDatePicker}>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          ref={dateInputRef}
          className={`${styles.input} ${styles.dateInput}`}
        />
      </div>
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  )
}
