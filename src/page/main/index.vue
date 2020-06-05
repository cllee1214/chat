<template>
  <div id='chat-container'>
    <Header></Header>
    <Modal v-model='isOpenModal' :okText='btnsText.ok' :cancelText='btnsText.cancel' @ok='okFn' @cancel='cancleFn'>
     {{addFriendContent}}
    </Modal>
    <router-view></router-view>
  </div>
</template>
<script>

import Header from '../header/index.vue'
import Store from '../../utils/store'
import SocketIO from 'socket.io-client'
export default {
  name:'mainContainer',
  data () {
    return {
      isOpenModal: false,
      isChatOpen: false,
      addFriendContent: '',
      socket: SocketIO('http://127.0.0.1:8888/?user=' + Store.get('chat').user),
      user: Store.get('chat').user,
      messageFrom: '',
      option: '', //好友请求的回复的两种类型： 同意/搁置
      btnsText: {
        ok: '',
        cancel: ''
      }
    }
  },
  provide (){
    return {
      socket: this.socket,
      user: this.user
    }
  },
  components: {
    Header
  },
  created () {
    const socket = this.socket
    socket.on('addFriend', (data) => {
      console.log(data)
      if(data.option){
        //收到好友请求回复
        this.btnsText.cancel = ''
      }else{
        //收到好友请求
        this.btnsText.cancel = '暂时忽略'
      }
      this.btnsText.ok = '确定'
      this.option = data.option
      this.messageFrom = data.from
      this.addFriendContent = data.message
      this.isOpenModal = true
    })
  },
  methods: {
     handleClickBtn () {
      let status = this.isShowGoBackBtn = !this.isShowGoBackBtn
      title = status ? title : this.lastTitle
      this.changeTitle(title)
    },
    okFn() {
      if(!this.option){
        console.log('friend add!')
        this.socket.emit('addFriend', {
          to: this.messageFrom,
          from: this.user,
          type: 'response',
          option: 'agree'
        }) 
      }
     this.isOpenModal = false
    },
    cancleFn() {

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
