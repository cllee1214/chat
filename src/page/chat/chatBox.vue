<template>
  <div id='chat'>
    <div class='scroll-box' :style="{left: animate.left + 'px'}" ref="scrollBox">
        <div class='scroll-item'>
        <MessageBox :userList='userList' :unread='unread' @startChat="startChat"></MessageBox>
      </div>
      <div  class='scroll-item'>
        <FriendBox :userList='userList' :currentFriend='currentFirend' :friendsInfo='friendsInfo' @startChat="startChat"></FriendBox>
      </div>
      <div  class='scroll-item'>
        <SettingBox :user='user'></SettingBox>
      </div>
    </div>
    <div class='chating' v-if='isChatOpen'>
      <div class="display-box">
        <ul>
          <li v-for='item in msgStore[currentFirend]' :class='[item.from == user ? "self-message" : "friend-message"]' class='message-item'>
             <span class='avatar'></span>
            <div class='message'>
               {{item.message}}
            </div>
          </li>
        </ul>
      </div>
      <div class='input-zone'>
        <textarea v-model="message"></textarea>
        <button  @click="sendMsg">发送</button>
      </div>
    </div>
  </div>
</template>
<script>
import SocketIO from 'socket.io-client'
import Store from '../../utils/store'

import FriendBox from './friendBox.vue'
import MessageBox from './messageBox.vue'
import SettingBox from './settingBox.vue'

import Event from '../../eventBus.js'

