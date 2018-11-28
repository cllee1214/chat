import React from 'react'
import {List} from 'antd-mobile'

const Item = List.Item

class FriendsList extends React.Component {
  constructor (props) {
    super(props)
  }

  switchDialog(user) {
    this.props.history.push({
      pathname:'/main/dialog',
      query: user
    })
  }

  render() {
      let userList = this.props.userList
      let userListArr = []
      for(var key in userList){
        userListArr.push({
          name: key,
          id: userList[key]
        })
      }
      let AllList = userListArr.length ? userListArr.map((user) => {
        return (<List  key={user.id}>
        <Item  thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
               arrow="horizontal"
               onClick={() => this.switchDialog(user)}
               >{user.name}</Item>
        </List>)
      }) : (<div>暂无好友上线</div>)

      return (
        <div>
          friends list
          {AllList}
        </div>
      )
  }
}

export default FriendsList