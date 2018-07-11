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
      console.log('recive msg', data)
      data = this.markReadAndisSendSelf(data, this.state.currentChatUser)
      this.addMsg2Store(data)
    })
    this.setState({
      socketClient: socket
    })
    emitter.addListener('switchChatBox', (data) => {
      let currentChatUser = data.currentChatUser
      this.setState({
        isShowChatBox: data.status,
        currentChatUser,
        currentChatSocketId: data.currentChatSocketId
      })
      this.updateReadAndisSendSelf(currentChatUser)
    })
    emitter.addListener('addSelfMsg', (data) => {
      data.belong = this.state.currentChatUser
      data = this.markReadAndisSendSelf(data, data.belong)
      this.addMsg2Store(data)
    })
  }
  updateReadAndisSendSelf(currentChatUser) {
    let store = this.state.msgStore
    let currentUserStore =  store[currentChatUser] || []
    let newCurrentUserStore = currentUserStore.map((data) => {
      return this.markReadAndisSendSelf(data, currentChatUser)
    })
    store[currentChatUser] = newCurrentUserStore
    this.setState({
      msgStore: store
    })
  }
  //标记是否已读、是否是自己发的信息
  markReadAndisSendSelf(data, currentChatUser) {
    let self = localStorage.getItem('nickname')
    let from = data.from
    data.hasRead = (self === from || from === currentChatUser)
    data.isSelfSend = self == from
    return data
  }
  addMsg2Store(data) {  
    let store = this.state.msgStore
    let msgBelong = data.belong
    if(!store[msgBelong]) {
      store[msgBelong] = []
    }
    store[msgBelong].push(data)
    this.setState({
      msgStore: store
    })
  }
  render() {
      return (
        <div id='main'>
          <Header />
          {this.state.isShowChatBox ? <ChatBox  msgStore={this.state.msgStore} currentChatSocketId={this.state.currentChatSocketId} socketClient={this.state.socketClient} currentChatUser={this.state.currentChatUser} /> : null}
          <UserList isShowChatBox={this.state.isShowChatBox} msgStore={this.state.msgStore} socketClient={this.state.socketClient} userList={this.state.userList}/>
        </div>
      )
  }
}

export default Main