export default {
  name:'chatbox',
  props: ['animate', 'friendsInfo'],
  inject: ['socket','user'],
  components: {
    FriendBox,
    MessageBox,
    SettingBox
  },
  data () {
    return {
      userList: null,
      currentFirend: '',
      msgStore: {},
      message: '',
      unread: {},
      isChatOpen: false
    }
  },
  computed: {
    
  },
  created () {
    const socket = this.socket
    let msgStore = this.msgStore
    console.log('chatbox create!')
    socket.on('userList', (data) => {
      console.log(data)
      this.userList = data
    })
    socket.on('sys', function(data){
      console.log(data)
    })
    socket.on('msg', (data) => {
      console.log('recive:',data)

      //处理未读消息
      this.processUnread(data)

      let friend = data.from
      if(msgStore && !msgStore[friend]){
        this.$set(msgStore, friend, [])
      }
      //更新为本地收到消息的时间
      data.time = new Date().getTime()
      msgStore[friend].push(data)
    })

    this.listenEvent()
  },
  mounted () {
    const width = parseFloat(document.documentElement.clientWidth)
    let startX = 0, endX = 0, backoffset = 0
    let currentIndex = this.animate.index
    let currentItem = this.$parent.$children[currentIndex]
    let scrollCondition = width * 0.5
    let scrollBox = this.$refs.scrollBox
    console.log(scrollBox)

    function t (time, func) {
      var last = 0
      return function() {
        let current = +new Date()
        let arg = Array.prototype.slice.apply(arguments)
        if(current - last){
          func.apply(this,arg)
          last = current
        }
        // timer = setTimeout(() => {
        //  func.apply(this,arg)
        // }, time)
      }
    }

    // function scrollFn(e) {
    //    let touch = e.touches[0]
    //    console.log(touch.pageX)
    //    let originX = parseFloat(scrollBox.style.left)
    //    endX = touch.pageX
    //    backoffset = (endX - startX) 
    //    if(originX + backoffset > 0){
    //       scrollBox.style.left = '0px'
    //       return
    //    }
    //     if(originX + backoffset < -640){
    //       scrollBox.style.left = '-640px'
    //       return
    //    }
       
    //    scrollBox.style.left = (originX + backoffset) + 'px'
    // }

    // document.addEventListener('touchstart', e => {
    //    let touch = e.touches[0]
    //    startX = touch.pageX
    // })
    // document.addEventListener('touchmove', scrollFn)
    // document.addEventListener('touchend', e => {
    //    let moveX = endX - startX
    //    if(moveX == 0)return
    //    if(Math.abs(moveX) >= scrollCondition){
    //      this.$emit('changeTitle', moveX > 0 ? -1 : 1, true)
    //    }else{

    //    }
    // })
  },
  activated () {
    console.log('ac')
  },
  deactivated () {
    console.log('deac')
  },
  methods: {
    processUnread (reciveData) {
      let friend = reciveData.from
      if(friend != this.currentFirend){
        var num = this.unread[friend] ? this.unread[friend] : 0
        this.$set(this.unread, friend, ++num)
      }
    },
    startChat (id, friend){
      if(this.user == friend){
        return
      }
      this.unread[friend] = 0
      this.currentFirend = friend
      Event.$emit('switchHeader', `正在和${friend}聊天`, true)
      this.isChatOpen = true
      console.log(id, friend)
    },
    listenEvent () {
      Event.$on('closeChat', () => {
        this.isChatOpen = false
      })
    },
    sendMsg() {
      let friend = this.currentFirend
      let msgStore = this.msgStore
      let msgBody = {
        message: this.message,
        time: new Date().getTime(),
        from: this.user,
        to: friend
      }
      const socket = this.socket
      if(msgStore && !msgStore[friend]){
        this.$set(msgStore, friend, [])
      }
      //本地储存消息
      msgStore[friend].push(msgBody)
      //发送到服务器中转
      socket.emit('msg', msgBody)
      console.log(this.message)
      //清空输入框
      this.message = ''
    }
  }
}
</script>
<style lang='scss'>
@import '../../assets/common.scss';
#chat {
  width: 100%;
  height: 100%;
  background-color: rgba(243, 247, 248, 1);
  position: relative;
  .scroll-box{
    height: 100%;
    width: calc(100% * 3);
    position: absolute;
    /* transition: all 0.3s linear 0s; */
    top: 0;
    display: flex;
    .scroll-item{
      height: 100%;
      flex:1
  }
  }
}
.chating{
  display: flex;
  flex-direction: column;
  flex:1;
  width: 100%;
  height: 100%;
  background: #ccc;
  position: absolute;
  z-index: 1;
}
.chating .title{
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding-left: 15px;
  border-bottom: 1px solid #98A3AD;
}
.chating .display-box{
  height: 100%;
  width: 100%;
}
.chating .input-zone{
  height: 40px;
  width: 100%;
  border-top: 1px solid #ccc;
  display: flex;
}
.chating .input-zone textarea{
  display: block;
  border: none;
  outline: none;
  resize: none;
  text-indent: 5px;
  flex:7
}

.chating .input-zone button{
  display: block;
  border: none;
  outline: none;
  resize: none;
  text-indent: 5px;
  flex:3
}
.display-box{
  overflow-y: auto;
}
.message-item{
  width: 100%;
  padding: 15px 0;
  overflow: hidden;
}
.self-message{
  text-align: right;
}
.friend-message{
  text-align: left;
}
.self-message .avatar{
  width: px2rem(60);
 height: px2rem(60);
  border-radius: 20px;
  background: gray;;
  margin: 0px 10px 0 15px;
  float: right;
}
.self-message .message{
  float: right;
 height:px2rem(60);
  line-height: px2rem(60);
  border-radius: 10px;
  padding: 0 10px;
  color: #fff;
  font-size: 16px;
  background-color: #fff;
  color: #aaa;
}
.friend-message .avatar{
  width: px2rem(60);
  height: px2rem(60);
  /* border-radius: 20px; */
  background: gray;;
  margin: 0px 10px 0 15px;
  float: left;
}
.friend-message .message{
  float: left;
  height:px2rem(60);
  line-height: px2rem(60);
  border-radius: 10px;
  padding: 0 10px;
  color: #aaa;
  font-size: 16px;
  background-color: #fff
}
 
</style>