import Main from './page/main/index.vue'
import Login from './page/login/index.vue'
import Regist from './page/regist/index.vue'
import Info from './page/setting/personalInfo.vue'

import AddFriend from './page/friends/addFriend.vue'
import Group from './page/group/index.vue'
import CreateGroup from './page/group/createGroup.vue'
// import MessageBox from './page/message/index.vue'
const MessageBox = () => import('./page/message/index.vue')
// import FriendBox from './page/friends/friendList.vue'
const FriendBox = () => import('./page/friends/friendList.vue')

// import SettingBox from './page/setting/index.vue'
const SettingBox = () => import('./page/setting/index.vue')


import Test from './page/test/index.vue'

const router = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        component: MessageBox,
      },
      {
        path: '/friends',
        component: FriendBox,
      },
      {
        path: '/settings',
        component: SettingBox,
      }
    ]
  },
  {
    path: '/info',
    component: Info
  },
  {
    path: '/addFriend',
    component: AddFriend
  },
  {
    path: '/group',
    component: Group
  },
  {
    path: '/createGroup',
    component: CreateGroup
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/regist',
    component: Regist
  },
  {
    path: '/test',
    component: Test
  }
]


export default router