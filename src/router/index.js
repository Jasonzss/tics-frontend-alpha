import { createRouter, createWebHistory } from 'vue-router'
import LoginIndex from '@/views/Login/LoginIndex.vue'
import LayoutIndex from '@/views/Layout/LayoutIndex.vue'
import Home from '@/views/Home/HomeIndex.vue'
import Category from '@/views/Category/CategoryIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      component: LayoutIndex,
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
      component: LoginIndex
    },
  ]
})

export default router
