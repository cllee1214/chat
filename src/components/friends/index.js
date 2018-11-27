import React from 'react'
import {List} from 'antd-mobile'

const Item = List.Item

class FriendsList extends React.Component {
  constructor (props) {
    super(props)
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
      console.log(userListArr)
      let AllList = userListArr.length ? userListArr.map((user) => {
        console.log(user)
        return (<List>
        <Item  thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
               arrow="horizontal"
               onClick={() => {}}
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