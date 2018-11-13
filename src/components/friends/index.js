import React from 'react'
import {Route} from 'react-router-dom'
import {List} from 'antd-mobile'

const Item = List.Item

class FriendsList extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
      return (
        <div>
          friends list
          <List>
            <Item  thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                   arrow="horizontal"
                   onClick={() => {}}
                   >张三</Item>
          </List>
        </div>
      )
  }
}

export default FriendsList