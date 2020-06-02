<template>
  <div class="full">
    <p class="login-title">密码登录</p>
   <div class='input-row'>
        <input type="text" placeholder="请输入用户名" name='user' v-model="user">
    </div>
    <div class='input-row'>
        <input type="password" placeholder="请输入密码" name='pwd' v-model="pwd">
    </div>
    <div class='login-btn' @click="submit">登录</div>
  </div>
</template>

<script>
import '../../assets/login/index.scss'
import loginStatusMixin  from '../../mixins/loginStatus'
import Store from '../../utils/store'
export default {
  name: 'login',
  mixins:[loginStatusMixin],
  data () {
    return {
      user: '',
      pwd: ''
    }
  },
  methods: {
    submit () {
      console.log(this.axios)
      this.axios.post('/login', {
        user: this.user,
        pwd: this.pwd
      }).then((res) => {
        let data = res.data
        if(data.code === '1'){
          Store.set('chat', {
            token: data.token,
            user: this.user
          })
          this.$router.push('/')
        }else{

        }
      }).catch((err) => {

      })
    }
  }
}
</script>
