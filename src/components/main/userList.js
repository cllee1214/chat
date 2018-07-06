import React from 'react'
import emitter from '../../util/event'

class UserList extends React.Component {
  constructor (props) {
    super(props)
  }
  switchChatBox(currentChatUser, currentChatSocketId) {
    emitter.emit('switchChatBox',{
      currentChatUser,
      currentChatSocketId,
      status: true
    })
  }
  render() {
    let userList = this.props.userList
    let userKeys = Object.keys(userList)
    let items = userKeys.map((key) =>{
      return <li class='user-item' onClick={(e) => this.switchChatBox(key, userList[key])} key={key}>{key}</li>
    })
    return (
      <div class='user-list'>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}

export default UserList