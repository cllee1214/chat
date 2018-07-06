import React from 'react'
import emitter from '../../util/event'
class ChartBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    }
  }
  sendMegToSingle() {
    const socket = this.props.socketClient
    let currentChatSocketId = this.props.currentChatSocketId
    socket.emit('msg', {
      currentChatSocketId,
      msg: this.state.msg,
      from: localStorage.getItem('nickname')
    })
  }
  close() {
    emitter.emit('switchChatBox', {
      currentChatUser: '',
      currentChatSocketId: '',
      status: false
    })
  }
  render() {
      return (
        <div class="chat-box">
          <div class='chat-box-wrap'>
            <div class='user'>{this.props.currentChatUser}</div>
            <div class='content'>内容显示</div>
            <div class='msg-edit'>
              <textarea onChange={(e) => this.setState({msg: e.target.value})} value= {this.state.msg}/>
            </div>
            <div class='btns'>
                <button onClick={this.close}>关闭</button>
                <button onClick={(e) => this.sendMegToSingle()}>发送</button>
            </div>
          </div>
        </div>
      )
  }
}

export default ChartBox