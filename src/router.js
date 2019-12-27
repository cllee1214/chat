import Main from './page/main/index.vue'
import Personal from './page/personal/data.vue'
import Login from './page/login/index.vue'
const router = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/login',
    component: Login
  }
]


export default router