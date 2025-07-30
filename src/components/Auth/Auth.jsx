import { useEffect, useState } from 'react'
import { auth } from  '../../firebase'
import { 
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import styles from './Auth.module.css'

export default function Auth() {
  const [user, setUser] = useState(null)
  const provider = new GoogleAuthProvider()

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider)
    } catch (err) {
      console.error(err)
    }
  }

  const logOut = async () => {
    await signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className={styles.container}>
      {!user ? (
        <button onClick={signInWithGoogle} className={styles.button}>
          Sign In with Google
        </button>
      ) : (
        <button onClick={logOut} className={styles.button}>
          Log Out
        </button>
      )}
    </div>
  )
}
