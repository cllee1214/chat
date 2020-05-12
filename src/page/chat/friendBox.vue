<template>
  <div id='chating-list'>

    <ul v-if='userList'>
      <li class='user-item' @click="clickUser(val, k)" v-for='(val,k) in userList'>
        <span v-show="unread[k]">{{unread[k]}}</span>{{k}}
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
  props: ['userList', 'unread'],
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
  background: greenyellow;
  flex:none
}
.user-item{
  height: 60px;
  border-bottom: 1px solid rosybrown;
}
</style>
