import Modal from './modal/index.vue'
import SearchBox from './search/index.vue'
import Header from './header/index.vue'
import Tips from './tips/index.vue'

const ComponentsMap = {
  Modal,
  SearchBox,
  Header,
  Tips
}
let MyComponents = {
  install: function(Vue, options) {

    for(let k in ComponentsMap) {
      Vue.component(k, ComponentsMap[k])
    }

    //挂载axios
    Vue.prototype.axios = options.requst 

    const newTipsConstractor = Vue.extend(Tips)

    let newTipsInstance = new newTipsConstractor()

    Vue.prototype.$Tips = {
      show: function(content) {
        console.log('show')
        let newTips = newTipsInstance.$mount()
        document.getElementById('container').appendChild(newTips.$el)
        newTips.show(content)
      }
    }
    
  }
}


export default MyComponents