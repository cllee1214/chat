<template>
  <div id='frind-list'>
    <ul v-if='friendsInfo'>
      <li class='user-item' @click="clickUser(friend.user)" v-for='friend  in friendsInfo' :key="friend.user">
        <span class='avatar'>
          <img :src="friend.avatar | renderImgPath" alt="">
        </span>
        <div class='info'>
          <div class='nickname'>{{friend.nickname}}</div>
          <div class='feeling'><span>[当前在线] </span>{{friend.declaration}}</div>
        </div>
      </li>
    </ul>
    <div v-else>
      暂无好友
    </div>
  </div>
</template>
<script>
import avatarFilter from '../../mixins/avatarFilter.js'

export default {
  name:'friends-list',
  props: ['userList', 'unread', 'currentFriend', 'friendsInfo'],
  mixins:[avatarFilter],
  created () {
    console.log(this.userList)
  },
  methods: {
    clickUser (user) {
      let id = this.userList[user]
      this.$emit('startChat', id, user)
    }
  }
}
</script>

<style lang='scss'>
#frind-list{
  width: 100%;
  height: 100%;
  background: #fff;
  ul {
    clear: both;
  }
}
.user-item{
  height: 60px;
  /* color: #ccc; */
  width: 100%;
  position: relative;
}
.avatar{
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin: 15px 10px 0 15px;
  float: left;
  overflow: hidden;
  border:1px solid #ccc;
  box-sizing: border-box;
  img{
    width: 100%;
    height: 100%;
  }
}
.info{
  float: left;
  margin-top: 10px;
  width: calc(100% - 60px);
}
.nickname{
  font-size: 18px;
}
.feeling{
  font-size: 12px;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
  color: #aaa;
  padding-right: 20px;
}

</style>
