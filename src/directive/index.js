
import clipConfig from './clip/index.js'


const myDirectives = {
  install(Vue, options) {
    Vue.directive('clip', clipConfig)
  }
}

export default myDirectives