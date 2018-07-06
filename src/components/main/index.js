import React from 'react'
import SocketIO from 'socket.io-client'

import emitter from '../../util/event'

import UserList from './userList'
import Header from './header'
import ChatBox from './chatBox'

import './index.css'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      socketClient: null,
      userList: {},
      isShowChatBox: false,
      currentChatUser: '',
      currentChatSocketId: '',
      msgStore: {}
    }
  }
  componentWillMount ()  {
    let nickname = localStorage.getItem('nickname')
    const socket = SocketIO('http://localhost:3000/?nickname=' + nickname)
    socket.on('userList', (data) => {
      this.setState({
        userList: data
      })
      console.log(data)
    })
    socket.on('sys', function(data){
      console.log(data)
    })
    socket.on('msg', (data) => {
      console.log(data)
      let store = this.state.msgStore
      let msgFrom = data.from
      if(!store[msgFrom]) {
        store[msgFrom] = []
      }
      store[msgFrom].push(data)
      this.setState({
        msgStore: store
      })
      console.log(this.state.msgStore)
    })
    this.setState({
      socketClient: socket
    })
    emitter.addListener('switchChatBox', (data) => {
      this.setState({
        isShowChatBox: data.status,
        currentChatUser: data.currentChatUser,
        currentChatSocketId: data.currentChatSocketId
      })
    })
  }
  render() {
      return (
        <div id='main'>
          <Header />
          {this.state.isShowChatBox ? <ChatBox msgStore={this.state.msgStore} currentChatSocketId={this.state.currentChatSocketId} socketClient={this.state.socketClient} currentChatUser={this.state.currentChatUser} /> : null}
          <UserList msgStore={this.state.msgStore} socketClient={this.state.socketClient} userList={this.state.userList}/>
        </div>
      )
  }
}

export default Main