import React from 'react'

class UserList extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let userList = this.props.userList
    let userKeys = Object.keys(userList)
    let items = userKeys.map((key) =>{
      return <li class='user-item' key={key}>{key}</li>
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