import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()
  await authStore.getSession()

  const isAuthPAge = ['/login', '/register'].includes(to.path)
  if (!authStore.user && !isAuthPAge) {
    return {
      name: '/login',
    }
  }

  if (authStore.user && isAuthPAge) {
    return {
      name: '/',
    }
  }
})

export default router
