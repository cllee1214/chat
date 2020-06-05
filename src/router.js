import Main from './page/main/index.vue'
import Login from './page/login/index.vue'
import Regist from './page/regist/index.vue'
import Info from './page/chat/personalInfo.vue'
import Chat from './page/chat/index.vue'
import AddFriend from './page/addFriend/index.vue'

const router = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        component: Chat
      },
      {
        path: '/info',
        component: Info
      },
      {
        path: '/addFriend',
        component: AddFriend
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/regist',
    component: Regist
  }
]


export default router