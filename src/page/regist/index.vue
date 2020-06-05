<template>
  <div class="full">
    <p class="login-title">用户注册</p>
   <div class='input-row'>
        <input type="text" placeholder="请输入用户名" name='user' v-model="user">
    </div>
    <div class='input-row'>
        <input type="password" placeholder="请输入密码" name='pwd' v-model="pwd">
    </div>
    <div class='input-row'>
        <input type="password" placeholder="请再次输入密码" name='repwd' v-model="repwd">
    </div>
    <div class='login-btn' @click="submit">注册</div>
    <div class="router-login">
      已经有账号了？去<router-link to="/login"> 登录</router-link>
    </div>
  </div>
</template>

<script>

import '../../assets/login/index.scss'
import Store from '../../utils/store'
import loginStatusMixin  from '../../mixins/loginStatus'

export default {
  name: 'regist',
  mixins:[loginStatusMixin],
  data () {
    return {
      user: '',
      pwd: '',
      repwd: ''
    }
  },
  methods: {
    submit () {
      if(this.pwd && this.repwd){
          if(this.repwd !== this.pwd){
              alert('两次输入的密码不一致')
              return
          }
      }else{
          alert('请输入正确的密码')
          return
      }
      this.axios.post('/regist', {
        user: this.user,
        pwd: this.pwd
      }).then((res) => {
          const data = res.data
          if(data.code === '1') {
              Store.set('chat', {
                  token: data.token,
                  user: this.user
              })
              this.$router.push('/')
          }
      }).catch((err) => {
          console.log(err)
      })
    }
  }
}
</script>
