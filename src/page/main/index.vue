<template>
  <div id='chat-container'>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>

import Header from '../header/index.vue'

export default {
  name:'mainContainer',
  data () {
    return {
      isChatOpen: false,
    }
  },
  components: {
    Header
  },
  created () {
   
  },
  methods: {
     handleClickBtn () {
      let status = this.isShowGoBackBtn = !this.isShowGoBackBtn
      title = status ? title : this.lastTitle
      this.changeTitle(title)
    }
  }
}
</script>
<style>
@import '../../assets/common.scss';
#chat-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>
