import React from 'react'
import SocketIO from 'socket.io-client'

import UserList from './userList'
import Header from './header'

import './index.css'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userList: {}
    }
  }
  componentWillMount ()  {
    let nickname = localStorage.getItem('nickname')
    const socket = SocketIO('http://localhost:3000/?nickname=' + nickname)
    socket.on('userList', (data) => {
      this.setState({
        userList: data
      })
      console.log('-=====userlist===')
      console.log(data)
    })
    socket.on('sys', function(data){
      console.log(data)
    })
  }
  render() {
      return (
        <div id='main'>
          <Header />
          <UserList userList={this.state.userList}/>
        </div>
      )
  }
}

export default Main