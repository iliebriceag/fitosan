import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../components/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/open',
    name: 'Open',
    component: () => import('../components/Open.vue')
  },
  {
    path: '/cart',
    name: 'Coș cumpărături',
    component: Cart
  },



  { path: "/:pathName(.*)", name: "NotFound", component: () => import("../views/Home.vue") },
  { path: '/.*', redirect: { name: 'home' } },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // click scroll to top
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
}
})

export default router
