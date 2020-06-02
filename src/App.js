
import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'

import VueRouter from 'vue-router'

import routes from './router.js'

import './assets/common.scss'

Vue.config.devtools = true
// Axios.defaults.baseURL = '/api'
Vue.prototype.axios = Axios
Vue.use(VueRouter)


const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

