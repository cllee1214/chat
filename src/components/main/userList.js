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
    let isShowChatBox = this.props.isShowChatBox
    console.log(userList)
    let userKeys = Object.keys(userList)
    let items = userKeys.map((key) =>{
      let msgNum = (this.props.msgStore[key] || []).filter(function(item){
        return !item.isSelfSend
      }).length 
      let msgNumStyle = null
      if(msgNum){
        if(key == localStorage.getItem('nickname')){
          msgNumStyle = {display: 'none'}
        }
      }else{
        msgNumStyle = {display: 'none'}
      }
      return key == localStorage.getItem('nickname') ?
      null
      :
      <li class='user-item' onClick={(e) => this.switchChatBox(key, userList[key])} key={key}>
        {this.props.msgStore[key] && this.props.msgStore[key].length ? (<span style={msgNumStyle} class='msg-num'>{msgNum}</span>) : null}
        {key}
      </li>
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