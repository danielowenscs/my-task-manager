import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { 
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

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
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      {!user ? (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      ) : (
        <>
          <p>Signed in as: {user.displayName}</p>
          <button onClick={logOut}>Log Out</button>
        </>
      )}
    </div>
  )
}
