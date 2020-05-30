<template>
  <div id='chating-list'>

    <ul v-if='userList'>
      <li class='user-item' :class='{cur:k == currentFriend}' @click="clickUser(val, k)" v-for='(val,k) in userList'>
        <span class='unread' v-show="unread[k]">{{unread[k]}}</span>
        <span class='avatar'></span>
        <div class='info'>
          <div class='nickname'>{{k}}</div>
          <div class='last-msg'>今天你有空吗？可以出去吃个饭</div>
        </div>
      </li>
    </ul>
    <div v-else>
      当前没人在线
    </div>
  </div>
</template>
<script>
export default {
  name:'chating-list',
  props: ['userList', 'unread', 'currentFriend'],
  created () {
    console.log(this.userList)
  },
  methods: {
    clickUser (id, user) {
      this.$emit('startChat', id, user)
    }
  }
}
</script>

<style>
#chating-list{
  width: 200px;
  height: 100%;
  flex:none;
  background-color: rgba(53, 63, 72, 1);
}
#chating-list ul{
  clear: both;
}
.user-item{
  height: 60px;
  color: white;
  width: 100%;
  position: relative;
}
.user-item:hover{
  background-color: rgba(62, 71, 82, 1);
  cursor: pointer;
}
.avatar{
  width: 35px;
  height: 35px;
  border-radius: 20px;
  background: white;;
  margin: 15px 10px 0 15px;
  float: left;
}
.info{
  float: left;
  margin-top: 10px;
  width: calc(100% - 60px);
}
.nickname{
  font-size: 18px;
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
.cur{
   background-color: rgba(62, 71, 82, 1);
  cursor: pointer;
}
</style>
