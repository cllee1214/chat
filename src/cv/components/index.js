
import Icon from './icon/index'
import Button from './button/index'

const componentsMap = {
  CvButton: Button,
  CvIcon: Icon
}



function install (Vue, opt) {
  for(var name in componentsMap){
    Vue.component(name, componentsMap[name])
  }
}

const CV = {
  install: install
}


export default CV