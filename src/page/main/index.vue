<template>
  <div id='main'>
    <ChatBox></ChatBox>
  </div>
</template>
<script>
import ChatBox from '../chat/ChatBox.vue'
export default {
  name:'mainContainer',
  components: {
    ChatBox
  },
  created () {
    // console.log(window.USER)
  }
}
</script>
