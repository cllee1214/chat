import Modal from './modal/index.vue'

const ComponentsMap = {
  Modal
}
let MyComponents = {
  install: function(Vue, options) {

    for(let k in ComponentsMap) {
      Vue.component(k, ComponentsMap[k])
    }

    //挂载axios
    Vue.prototype.axios = options.requst 
  }
}


export default MyComponents