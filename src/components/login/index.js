import React from 'react'
import './index.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.history.push("/test")
  }
  render() {
      return(
      <div class='login-zone'>
        <label>配置用户：</label>
        <input type="text" placeholder="请输入昵称吧" />
        <button onClick={this.handleClick}>go</button>
      </div>
      )
  }
}

export default Login