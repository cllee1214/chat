<template>
 <div id='setting-list'>
   <div class='setting-box'>
      <ul>
        <li>
          <router-link :to="{path: 'info',query: {user: user}}">个人资料</router-link>
        </li>
        <li>进入朋友圈</li>
        <li>夜间</li>
        <li>
           <router-link :to="{path: 'group', query: {user: user}}">加入群聊</router-link>
        </li>
        <li>
           <router-link :to="{path: 'addFriend', query: {user: user}}">添加好友</router-link>
        </li>
        <li>
           <div @click='loginout' class="loginout">退出登录</div>
        </li>
      </ul>
   </div>
  
 </div>
</template>

<script>
import Store from '../../utils/store'
export default {
  name:'setting-box',
  inject: ['user'],
  methods: {
    loginout () {
      console.log('退出')
      Store.remove('chat')
      this.$router.push('/login')
      window.socket.disconnect()
    }
  }
}
</script>

<style lang='scss'>
@import '../../assets/common.scss';
#setting-list{
  width: 100%;
  height: 100%;
  background: #fff;
}
.setting-box{
  width: 90%;
  margin: auto;
  ul{
    width: 100%;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    padding-top:10%;
    li{
      font-size: 16px;
      border-left:1px solid #ccc;
      border-top: 1px solid #ccc;
      box-sizing: border-box;
      width: 33.33%;
      float: left;
      height: px2rem(200);
      line-height: px2rem(200);
      text-align: center;
      &:nth-child(3n){
        border-right:1px solid #ccc;
      }
    }
  }
}
</style>