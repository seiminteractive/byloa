import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AdminPanel from '../views/AdminPanel.vue'
import Login from '../views/Login.vue'
import { initAuth } from '../composables/useAuth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'AdminPanel',
    component: AdminPanel,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guard para proteger rutas autenticadas
router.beforeEach(async (to, from, next) => {
  // Inicializar autenticación si no está hecha
  const user = await initAuth()

  if (to.meta.requiresAuth) {
    if (user) {
      next()
    } else {
      next('/login')
    }
  } else {
    if (to.path === '/login' && user) {
      next('/admin')
    } else {
      next()
    }
  }
})

export default router
