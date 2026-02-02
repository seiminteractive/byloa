import { ref, computed } from 'vue'
import { useToast } from 'vue-toastification'
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from '../lib/firebase'

const auth = getAuth()

// Global auth state (singleton)
let currentUser = ref(null)
let isAuthenticated = computed(() => !!currentUser.value)
let isLoading = ref(true)
let authInitialized = false

// Initialize auth state on app load (only once)
export const initAuth = () => {
  return new Promise((resolve) => {
    if (authInitialized) {
      resolve(currentUser.value)
      return
    }

    onAuthStateChanged(auth, (user) => {
      currentUser.value = user
      isLoading.value = false
      authInitialized = true
      resolve(user)
    })
  })
}

export const useAuth = () => {
  const toast = useToast()
  const localLoading = ref(false)

  const login = async (email, password) => {
    try {
      localLoading.value = true
      const result = await signInWithEmailAndPassword(auth, email, password)
      currentUser.value = result.user
      toast.success('¡Bienvenido!')
      return result.user
    } catch (error) {
      let message = 'Error al iniciar sesión'
      
      if (error.code === 'auth/user-not-found') {
        message = 'Usuario no encontrado'
      } else if (error.code === 'auth/wrong-password') {
        message = 'Contraseña incorrecta'
      } else if (error.code === 'auth/invalid-email') {
        message = 'Email inválido'
      } else if (error.code === 'auth/too-many-requests') {
        message = 'Demasiados intentos. Intenta más tarde'
      }
      
      toast.error(message)
      throw error
    } finally {
      localLoading.value = false
    }
  }

  const logout = async () => {
    try {
      localLoading.value = true
      await signOut(auth)
      currentUser.value = null
      toast.success('Sesión cerrada')
    } catch (error) {
      toast.error('Error al cerrar sesión')
      throw error
    } finally {
      localLoading.value = false
    }
  }

  return {
    login,
    logout,
    currentUser,
    isAuthenticated,
    isLoading: localLoading
  }
}
