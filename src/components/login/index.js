import React from 'react'
import './index.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let nickname = this.state.nickname
    localStorage.setItem('nickname', nickname)
    window.location.replace('#/main')
  }
  handleChange(e) {
    console.log(e.target.value)
    this.setState({nickname: e.target.value})
  }
  render() {
      return(
      <div class='login-zone'>
        <label>配置用户：</label>
        <input type="text" placeholder="请输入昵称吧" value={this.state.nickname} onChange={(e) => this.handleChange(e)}/>
        <button onClick={this.handleClick}>go</button>
      </div>
      )
  }
}

export default Login