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
        <div class="emoji-container" v-if="isShowEmoji">
          <ul>
            <li @click="chooseEmoji(e)" v-for="e in emoji" :key='e.index'>{{e}}</li>
          </ul>
        </div>
        <div class="input-zone-container">
            <div class="emoji-btn" @click="switchEmojiContainer">
              <svg t="1595920075882" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6944"><path d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0z m0 984.064C251.392 984.064 39.936 772.608 39.936 512S251.392 39.936 512 39.936 984.064 251.392 984.064 512 772.608 984.064 512 984.064z" p-id="6945"></path><path d="M512 748.544c-134.144 0-243.2-108.544-243.2-243.2h-39.936c0 156.16 126.464 283.136 283.136 283.136s283.136-126.464 283.136-283.136H755.2c0 134.656-109.056 243.2-243.2 243.2zM268.8 343.552c0 25.088 19.968 45.056 45.056 45.056s45.056-19.968 45.056-45.056-19.968-45.056-45.056-45.056-45.056 19.968-45.056 45.056z m396.288 0c0 25.088 19.968 45.056 45.056 45.056S755.2 368.64 755.2 343.552s-19.968-45.056-45.056-45.056-45.056 19.968-45.056 45.056z" p-id="6946"></path></svg>
            </div>
            <textarea id="aaa" ref="inputTextArea" @input="markPosition" @click="markPosition" v-model="message"></textarea>
            <button  @click="clickSendBtn">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import avatarFilter from '../../mixins/avatarFilter.js'
import face from '../../assets/emoji.js'
export default {
  name:'chatbox',
  inject:['user', 'socket', 'groupSocketMap'],
  mixins: [avatarFilter],
  data () {
    return {
      message: '',
      face: face,
      isShowEmoji: false,
      position: 0 //光标位置
    }
  },
  computed: {
    emoji: function() {
      let rs = []
      var str = escape(this.face)
      var reg = /(%\w{5}){2}/g
      var match = null
      while(match = reg.exec(str)) {
        // console.log(match)
        rs.push(unescape(match[0]))
      }
      return rs
    },
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
    chooseEmoji(emoji) {
      console.log(emoji)
      const newMessage = this.insertEmoji(emoji)
      this.message = newMessage
      this.position++
       this.$nextTick(() => {
        console.log('nextTick')
        this.$refs.inputTextArea.focus()
        this.$refs.inputTextArea.selectionStart = this.position
      })
      console.log(newMessage)
    },
    insertEmoji(emoji) {
       console.log(this.message.slice(0, this.position))
       console.log(this.message.slice(this.position, this.message.length))
      return this.message.slice(0, this.position) + emoji + this.message.slice(this.position, this.message.length)
    },
    markPosition() {
      console.log(this.$refs.inputTextArea.selectionStart)
      this.position = this.$refs.inputTextArea.selectionStart
    },
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
    },
    switchEmojiContainer() {
      this.isShowEmoji = !this.isShowEmoji
      this.$nextTick(() => {
        console.log('nextTick')
        this.$refs.inputTextArea.focus()
        this.$refs.inputTextArea.selectionStart = this.position
      })
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
  overflow: hidden;
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
  position: relative;
  .emoji-container{
    height: 100px;
    position: absolute;
    top: -100px;
    overflow: auto;
    border-top: 1px solid #ccc;
    ul{
      li{
        float: left;
        font-size: 16px;
        width: 12.5%;
        text-align: center;
        padding: 10px 0;
      }
    }
  }
}
.chating .input-zone-container{
  height: 40px;
  width: 100%;
  border-top: 1px solid #ccc;
  display: flex;
}
.chating .input-zone-container .emoji-btn{
  flex: 2;
  text-align: center;
  line-height: 25px;
}
.chating .input-zone-container textarea{
  display: block;
  border: none;
  outline: none;
  resize: none;
  text-indent: 5px;
  flex:7
}

.chating .input-zone-container button{
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
