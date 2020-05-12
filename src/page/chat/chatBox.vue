<template>
  <div id='chat'>
    <FriendBox :userList='userList' :unread='unread' @startChat="openChat"></FriendBox>
    <div class='chating' v-if='isChatOpen'>
      <div class='title'>正在和{{currentFirend}}聊天</div>
      <div class="display-box">
        <ul>
          <li v-for='item in msgStore[currentFirend]' :class='[item.from == user ? "self-message" : "friend-message"]' class='message-item'>
            {{item.message}}
          </li>
        </ul>
      </div>
      <div class='input-zone'>
        <textarea v-model="message" @keyup.enter="sendMsg"></textarea>
      </div>
    </div>
  </div>
</template>
<script>
import SocketIO from 'socket.io-client'
import FriendBox from './friendBox.vue'
export default {
  name:'chatbox',
  components: {
    FriendBox
  },
  data () {
    return {
      user: '',
      userList: null,
      socket: null,
      isChatOpen: false,
      currentFirend: '',
      msgStore: {},
      message: '',
      unread: {}
    }
  },
  created () {
    let user = USER.user
    this.user = user
    const socket =  SocketIO('http://127.0.0.1:8888/?user=' + user)
    this.socket = socket
    let msgStore = this.msgStore

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

  },
  methods: {
    processUnread (reciveData) {
      let friend = reciveData.from
      if(friend != this.currentFirend){
        var num = this.unread[friend] ? this.unread[friend] : 0
        this.$set(this.unread, friend, ++num)
      }
    },
    openChat (id, friend){
      if(this.user == friend){
        return
      }
      this.isChatOpen = true
      this.unread[friend] = 0
      this.currentFirend = friend
      console.log(id, friend)
    },
    sendMsg() {
      let friend = this.currentFirend
      let msgStore = this.msgStore
      let msgBody = {
        message: this.message,
        time: new Date().getTime(),
        from: USER.user,
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
<style>
#chat {
  width: 100%;
  height: 470px;
  display: flex;
}
.chating{
  display: flex;
  flex-direction: column;
  flex:1
}
.chating .title{
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 5px;
}
.chating .display-box{
  height: 100%;
  width: 100%;
}
.chating .input-zone{
  height: 40px;
  width: 100%;
  border-top: 1px solid #ccc;
}
.chating .input-zone textarea{
  display: block;
  width: 98%;
  /* height: 100%; */
  border: none;
  outline: none;
  resize: none;
  text-indent: 5px;
}
.message-item{
  width: 100%;
}
.self-message{
  text-align: right;
}
.friend-message{
  text-align: left;
}
</style>