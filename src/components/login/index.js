import React from 'react'
import Requst from '../../util/requst'
import { List, InputItem, WhiteSpace,Button,Toast } from 'antd-mobile';
import Store from '../../util/store'

import './index.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      password: '',
      isLoading: false
    }
  }
  submit() {
    let nickname = this.state.nickname
    let password = this.state.password
    this.state.isLoading = true
    Requst.post('/login', {
      nickname,
      password
    }).then((res) => {
      res.data.code = 1
      if(res.data.code === 1){
        Toast.success(res.data.msg, 2 ,()=>{
          Store.set('token', res.data.token)
          this.props.history.push('/main')
        })
      }else{
        Toast.fail(res.data.msg)
      }
    }).catch((err) => {
      this.props.history.push('/main')
      Toast.offline('网络错误，请稍后再试！')
    }).finally(() => {
      this.state.isLoading = false
    })
  }
  handleNicknameChange(value) {
    this.setState({nickname: value})
  }
  handlePasswordChange(value) {
    this.setState({password: value})
  }
  render() {
      return(
      <div style={{width: '80%',margin:'auto',paddingTop: '100px'}}>
        <List>
          <InputItem type='text' placeholder="昵称" onChange={(value) => this.handleNicknameChange(value)}></InputItem>
        </List>
        <WhiteSpace />
        <List>
          <InputItem type='password'  placeholder="密码" onChange={(value) => this.handlePasswordChange(value)}></InputItem>
        </List>
        <WhiteSpace />
        <Button type='primary' loading={this.state.isLoading} onClick={() => this.submit()}>登录</Button>
      </div>
      )
  }
}

export default Login