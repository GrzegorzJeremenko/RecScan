import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import News from '../views/News.vue'
import Scanner from '../views/Scanner.vue'
import Award from '../views/Award.vue'
import Trash from '../views/Trash.vue'
import Register from '../views/Register.vue'
import AddItem from '../views/AddItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'news',
        component: News,
      },
      {
        path: 'award',
        component: Award,
      }
    ]
  },
  {
    path: '/scanner',
    component: Scanner,
  },
  {
    path: '/trash',
    component: Trash,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/additem',
    component: AddItem
  }
]

const router = new VueRouter({
  routes
})

export default router
