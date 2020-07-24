import Main from './page/main/index.vue'
import Login from './page/login/index.vue'
import Regist from './page/regist/index.vue'
import Info from './page/chat/personalInfo.vue'

import AddFriend from './page/addFriend/index.vue'
import Group from './page/group/index.vue'
import createGroup from './page/group/createGroup.vue'
import messageBox from './page/chat/messageBox.vue'
import friendBox from './page/chat/friendBox.vue'
import settingBox from './page/chat/settingBox.vue'

import Test from './page/test/index.vue'

const router = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        component: messageBox,
      },
      {
        path: '/friends',
        component: friendBox,
      },
      {
        path: '/settings',
        component: settingBox,
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
    component: createGroup
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