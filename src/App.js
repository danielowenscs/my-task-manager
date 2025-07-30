import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/HomePage'
import Login from './pages/LoginPage'
import About from './pages/AboutPage'

import { useAuth } from './hooks/useAuth'

import './assets/globals.css'

export default function App() {
  const { user, loading } = useAuth()

  if (loading) return <p>Loading...</p>

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/about"
          element={user ? <About /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  )
}
