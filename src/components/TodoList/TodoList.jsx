import { useEffect, useState } from 'react'
import { db, auth } from '../../firebase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import TodoItem from '../TodoItem/TodoItem'
import AddTodo from '../AddTodo/AddTodo'
import styles from './TodoList.module.css'

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribeAuth()
  }, [])

  useEffect(() => {
    if (!user) return
    const q = query(
      collection(db, 'todos'),
      where('userId', '==', user.uid)
    )
    const unsubscribeTodos = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setTodos(data)
    })
    return () => unsubscribeTodos()
  }, [user])

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <AddTodo />
    </div>
  )
}
