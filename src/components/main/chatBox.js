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
    let from = localStorage.getItem('nickname')
    socket.emit('msg', {
      currentChatSocketId,
      msg: this.state.msg,
      from,
      belong: from
    })
    emitter.emit('addSelfMsg', {
      msg: this.state.msg,
      from
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
      let contentList = this.props.msgStore[this.props.currentChatUser] || []
      console.log(this.props.msgStore)
      console.log(this.props.currentChatUser)
     
      let contentDetail = contentList.map(function(content){
        let nameStyle = content.isSelfSend ? {display: 'none'} : null
        return (
          <div className={'content-detail' + (content.isSelfSend ? ' by-self': '')}>
            <div style={nameStyle} class='name'>{content.isSelfSend ? '我自己' : content.from}</div>
            <div class='content-msg'>{content.msg}</div>
          </div>
        )
      })
      return (
        <div class="chat-box">
          <div class='chat-box-wrap'>
            <div class='user'>{this.props.currentChatUser}</div>
            <div class='content'>
              {contentDetail}
            </div>
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