import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

export default function Navbar() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/login')
  }

  return (
    <header style={{ padding: '10px 20px', borderBottom: '1px solid var(--emerald-300)', marginBottom: 20 }}>
      <nav style={{ maxWidth: 800, margin: '0 auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Link to="/" style={{ color: 'var(--emerald-700)', fontWeight: 'bold', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'var(--emerald-700)', textDecoration: 'none' }}>About</Link>
        <div style={{ marginLeft: 'auto' }}>
          {!user && <Link to="/login" style={{ color: 'var(--emerald-700)', textDecoration: 'none' }}>Login</Link>}
          {user && (
            <button
              onClick={handleLogout}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--emerald-700)',
                cursor: 'pointer',
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}
