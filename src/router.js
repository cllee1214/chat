import Main from './page/main/index.vue'
import Personal from './page/personal/data.vue'

const router = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/personal',
    component: Personal
  }
]


export default router