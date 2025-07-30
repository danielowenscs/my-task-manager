import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import styles from './NavBar.module.css'

export default function Navbar() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/login')
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.leftLinks}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/about" className={styles.link}>About</Link>
        </div>
        <div className={styles.rightLinks}>
          {!user && <Link to="/login" className={styles.link}>Login</Link>}
          {user && (
            <button onClick={handleLogout} className={styles.button}>
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}
