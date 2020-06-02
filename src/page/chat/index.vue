<template>
  <div id='main'>
    <ChatBox :animate='animate'></ChatBox>
    <Nav @switchPage='switchPage' ref="nav"></Nav>
  </div>
</template>
<script>
import Nav from '../nav/index.vue'
import ChatBox from './ChatBox.vue'
import Store from '../../utils/store'

export default {
  name:'mainContainer',
  data () {
    return {
      animate: {
        index: 0,
        width: parseFloat(document.documentElement.clientWidth),
        left: 0
      }
    }
  },
  components: {
    ChatBox,
    Nav
  },
  created () {
    this.updatePosition()
  },
  methods: {
    switchPage (index, isRelative) {
      const navList = this.$refs.nav.list
      if(isRelative){
        index = index + this.animate.index
        if(index > navList.length - 1){
          index = navList.length - 1
        }else if(index < 0){
          index = 0
        }
      }
      this.animate.index = index
      this.updatePosition()
    },
    updatePosition () {
      let {width, index} = this.animate
      this.animate.left = -width * index
    }
  },
   beforeRouteEnter(to, from, next) {
     console.log(1111111)
    if(Store.get('chat')){
      next()
    }else{
      next(false)
    }
  }
}
</script>
<style>
@import '../../assets/common.scss';
#main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>
