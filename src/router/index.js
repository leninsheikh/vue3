import { createRouter, createWebHistory } from 'vue-router'
import CompositionAPI from '../views/CompositionAPI'
import VeeValidate from "@/views/VeeValidate";

const routes = [
  {
    path: '/composition',
    name: 'composition',
    component: CompositionAPI
  },
  {
    path: '/vee-validate',
    name: 'veeValidate',
    component: VeeValidate
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
