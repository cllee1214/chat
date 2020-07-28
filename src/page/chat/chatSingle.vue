<template>
    <div class='chating' v-if='isChatOpen'>
      <Header :title="title"></Header>
      <div class="display-box">
        <ul>
          <li :key="item.index" v-for='item in currentMessageList' :class='[item.from == user ? "self-message" : "friend-message"]' class='message-item'>
             <span class='avatar'>
               <img :src="avatarMap[item.from ] | renderImgPath" alt="">
             </span>
            <div class='message'>
               {{item.message}}
            </div>
          </li>
        </ul>
      </div>
      <div class='input-zone'>
        <textarea v-model="message"></textarea>
        <button  @click="clickSendBtn">发送</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import avatarFilter from '../../mixins/avatarFilter.js'
export default {
  name:'chatbox',
  inject:['user', 'socket', 'groupSocketMap'],
  mixins: [avatarFilter],
  data () {
    return {
      message: '',
      // unread: {},
    }
  },
  computed: {
    title:function() {
      return this.currentChatType === 'single' ? 
      `正在和 ${this.$store.state.currentFirend.user} 聊天...` 
      : 
      this.currentGroup.name + '(' + this.currentGroup.users.length + ')'
    },
    currentMessageList: function() {
      return this.currentChatType === 'single' ? 
      this.msgStore.single[this.currentFirend.user]
      :
      this.msgStore.group[this.currentGroup.id]
    },
    ...mapState([
      'msgStore',
      'isChatOpen',
      'currentFirend',
      'avatarMap',
      'currentChatType',
      'currentGroup'
    ])
  },
  created () {
    const socket = this.socket
    let msgStore = this.msgStore
  },
  methods: {
    processUnread (reciveData) {
      let friend = reciveData.from
      if(friend != this.currentFirend){
        var num = this.unread[friend] ? this.unread[friend] : 0
        this.$set(this.unread, friend, ++num)
      }
    },
    sendSingle() {
      let friend = this.currentFirend.user
      let msgBody = {
        message: this.message,
        time: new Date().getTime(),
        from: this.user,
        to: friend,
        type: 'single',
        action: 'send'
      }
      //本地储存消息
      this.$store.commit('setMessageStore', msgBody)
      //发送到服务器中转
      this.socket.emit('msg', msgBody)
      //清空输入框
      this.message = ''
    },
    sendGoup() {
      const socket = this.groupSocketMap[this.currentGroup.id]
      let msgBody = {
        message: this.message,
        time: new Date().getTime(),
        from: this.user,
        to: this.currentGroup.id,
        type: 'group',
        action: 'send'
      }
      socket.emit('msg', msgBody)
    },
    clickSendBtn() {
      this.currentChatType === 'single' ? this.sendSingle() : this.sendGoup()
    }
  }
}
</script>
<style lang='scss'>
@import '../../assets/common.scss';
.chating{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: #fff;
  display: flex;
  flex-direction: column;
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
  width: px2rem(90);
  height: px2rem(90);
  border-radius: 20px;
  margin: 0px 10px 0 15px;
  float: right;
}
.self-message .message{
  float: right;
  height:px2rem(90);
  line-height: px2rem(90);
  border-radius: 10px;
  padding: 0 10px;
  color: #fff;
  font-size: 16px;
  background-color: #fff;
  color: #aaa;
}
.friend-message .avatar{
  width: px2rem(90);
  height: px2rem(90);
  margin: 0px 10px 0 15px;
  float: left;
}
.friend-message .message{
  float: left;
  height:px2rem(90);
  line-height: px2rem(90);
  border-radius: 10px;
  padding: 0 10px;
  color: #aaa;
  font-size: 16px;
  background-color: #fff
}
 
</style>