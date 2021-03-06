import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/kids-workshops',
    name: 'kids-workshops',
    component: () => import('../views/KidsWorkshops.vue')
  },
  {
    path: '/masterclasses',
    name: 'masterclasses',
    component: () => import('../views/Masterclasses.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/mission',
    name: 'mission',
    component: () => import('../views/Mission.vue')
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('../views/ContactUs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
