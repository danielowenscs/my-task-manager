import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { useAuth } from '../hooks/useAuth'
import NavBar from '../components/NavBar'

export default function Home() {
  const { user, loading } = useAuth()

  if (loading) return <p>Loading...</p>

  if (!user) {
    return <p>Please sign in to manage your tasks.</p>
  }

  return (
    <div>
      <h1>My Task Manager</h1>
       <NavBar />
      <AddTodo />
      <TodoList />
    </div>
  )
}
