<template>
  <div id='message-list'>
    <ul v-if='userList'>
      <li class='user-item' :class='{cur:k == currentFriend}' @click="clickUser(val, k)" v-for='(val,k) in userList' :key="k">
        <!-- <span class='unread' v-show="unread[k]">{{unread[k]}}</span> -->
        <span class='avatar'></span>
        <div class='info'>
          <div class='nickname'>{{k}}</div>
          <div class='last-msg'>最后一句话</div>
        </div>
      </li>
    </ul>
    <div v-else>
     当前无消息
    </div>
  </div>
</template>
<script>
export default {
  name:'chating-list',
  props: ['unread', 'currentFriend'],
  created () {
   
  },
  computed: {
    userList() {
      return this.$store.state.userList
    }
  },
  methods: {
    clickUser (id, user) {
      this.$emit('startChat', id, user)
    }
  }
}
</script>

<style>
#message-list{
  width: 100%;
  height: 100%;
  background: #fff;
  ul {
    clear: both;
  }
}
.last-msg{
  font-size: 12px;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
  color: #aaa;
  padding-right: 20px;
}
.unread{
  border-radius: 50px;
  width: 16px;
  height: 16px;
  text-align: center;
  position: absolute;
  right: 5px;
  top:17px;
  font-size: 12px;
  background-color: rgba(50, 213, 140, 1) ;
}
</style>
