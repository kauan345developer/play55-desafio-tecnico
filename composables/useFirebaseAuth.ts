import type { User, Auth } from 'firebase/auth';
import { 
  GoogleAuthProvider, 
  signInWithPopup 
} from 'firebase/auth'

export default function() {
  const { $auth } = useNuxtApp()
  const user = useState<User | null>("fb_user", () => null)

  const signInWithGoogle = async (): Promise<boolean> => {
    try {
      const provider = new GoogleAuthProvider()
      const userCreds = await signInWithPopup($auth as Auth, provider)
      if (userCreds) {
        user.value = userCreds.user
        console.log('User signed in:', user)
        return true
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Google sign in error:', error.message)
      }
      return false
    }
    return false
  }

  return {
    user,
    signInWithGoogle
  }
}