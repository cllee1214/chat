
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import App from './App.vue'

import VueRouter from 'vue-router'

import MyComponents from './components/index.js'

import routes from './router.js'
import storeData from './store.js'

import './assets/common.scss'

Vue.config.devtools = true
// Axios.defaults.baseURL = '/api'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(MyComponents, {
  requst: Axios
})

const router = new VueRouter({
  routes
})
const store = new Vuex.Store(storeData)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

