import TodoList from '../components/TodoList/TodoList'
import { useAuth } from '../hooks/useAuth'
import NavBar from '../components/NavBar/NavBar'
import AnalyticsCard from '../components/AnalyticsCard/AnalyticsCard'

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
      <AnalyticsCard/>
    </div>
  )
}
