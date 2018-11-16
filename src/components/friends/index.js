import React from 'react'
import {Route} from 'react-router-dom'
import {List} from 'antd-mobile'

const Item = List.Item

class FriendsList extends React.Component {
  constructor (props) {
    super(props)
    console.log('friends1')
  }

  render() {
      let userList = this.props.userList

      console.log('friends2')
      console.log(userList)
      let allList = userList.map((user) => {
        console.log(user)
        return (<List>
        <Item  thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
               arrow="horizontal"
               onClick={() => {}}
               >{user}</Item>
        </List>)
      })
      return (
        <div>
          friends list
          <allList />
        </div>
      )
  }
}

export default FriendsList