import TodoList from '../components/TodoList/TodoList'
import { useAuth } from '../hooks/useAuth'
import NavBar from '../components/NavBar/NavBar'
import HomeCardContainer from '../components/HomeCardContainer/HomeCardContainer'
import Calendar from '../components/Calendar/Calendar'

export default function Home() {
  const { user, loading } = useAuth()

  if (loading) return <p>Loading...</p>

  if (!user) {
    return <p>Please sign in to manage your tasks.</p>
  }

  return (
    <div>
       <NavBar />
      <TodoList />
      <Calendar/>
      <HomeCardContainer/>
    </div>
  )
}
