
import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import CV from './cv/components/'

import './cv/styles/cv.scss'

import routes from './router.js'

Vue.config.devtools = true
Vue.use(VueRouter)
Vue.use(CV)

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

