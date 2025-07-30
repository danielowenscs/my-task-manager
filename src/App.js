import Home from './pages/HomePage.jsx'
import Auth from './components/Auth'
import AddTodo from './components/AddTodo'
import './assets/globals.css'

function App() {
  return (
    <div>
      <Auth />
      <AddTodo />
      <Home />
    </div>
  )
}

export default App
