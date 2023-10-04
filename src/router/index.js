import { createRouter, createWebHistory } from 'vue-router'
import LoginPanel from '@/views/Login/login-index.vue'
import IndexPanel from '@/views/Layout/layout-index.vue'
import Home from '@/views/Home/home-index.vue'
import Category from '@/views/Category/category-index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: IndexPanel,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path:'category',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: LoginPanel
    },
  ]
})

export default router
