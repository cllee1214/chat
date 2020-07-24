import Modal from './modal/index.vue'
import SearchBox from './search/index.vue'
import Header from './header/index.vue'

const ComponentsMap = {
  Modal,
  SearchBox,
  Header
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