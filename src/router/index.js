import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{requiresAuth: true}
    },
    {
      path: '/login',
      name: 'loginPage',
      component: () => import('@/views/login/loginView.vue')
    },
    {
      path: '/main/:docId?',
      name: 'mainPage',
      component: () => import('@/views/home/home.vue'),
      meta:{requiresAuth: true}
    },
    {
      path: '/createUser',
      name: 'createUserPage',
      component: () => import('@/views/createUser/createUser.vue'),
      meta:{requiresAuth: true}
    },
    {
      path: '/profile',
      name: 'profilePage',
      component: () => import('@/views/profile/profileView.vue'),
      meta:{requiresAuth: true}
    },
    {
      path: '/register',
      name: 'registerPage',
      component: () => import('@/views/table/tableView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to) => {
  const requiresAuth = to.meta.requiresAuth
  const isAuthenticated = true
  if (requiresAuth && !isAuthenticated) {
    return { name: 'loginPage' }
  }
  return true
})

export default router
