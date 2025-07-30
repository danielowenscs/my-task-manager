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
    <nav style={{ padding: '10px 20px', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: 20 }}>Home</Link>

      {!user && <Link to="/login">Login</Link>}

      {user && (
        <button
          onClick={handleLogout}
          style={{
            marginLeft: 20,
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            color: 'blue',
            textDecoration: 'underline',
          }}
        >
          Logout
        </button>
      )}
    </nav>
  )
}
