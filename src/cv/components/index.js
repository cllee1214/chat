
import Icon from './icon/index'
import Button from './button/index'
import Input from './input/index'

const componentsMap = {
  CvButton: Button,
  CvIcon: Icon,
  CvInput: Input
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