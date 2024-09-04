import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Contact from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
});