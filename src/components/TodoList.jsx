import { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import { db, auth } from '../firebase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'

export default function TodoList() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    if (!auth.currentUser) return

    const q = query(
      collection(db, 'todos'),
      where('userId', '==', auth.currentUser.uid)
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setTodos(data)
    })

    return () => unsubscribe()
  }, [auth.currentUser])

  function onToggle(id) {
    console.log('Toggle todo with id:', id)
  }

  function onDelete(id) {
    console.log('Delete todo with id:', id)
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
